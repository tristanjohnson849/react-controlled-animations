import { useCallback } from 'react';

import useTransitioningState from './useTransitioningState';

export type ToggleTransitions = 'togglingOn' | 'togglingOff';

/**
 * @typeParam E the HTMLElement to be Animated
 */
export type TransitioningToggleState = readonly [
    /**
     * isToggled
     */
    boolean,
    /**
     * toggleCallback
     */
    () => void,
    /**
     * togglingElementRef AnimatedRef to be passed to the Animated HTML element
     */
    () => void,
    /**
     * currentanimationName, null if not currently transitioning
     */
    ToggleTransitions | null
];

/**
 * Hook to create a boolean toggle state that animates when toggled
 * @typeParam E the Animated HTMLElement
 * @param initialState
 * @param initialTransitioning if provided, will toggle away from initialState when the togglingElementRef is first set
 *
 * @return [isToggled, toggleCallback, togglingElementRef, currentAnimation]
 */
function useTransitioningToggle(
    initialState = false,
    initialTransitioning: ToggleTransitions | null = null
): TransitioningToggleState {
    const [isToggled, startTransition, endTransition, isTransitioning] = useTransitioningState<
        boolean,
        ToggleTransitions
    >(initialState, initialTransitioning);

    const nextTransition = isToggled ? 'togglingOff' : 'togglingOn';

    const startToggling = useCallback(() => startTransition((prev) => !prev, nextTransition), [nextTransition]);

    const currentTransition = isTransitioning !== null ? nextTransition : null;
    return [isToggled, startToggling, endTransition, currentTransition];
}

export default useTransitioningToggle;
