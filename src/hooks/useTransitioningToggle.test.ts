import { renderHook } from '@testing-library/react-hooks';

import { actAndThen } from '../testUtils';

import useTransitioningToggle from './useTransitioningToggle';

test('initialState=undefined => isToggled = false, currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle());
    const [isToggled, , , currentTransition] = result.current;

    expect(isToggled).toBe(false);
    expect(currentTransition).toBeNull();
});

test('initialState=false => isToggled = false, currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));
    const [isToggled, , , currentTransition] = result.current;

    expect(isToggled).toBe(false);
    expect(currentTransition).toBeNull();
});

test('initialState = true, isToggled = true, currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(true));
    const [isToggled, , , currentTransition] = result.current;

    expect(isToggled).toBe(true);
    expect(currentTransition).toBeNull();
});

test('initialState=true initialTransitioning=true => isToggled = true, currentTransition=togglingOn', () => {
    const { result } = renderHook(() => useTransitioningToggle(true, true));
    const [isToggled, , , currentTransition] = result.current;

    expect(isToggled).toBe(true);
    expect(currentTransition).toBe('togglingOn');
});

test('initialState=true initialTransitioning=true endTransition=> isToggled = true, currentTransition=null', () => {
    const { result } = renderHook(() => useTransitioningToggle(true, true));

    actAndThen(
        result,
        ([, , endTransition]) => endTransition(),
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(true);
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling => state unchanged, currentTransition=togglingOn', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        ([, startToggling]) => startToggling(),
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(false);
            expect(currentTransition).toBe('togglingOn');
        }
    );
});

test('startToggling, endTransition same render => state inverted, currentTransition=null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        ([, startToggling, endTransition]) => {
            startToggling();
            endTransition();
        },
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(true);
            expect(currentTransition).toBeNull();
        }
    );
});

test('start toggling, rerender, end transition => state inverted, currentTransition=null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        [([, startToggling]) => startToggling(), ([, , endTransition]) => endTransition()],
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(true);
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling x2, end Transition all same render => state unchanged, currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        ([, startToggling, endTransition]) => {
            startToggling();
            startToggling();
            endTransition();
        },
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(false);
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling, rerender, startToggling, endTransition => state unchanged, currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        [
            ([, startToggling]) => startToggling(),
            ([, startToggling, endTransition]) => {
                startToggling();
                endTransition();
            },
        ],
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(false);
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling x2, rerender, endTransition => state unchanged, currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        [
            ([, startToggling]) => {
                startToggling();
                startToggling();
            },
            ([, , endTransition]) => {
                endTransition();
            },
        ],
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(false);
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling x3 and endTransition all in the same render => state is inverted and currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        ([, startToggling, endTransition]) => {
            startToggling();
            startToggling();
            startToggling();
            endTransition();
        },
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(true);
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling x1, rerender, startToggling x2 and endTransition in the same render => state is inverted and currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        [
            ([, startToggling]) => startToggling(),
            ([, startToggling, endTransition]) => {
                startToggling();
                startToggling();
                endTransition();
            },
        ],
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(true);
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling x3, rerender, endTransition => state is inverted and currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        [
            ([, startToggling]) => {
                startToggling();
                startToggling();
                startToggling();
            },
            ([, , endTransition]) => {
                endTransition();
            },
        ],
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(true);
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling x 1, startToggling(async = false) x1 endTransition => state is unchanged and currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        [
            ([, startToggling, endTransition]) => {
                startToggling();
                startToggling(false);
                endTransition();
            },
        ],
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(false);
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling(async = true), rerender, startToggling(async = false) endTransition => state is unchanged and currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        [
            ([, startToggling]) => startToggling(),
            ([, startToggling, endTransition]) => {
                startToggling(false);
                endTransition();
            },
        ],
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(false);
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling(async = false), startToggling(async = true), rerender, endTransition => state is unchanged and currentTransition = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        [
            ([, startToggling]) => {
                startToggling(false);
                startToggling();
            },
            ([, , endTransition]) => {
                endTransition();
            },
        ],
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(false);
            expect(currentTransition).toBeNull();
        }
    );
});
