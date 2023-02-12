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
 * @param initialTransitioning if true, will toggle away from initialState when the togglingElementRef is first set
 *
 * @return [isToggled, toggleCallback, togglingElementRef, currentAnimation]
 */
function useTransitioningToggle(
    initialState = false,
    initialTransitioning: boolean = false
): TransitioningToggleState {
    const [isToggled, startTransition, endTransition, isTransitioning] = useTransitioningState<
        boolean,
        ToggleTransitions
    >(initialState, initialTransitioning ? nextTransition(initialState) : null);

    const transition = nextTransition(isToggled);

    const startToggling = useCallback(() => startTransition((prev) => !prev, transition), [transition]);

    const currentTransition = isTransitioning !== null ? transition : null;
    return [isToggled, startToggling, endTransition, currentTransition];
}

const nextTransition = (isToggled: boolean): ToggleTransitions => isToggled ? 'togglingOff' : 'togglingOn';

export default useTransitioningToggle;
