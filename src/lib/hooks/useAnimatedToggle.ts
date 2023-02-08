import { Ref, useCallback } from 'react';

import { AnimationInput } from '../AnimationInput';

import useAnimatedTransitionState, { toTransitionAnimation } from './useAnimatedTransitionState';

// [state, setState, transitioningElementRef, currentAnimation]
export type ToggleAnimations = 'togglingOn' | 'togglingOff';
export type AnimatedToggleState<E extends HTMLElement> = readonly [
    boolean,
    () => void,
    Ref<E>,
    ToggleAnimations | null
];

export const toToggleAnimations = (togglingOn: AnimationInput): Record<ToggleAnimations, AnimationInput> => {
    const { keyframes, options } = toTransitionAnimation(togglingOn);
    return {
        togglingOn: { keyframes, options },
        togglingOff: {
            keyframes: keyframes.slice().reverse(),
            options,
        },
    };
};

export const useAnimatedToggle = <E extends HTMLElement>(
    initialState = false,
    initialAnimationState: ToggleAnimations | null = null
): AnimatedToggleState<E> => {
    const [isToggled, animatedSetState, elementRef, isTransitioning] = useAnimatedTransitionState<
        boolean,
        ToggleAnimations,
        E
    >(initialState, initialAnimationState);

    const nextAnimation = isToggled ? 'togglingOff' : 'togglingOn';

    const animateToggle = useCallback(() => animatedSetState((prev) => !prev, nextAnimation), [nextAnimation]);

    const currentAnimation = isTransitioning !== null ? nextAnimation : null;
    return [isToggled, animateToggle, elementRef, currentAnimation];
};
