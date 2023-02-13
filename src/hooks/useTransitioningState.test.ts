import { act, renderHook } from '@testing-library/react-hooks';

import { actAndThen } from '../testUtils';

import useTransitioningState from './useTransitioningState';

// import useTransitioningState from './useTransitioningState';

// initial state
test('initialState=undefined initialTransition=undefined => get undefined state, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState());
    const [state, , , currentTransition] = result.current;

    expect(state).toBeUndefined();
    expect(currentTransition).toBeNull();
});

test('initialState=defined initialTransition=undefined => get defined state, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));
    const [state, , , currentTransition] = result.current;

    expect(state).toBe('initial');
    expect(currentTransition).toBeNull();
});

test('initialState=undefined initialTransition=defined => get undefined state, transition=defined', () => {
    const { result } = renderHook(() => useTransitioningState(undefined, 'initialTransition'));
    const [state, , , currentTransition] = result.current;

    expect(state).toBeUndefined();
    expect(currentTransition).toBe('initialTransition');
});

test('initialState=defined initialTransition=defined => get defined state, transition=defined', () => {
    const { result } = renderHook(() => useTransitioningState('initial', 'initialTransition'));
    const [state, , , currentTransition] = result.current;

    expect(state).toBe('initial');
    expect(currentTransition).toBe('initialTransition');
});

test('initialTransition=defined endTransition => get initial state, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState('initial', 'initialTransition'));

    actAndThen(
        result,
        ([, , endTransition]) => endTransition(),
        ([state, , , transition]) => {
            expect(state).toBe('initial');
            expect(transition).toBeNull();
        }
    );
});

// active state
test('transition=null startTransition on null => state=new, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        ([, startTransition]) => startTransition('new', null),
        ([state, , , transition]) => {
            expect(state).toBe('new');
            expect(transition).toBeNull();
        }
    );
});

test('transition=null startTransition on defined => state unchanged, transition=defined', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        ([, startTransition]) => startTransition('new', 'transition'),
        ([state, , , transition]) => {
            expect(state).toBe('initial');
            expect(transition).toBe('transition');
        }
    );
});

test('transition=null startTransition on new endTransition same render => state=new, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        ([, startTransition, endTransition]) => {
            startTransition('new', 'transition');
            endTransition();
        },
        ([state, , , transition]) => {
            expect(state).toBe('new');
            expect(transition).toBeNull();
        }
    );
});

test('transition=null startTransition on new endTransition across renders => state=new, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    const [, startTransition] = result.current;

    act(() => {
        startTransition('new', 'transition');
    });
    actAndThen(
        result,
        ([, , endTransition]) => endTransition(),
        ([state, , , transition]) => {
            expect(state).toBe('new');
            expect(transition).toBeNull();
        }
    );
});

test('transition=null endTransition => no changes', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        ([, , endTransition]) => endTransition(),
        ([state, , , transition]) => {
            expect(state).toBe('initial');
            expect(transition).toBeNull();
        }
    );
});

test('startTransition on defined startTransition on null same render => state=last, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        ([, startTransition]) => {
            startTransition('new1', 'transition');
            startTransition('new2', null);
        },
        ([state, , , transition]) => {
            expect(state).toBe('new2');
            expect(transition).toBeNull();
        }
    );
});

test('transition=defined startTransition on null same render=> state=new, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        [
            ([, startTransition]) => startTransition('new1', 'transition'),
            ([, startTransition]) => startTransition('new2', null),
        ],
        ([state, , , transition]) => {
            expect(state).toBe('new2');
            expect(transition).toBeNull();
        }
    );
});

test('startTransition on defined startTransition on new defined same render => state=initial, transition=last', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        ([, startTransition]) => {
            startTransition('new1', 'transition1');
            startTransition('new2', 'transition2');
        },
        ([state, , , transition]) => {
            expect(state).toBe('initial');
            expect(transition).toBe('transition2');
        }
    );
});

test('startTransition on defined startTransition on new defined across renders => state=initial, transition=last', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        [
            ([, startTransition]) => startTransition('new1', 'transition1'),
            ([, startTransition]) => startTransition('new2', 'transition2'),
        ],
        ([state, , , transition]) => {
            expect(state).toBe('initial');
            expect(transition).toBe('transition2');
        }
    );
});

test('startTransition on defined startTransition on same transition diff state same render => no changes', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        ([, startTransition]) => {
            startTransition('new1', 'transition');
            startTransition('new2', 'transition');
        },
        ([state, , , transition]) => {
            expect(state).toBe('initial');
            expect(transition).toBe('transition');
        }
    );
});

test('startTransition on defined startTransition on same transition diff state across renders => no changes', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        [
            ([, startTransition]) => startTransition('new1', 'transition'),
            ([, startTransition]) => startTransition('new2', 'transition'),
        ],
        ([state, , , transition]) => {
            expect(state).toBe('initial');
            expect(transition).toBe('transition');
        }
    );
});

test('startTransition on defined startTransition on same transition diff state type=value endTransition same render => state=last', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        ([, startTransition, endTransition]) => {
            startTransition('new1', 'transition');
            startTransition('new2', 'transition');
            endTransition();
        },
        ([state, , , transition]) => {
            expect(state).toBe('new2');
            expect(transition).toBe(null);
        }
    );
});

test('startTransition on defined startTransition on same transition diff state type=value endTransition across renders => state=last', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        [
            ([, startTransition]) => startTransition('new1', 'transition'),
            ([, startTransition, endTransition]) => {
                startTransition('new2', 'transition');
                endTransition();
            },
        ],
        ([state, , , transition]) => {
            expect(state).toBe('new2');
            expect(transition).toBe(null);
        }
    );
});

test('startTransition on defined startTransition on same transition diff state type=callback endTransition same render=> state=aggregate', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        ([, startTransition, endTransition]) => {
            startTransition((prev) => prev + '-new1', 'transition');
            startTransition((prev) => prev + '-new2', 'transition');
            endTransition();
        },
        ([state, , , transition]) => {
            expect(state).toBe('initial-new1-new2');
            expect(transition).toBe(null);
        }
    );
});

test('startTransition on defined startTransition on same transition diff state type=callback endTransition across renders => state=aggregate', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));

    actAndThen(
        result,
        [
            ([, startTransition]) => startTransition((prev) => prev + '-new1', 'transition'),
            ([, startTransition, endTransition]) => {
                startTransition((prev) => prev + '-new2', 'transition');
                endTransition();
            },
        ],
        ([state, , , transition]) => {
            expect(state).toBe('initial-new1-new2');
            expect(transition).toBe(null);
        }
    );
});

// test out of date callbacks transition correctly

test('startTransition, out of date startTransition => second transition, endTransition => aggregate state', () => {

});

test('startTransition, startTransition same transition, out of date endTransition => aggregate state', () => {

});