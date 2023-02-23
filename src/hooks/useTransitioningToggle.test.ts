import { act, renderHook } from '@testing-library/react-hooks';

import { actAndThen } from '../testUtils';

import useTransitioningToggle from './useTransitioningToggle';


test('initialState=undefined => isToggled = false, isTransitioning = null', () => {
    const { result } = renderHook(() => useTransitioningToggle());
    const [isToggled, , , currentTransition] = result.current;

    expect(isToggled).toBeFalsy();
    expect(currentTransition).toBeNull();
});

test('initialState=false => isToggled = false, isTransitioning = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));
    const [isToggled, , , currentTransition] = result.current;

    expect(isToggled).toBeFalsy();
    expect(currentTransition).toBeNull();
});

test('initialState = true, isToggled = true, isTransitioning = null', () => {
    const { result } = renderHook(() => useTransitioningToggle(true));
    const [isToggled, , , currentTransition] = result.current;

    expect(isToggled).toBeTruthy();
    expect(currentTransition).toBeNull();
});

test('initialState=true initialTransitioning=true => isToggled = true, isTransitioning=togglingOn', () => {
    const { result } = renderHook(() => useTransitioningToggle(true, true));
    const [isToggled, , , currentTransition] = result.current;

    expect(isToggled).toBeTruthy();
    expect(currentTransition).toBe('togglingOn');
});

test('initialState=true initialTransitioning=true endTransition=> isToggled = true, isTransitioning=null', ()=> {
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

test('startToggling => state unchanged, isTransitioning=togglingOn', () => {
    const { result } = renderHook(() => useTransitioningToggle());

    actAndThen(
        result,
        ([, startToggling]) => startToggling(),
        ([, , , currentTransition]) => expect(currentTransition).toBe('togglingOn')
    );
});

test('startToggling, endTransition same render => state inverted, isTransitioning=null', () => {
    actAndThen(
        renderHook(()=> useTransitioningToggle()).result,
        ([, startToggling, endTransition]) => {
            startToggling();
            endTransition();
        },
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBeTruthy();
            expect(currentTransition).toBeNull();

        }
    );
});

test('start toggling, rerender, end transition => state inverted, isTransitioning=null', () => {
    const { result } = renderHook(() => useTransitioningToggle(false));

    actAndThen(
        result,
        [
            ([, startToggling]) => startToggling(),
            ([, , endTransition]) => endTransition(),
        ],
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBe(true);
            expect(currentTransition).toBeNull();
        }
    )
})

test('startToggling x2, end Transition all same render => state unchanged, isTransitioning = null', () => {
    actAndThen(
        renderHook(()=> useTransitioningToggle()).result,
        ([, startToggling, endTransition]) => {
            startToggling();
            startToggling();
            endTransition();
        },
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBeFalsy();
            expect(currentTransition).toBeNull();

        }
    );
});

test('startToggling, rerender, startToggling, endTransition => state unchanged, isTransitioning = null', () => {
    const { result } = renderHook(() => useTransitioningToggle());

    const [, startToggling] = result.current;
    act(() => {
        startToggling();
    });
    actAndThen(
        result,
        ([, startToggling, endTransition]) => {
            startToggling();
            endTransition();
        },
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBeFalsy();
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling x2, rerender, endTransition => state unchanged, isTransitioning = null', () => {
    const { result } = renderHook(() => useTransitioningToggle());
    
    const [, startToggling] = result.current;

    act(() => {
        startToggling();
        startToggling();
    });
    actAndThen(
        result,
        ([, , endTransition]) => {
            endTransition();
        },
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBeFalsy();
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling x3 and endTransition all in the same render => state is inverted and isTransitioning = null', () => {
    actAndThen(
        renderHook(()=> useTransitioningToggle()).result,
        ([, startToggling, endTransition]) => {
            startToggling();
            startToggling();
            startToggling();
            endTransition();
        },
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBeTruthy();
            expect(currentTransition).toBeNull();

        }
    );
});

test('startToggling x1, rerender, startToggling x2 and endTransition in the same render => state is inverted and isTransitioning = null', () => {
    const { result } = renderHook(() => useTransitioningToggle());

    const [, startToggling] = result.current;
    act(() => {
        startToggling();
    });
    actAndThen(
        result,
        ([, startToggling, endTransition]) => {
            startToggling();
            startToggling();
            endTransition();
        },
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBeTruthy();
            expect(currentTransition).toBeNull();
        }
    );
});

test('startToggling x3, rerender, endTransition => state is inverted and isTransitioning = null', () => {
    const { result } = renderHook(() => useTransitioningToggle());

    const [, startToggling] = result.current;
    act(() => {
        startToggling();
        startToggling();
        startToggling();
    });
    actAndThen(
        result,
        ([, , endTransition]) => {
            endTransition();
        },
        ([isToggled, , , currentTransition]) => {
            expect(isToggled).toBeTruthy();
            expect(currentTransition).toBeNull();
        }
    );
})