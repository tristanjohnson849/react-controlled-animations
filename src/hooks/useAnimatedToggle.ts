import { useCallback } from 'react';

import { AnimatedRef } from './useAnimatedRef';
import useAnimatedTransitionState from './useAnimatedTransitionState';

export type ToggleAnimations = 'togglingOn' | 'togglingOff';

/**
 * @typeParam E the HTMLElement to be Animated
 */
export type AnimatedToggleState<E extends HTMLElement> = readonly [
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
    AnimatedRef<E>,
    /**
     * currentanimationName, null if not currently transitioning
     */
    ToggleAnimations | null
];

/**
 * Hook to create a boolean toggle state that animates when toggled
 * @typeParam E the Animated HTMLElement
 * @param initialState
 * @param initialanimationName if provided, will toggle away from initialState when the togglingElementRef is first set
 *
 * @return [isToggled, toggleCallback, togglingElementRef, currentAnimation]
 */
function useAnimatedTransitionToggle<E extends HTMLElement>(
    initialState = false,
    initialanimationName: ToggleAnimations | null = null
): AnimatedToggleState<E> {
    const [isToggled, animatedSetState, elementRef, isTransitioning] = useAnimatedTransitionState<
        boolean,
        ToggleAnimations,
        E
    >(initialState, initialanimationName);

    const nextAnimation = isToggled ? 'togglingOff' : 'togglingOn';

    const animateToggle = useCallback(() => animatedSetState((prev) => !prev, nextAnimation), [nextAnimation]);

    const currentAnimation = isTransitioning !== null ? nextAnimation : null;
    return [isToggled, animateToggle, elementRef, currentAnimation];
}

export default useAnimatedTransitionToggle;
