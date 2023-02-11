import { act, renderHook } from '@testing-library/react-hooks';
import test from 'ava';

import useQueuedState from './useQueuedState';

const render = <S>(initialState?: S) => renderHook(() => useQueuedState<S>(initialState));

test('initialState=defined => get defined state', (t) => {
    const { result } = render('hello');
    t.is(result.current.current, 'hello');
});

test('initialState=undefined=> get undefined state', (t) => {
    const { result } = render();
    t.is(result.current.current, undefined);
});

test('enqueues=one => state is unchanged', (t) => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
    });
    t.is(result.current.current, 1);
});

test('enqueues=acrossRenders => state is unchanged', (t) => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
    });
    act(() => {
        result.current.enqueue(3);
    });
    t.is(result.current.current, 1);
});

test('enqueues=one transition => state is queued value', (t) => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
    });
    act(() => {
        result.current.transition();
    });
    t.is(result.current.current, 2);
});

test('enqueues=oneRender actionType=value transition => state is first queued value', (t) => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
        result.current.enqueue(3);
    });
    act(() => {
        result.current.transition();
    });
    t.is(result.current.current, 2);
});

test('enqueues=oneRender actionType=callback transition => state is first queued value', (t) => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue((prev) => prev + 1);
        result.current.enqueue((prev) => prev + 2);
    });
    act(() => {
        result.current.transition();
    });
    t.is(result.current.current, 2);
});

test('enqueues=acrossRenders actionType=value transition => state is first queued value', (t) => {
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
    t.is(result.current.current, 2);
});

test('enqueues=acrossRenders actionType=callback transition => state is first queued value', (t) => {
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
    t.is(result.current.current, 2);
});

test('enqueues=oneRender actionType=both transitionAll  => state is last queued value', (t) => {
    const { result } = render(1);
    act(() => {
        result.current.enqueue(2);
        result.current.enqueue((prev) => prev * 2);
    });
    act(() => {
        result.current.transitionAll();
    });
    t.is(result.current.current, 4);
});

test('enqueues=acrossRenders actionType=both transitionAll => state is last queued value', (t) => {
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
    t.is(result.current.current, 4);
});

test('transition empty => state is unchanged', (t) => {
    const { result } = render(1);
    act(() => {
        result.current.transition();
    });
    t.is(result.current.current, 1);
});

test('transitionAll empty => state is unchanged', (t) => {
    const { result } = render(1);
    act(() => {
        result.current.transitionAll();
    });
    t.is(result.current.current, 1);
});

// test that callbacks called from outdated owners (likely refs) are still valid
test('outdated enqueue => state is unchanged', (t) => {
    const { result } = render(1);
    const outdated = result.current;
    act(() => {
        result.current.enqueue(2);
    });
    act(() => {
        outdated.enqueue(3);
    });
    t.is(result.current.current, 1);
});

test('enqueue, enqueue, store ref, transition, outdated transition => state is second queued value', (t) => {
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
    t.is(result.current.current, 3);
});

test('enqueue, store ref, enqueue, transitionAll => state is last queued value', (t) => {
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
    t.is(result.current.current, 3);
});
