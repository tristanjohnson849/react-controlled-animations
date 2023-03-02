import { renderHook } from '@testing-library/react-hooks';

import { actAndThen } from '../testUtils';

import useSimpleTransitioningState from './useSimpleTransitioningState';

test('initial state undefined, initialTransitioning undefined => get undefined state, transition = null', () => {
    const { result } = renderHook(() => useSimpleTransitioningState(undefined));
    const [state, , , currentTransition] = result.current;

    expect(state).toBeUndefined();
    expect(currentTransition).toBe(false);
});

test('initial state defined, initialTransitioning undefined => get defined state, transition = null', () => {
    const { result } = renderHook(() => useSimpleTransitioningState('Hello World'));
    const [state, , , currentTransition] = result.current;

    expect(state).toBe('Hello World');
    expect(currentTransition).toBe(false);
});

test('initial state undefined, initialTransitioning true => get undefined state, transition = true', () => {
    const { result } = renderHook(() => useSimpleTransitioningState(undefined, true));
    const [state, , , currentTransition] = result.current;

    expect(state).toBe(undefined);
    expect(currentTransition).toBe(true);
});

test('initial state defined, initialTransitioning true = get defined state, transition = true', () => {
    const { result } = renderHook(() => useSimpleTransitioningState('Hello World', true));
    const [state, , , currentTransition] = result.current;

    expect(state).toBe('Hello World');
    expect(currentTransition).toBe(true);
});

test('initial state defined initialTransitioning = true, endTransition() => get defined state, transition = false', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', true)).result,
        ([, , endTransition]) => endTransition(),
        ([state, , , currentTransition]) => {
            expect(state).toBe('Hello World');
            expect(currentTransition).toBe(false);
        }
    );
});

test('initial state defined, initialTransitioning = false, startTransition isAsync=false => new state and transition = false', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        ([, startTransition]) => startTransition('Goodbye World', false),
        ([state, , , currentTransition]) => {
            expect(state).toBe('Goodbye World');
            expect(currentTransition).toBe(false);
        }
    );
});

test('initial state defined, initialTransitioning = false, startTransition isAsync = true => same defined state, transition = true', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        ([, startTransition]) => startTransition('Goodbye World', true),
        ([state, , , currentTransition]) => {
            expect(state).toBe('Hello World');
            expect(currentTransition).toBe(true);
        }
    );
});

test('initial state defined, startTransition with new state value isAsync = true, endTransition same render => new defined state, transition = false', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        ([, startTransition, endTransition]) => {
            startTransition('Goodbye World', true);
            endTransition();
        },
        ([state, , , currentTransition]) => {
            expect(state).toBe('Goodbye World');
            expect(currentTransition).toBe(false);
        }
    );
});

test('initial state defined, stratTransition with new state value isAsync = true, re render, endTransition => new state, transition = false', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        [([, startTransition]) => startTransition('Goodbye World', true), ([, , endTransition]) => endTransition()],
        ([state, , , currentTransition]) => {
            expect(state).toBe('Goodbye World');
            expect(currentTransition).toBe(false);
        }
    );
});

test('defined state, initialTransitioning = false, endTransition => no changes', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        ([, , endTransition]) => endTransition,
        ([state, , , currentTransition]) => {
            expect(state).toBe('Hello World');
            expect(currentTransition).toBe(false);
        }
    );
});

test('defined state, startTransition isAsync = true, startTransition isAsync = false => state is second new value, currentTransition = false', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        ([, startTransition]) => {
            startTransition('Goodbye World', true);
            startTransition('Greetings World', false);
        },
        ([state, , , currentTransition]) => {
            expect(state).toBe('Greetings World');
            expect(currentTransition).toBe(false);
        }
    );
});

test('defined state, startTransition isAsync = true, rerender, startTransition isAsync = false => state is second new value, currentTransition  = false', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        [
            ([, startTransition]) => startTransition('Goodbye World', true),
            ([, startTransition]) => startTransition('Greetings World', false),
        ],
        ([state, , , currentTransition]) => {
            expect(state).toBe('Greetings World');
            expect(currentTransition).toBe(false);
        }
    );
});

test('defined state, startTransition isAsync = true x 2 => state unchaged, currentTransition = true', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        ([, startTransition]) => {
            startTransition('Goodbye World', true);
            startTransition('Greetings World', true);
        },
        ([state, , , currentTransition]) => {
            expect(state).toBe('Hello World');
            expect(currentTransition).toBe(true);
        }
    );
});

test('defined state, startTransition isAsync = true, re render, startTransition isAsync = true => state unchanged, currentTransition = true', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        [
            ([, startTransition]) => startTransition('Goodbye World', true),
            ([, startTransition]) => startTransition('Greetings World', true),
        ],
        ([state, , , currentTransition]) => {
            expect(state).toBe('Hello World');
            expect(currentTransition).toBe(true);
        }
    );
});

test('defined state, start Transition isAsync = true, start Transition isAsync = true, re render, endTransition => 2nd new state value, currentTransition = false', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        [
            ([, startTransition]) => {
                startTransition('Goodbye World', true);
                startTransition('Greetings World', true);
            },
            ([, , endTransition]) => endTransition(),
        ],
        ([state, , , currentTransition]) => {
            expect(state).toBe('Greetings World');
            expect(currentTransition).toBe(false);
        }
    );
});

test('defined state, startTransition with action, isAsync = true, re render, startTransition with action, isAsync = true, re render, endTransition => startTransition actions occur in order, currentTransition = false', () => {
    actAndThen(
        renderHook(() => useSimpleTransitioningState('Hello World', false)).result,
        [
            ([, startTransition]) => startTransition((prev) => prev + ' Hello', true),
            ([, startTransition]) => startTransition((prev) => prev + ' World', true),
            ([, , endTransition]) => endTransition(),
        ],
        ([state, , , currentTransition]) => {
            expect(state).toBe('Hello World Hello World');
            expect(currentTransition).toBe(false);
        }
    );
});
