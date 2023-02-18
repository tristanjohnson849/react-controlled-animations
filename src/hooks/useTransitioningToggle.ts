import { useCallback } from 'react';

import useTransitioningState from './useTransitioningState';

export type ToggleTransitions = 'togglingOn' | 'togglingOff';

/**
 * [isToggled, startToggling, endToggling, currentTransition]
 */
export type TransitioningToggleState = readonly [
    /**
     * isToggled
     */
    boolean,
    /**
     * startToggling
     *
     * Begin inversion of toggle state. Subsequent calls will queue more inversions without interrupting the current transition
     *
     * @param isAsync if true, nextState is queued and will not be updated until endTransition is called.
     * Otherwise, completes all interim toggles including this one and rerenders the using component
     */
    (isAsync?: boolean) => void,
    /**
     * endToggling
     *
     * calling completes all queued toggles in order, sets currentTransition to null, and rerenders
     */
    () => void,
    /**
     * currentTransition, either togglingOn, togglingOff, or null if not transitioning
     */
    ToggleTransitions | null
];

/**
 * Hook to use a boolean toggle state that supports asynchronous transitions
 *
 * Toggle transitions may be queued via startToggling, and all queued toggles are completed by endTransition
 *
 * @param initialState
 * @param initialTransitioning if true, will toggle away from initialState when the togglingElementRef is first set
 *
 * @return [isToggled, startToggling, endToggling, currentTransition]: TransitioningToggleState
 */
function useTransitioningToggle(initialState = false, initialTransitioning = false): TransitioningToggleState {
    const [isToggled, startTransition, endTransition, isTransitioning] = useTransitioningState<
        boolean,
        ToggleTransitions
    >(initialState, initialTransitioning ? nextTransition(initialState) : null);

    const transition = nextTransition(isToggled);

    const startToggling = useCallback(
        (isAsync = true) => startTransition((prev) => !prev, isAsync ? transition : null),
        [transition]
    );

    const currentTransition = isTransitioning !== null ? transition : null;
    return [isToggled, startToggling, endTransition, currentTransition];
}

const nextTransition = (isToggled: boolean): ToggleTransitions => (isToggled ? 'togglingOff' : 'togglingOn');

export default useTransitioningToggle;
