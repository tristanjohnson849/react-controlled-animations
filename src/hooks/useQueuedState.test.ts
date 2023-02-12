import { act, renderHook } from '@testing-library/react-hooks';

import useQueuedState from './useQueuedState';

const render = <S>(initialState?: S) => renderHook(() => useQueuedState<S>(initialState));

test('initialState=defined => get defined state', () => {
    const { result } = render('hello');
    expect(result.current.current).toBe('hello');
});

test('initialState=undefined => get undefined state', () => {
    const { result } = render();
    expect(result.current.current).toBe(undefined);
});

test('enqueues=once => state is unchanged', () => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
    });
    expect(result.current.current).toBe(1);
});

test('enqueues=acrossRenders => state is unchanged', () => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
    });
    act(() => {
        result.current.enqueue(3);
    });
    expect(result.current.current).toBe(1);
});

test('enqueues=once transition => state is queued value', () => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
    });
    act(() => {
        result.current.transition();
    });
    expect(result.current.current).toBe(2);
});

test('enqueues=oneRender actionType=value transition => state is first queued value', () => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
        result.current.enqueue(3);
    });
    act(() => {
        result.current.transition();
    });
    expect(result.current.current).toBe(2);
});

test('enqueues=oneRender actionType=callback transition => state is first queued value', () => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue((prev) => prev + 1);
        result.current.enqueue((prev) => prev + 2);
    });
    act(() => {
        result.current.transition();
    });
    expect(result.current.current).toBe(2);
});

test('enqueues=acrossRenders actionType=value transition => state is first queued value', () => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
    });
    act(() => {
        result.current.enqueue(3);
    });
    act(() => {
        result.current.transition();
    });
    expect(result.current.current).toBe(2);
});

test('enqueues=acrossRenders actionType=callback transition => state is first queued value', () => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue((prev) => prev + 1);
    });
    act(() => {
        result.current.enqueue((prev) => prev + 2);
    });
    act(() => {
        result.current.transition();
    });
    expect(result.current.current).toBe(2);
});

test('enqueues=oneRender actionType=both transitionAll  => state is last queued value', () => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
        result.current.enqueue((prev) => prev * 2);
    });
    act(() => {
        result.current.transitionAll();
    });
    expect(result.current.current).toBe(4);
});

test('enqueues=acrossRenders actionType=both transitionAll => state is last queued value', () => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
    });
    act(() => {
        result.current.enqueue((prev) => prev * 2);
    });
    act(() => {
        result.current.transitionAll();
    });
    expect(result.current.current).toBe(4);
});

test('transition empty => state is unchanged', () => {
    const { result } = render(1);
    act(() => {
        result.current.transition();
    });
    expect(result.current.current).toBe(1);
});

test('transitionAll empty => state is unchanged', () => {
    const { result } = render(1);
    act(() => {
        result.current.transitionAll();
    });
    expect(result.current.current).toBe(1);
});

// test that callbacks called from outdated owners (likely refs) are still valid
test('outdated enqueue => state is unchanged', () => {
    const { result } = render(1);
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
    const { result } = render(1);
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
    const { result } = render(1);
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
