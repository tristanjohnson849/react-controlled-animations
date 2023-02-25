import { act, renderHook } from '@testing-library/react-hooks';

import { actAndThen } from '../testUtils.js';

import useQueuedState from './useQueuedState.js';

const render = <S>(initialState?: S) => renderHook(() => useQueuedState<S>(initialState)).result;

test('initialState=defined => get defined state', () => {
    const result = render('hello');
    expect(result.current.current).toBe('hello');
});

test('initialState=undefined => get undefined state', () => {
    const result = render();
    expect(result.current.current).toBe(undefined);
});

test('enqueues=once => state is unchanged', () => {
    actAndThen(
        render(1),
        ({ enqueue }) => enqueue(2),
        ({ current }) => expect(current).toBe(1)
    );
});

test('enqueues=acrossRenders => state is unchanged', () => {
    actAndThen(render(1), [({ enqueue }) => enqueue(2), ({ enqueue }) => enqueue(3)], ({ current }) =>
        expect(current).toBe(1)
    );
});

test('enqueues=once transition => state is queued value', () => {
    actAndThen(render(1), [({ enqueue }) => enqueue(2), ({ transition }) => transition()], ({ current }) =>
        expect(current).toBe(2)
    );
});

test('enqueues=oneRender actionType=value transition => state is first queued value', () => {
    actAndThen(
        render(1),
        [
            ({ enqueue }) => {
                enqueue(2);
                enqueue(3);
            },
            ({ transition }) => transition(),
        ],
        ({ current }) => expect(current).toBe(2)
    );
});

test('enqueues=oneRender actionType=callback transition => state is first queued value', () => {
    actAndThen(
        render(1),
        [
            ({ enqueue }) => {
                enqueue((prev) => prev + 1);
                enqueue((prev) => prev + 2);
            },
            ({ transition }) => transition(),
        ],
        ({ current }) => expect(current).toBe(2)
    );
});

test('enqueues=acrossRenders actionType=value transition => state is first queued value', () => {
    actAndThen(
        render(1),
        [({ enqueue }) => enqueue(2), ({ enqueue }) => enqueue(3), ({ transition }) => transition()],
        ({ current }) => expect(current).toBe(2)
    );
});

test('enqueues=acrossRenders actionType=callback transition => state is first queued value', () => {
    actAndThen(
        render(1),
        [
            ({ enqueue }) => enqueue((prev) => prev + 1),
            ({ enqueue }) => enqueue((prev) => prev + 2),
            ({ transition }) => transition(),
        ],
        ({ current }) => expect(current).toBe(2)
    );
});

test('enqueues=oneRender actionType=both transitionAll  => state is last queued value', () => {
    actAndThen(
        render(1),
        [
            ({ enqueue }) => {
                enqueue(2);
                enqueue((prev) => prev * 2);
            },
            ({ transitionAll }) => transitionAll(),
        ],
        ({ current }) => expect(current).toBe(4)
    );
});

test('enqueues=acrossRenders actionType=both transitionAll => state is last queued value', () => {
    actAndThen(
        render(1),
        [
            ({ enqueue }) => enqueue(2),
            ({ enqueue }) => enqueue((prev) => prev * 2),
            ({ transitionAll }) => transitionAll(),
        ],
        ({ current }) => expect(current).toBe(4)
    );
});

test('transition empty => state is unchanged', () => {
    actAndThen(
        render(1),
        ({ transition }) => transition(),
        ({ current }) => expect(current).toBe(1)
    );
});

test('transitionAll empty => state is unchanged', () => {
    actAndThen(
        render(1),
        ({ transitionAll }) => transitionAll(),
        ({ current }) => expect(current).toBe(1)
    );
});

// test that callbacks called from outdated owners (likely refs) are still valid
test('outdated enqueue => state is unchanged', () => {
    const result = render(1);
    const outdated = result.current;
    act(() => {
        result.current.enqueue(2);
    });
    act(() => {
        outdated.enqueue(3);
    });
    expect(result.current.current).toBe(1);
});

test('enqueue, enqueue, store ref, transition, outdated transition => state is second queued value', () => {
    const result = render(1);
    act(() => {
        result.current.enqueue(2);
        result.current.enqueue(3);
    });
    const outdated = result.current;
    act(() => {
        result.current.transition();
    });
    act(() => {
        outdated.transition();
    });
    expect(result.current.current).toBe(3);
});

test('enqueue, store ref, enqueue, transitionAll => state is last queued value', () => {
    const result = render(1);
    act(() => {
        result.current.enqueue(2);
    });
    const outdated = result.current;
    act(() => {
        result.current.enqueue(3);
    });
    act(() => {
        outdated.transitionAll();
    });
    expect(result.current.current).toBe(3);
});
