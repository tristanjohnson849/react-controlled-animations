import { Ref, SetStateAction, useState } from 'react';

import { AnimationInput, normalizedAnimation, NormalizedAnimation } from '../AnimationInput';

import useAnimatingRef from './useAnimatingRef';
import useQueuedState from './useQueuedState';

// [state, animateTransition, animatedElementRef, currentAnimation]
export type AnimatedTransitionState<S, A extends string, E extends HTMLElement> = readonly [
    S,
    (nextState: SetStateAction<S>, nextAnimationState: A | null) => void,
    Ref<E>,
    A | null
];

// overloads to infer non-optional return type when initial state is provided
function useAnimatedTransitionState<S, A extends string, E extends HTMLElement>(): AnimatedTransitionState<
    S | undefined,
    A,
    E
>;
function useAnimatedTransitionState<S, A extends string, E extends HTMLElement>(
    initialState: S,
    initialAnimation?: A | null,
    onAnimationEnd?: (completedAnimation: A) => void
): AnimatedTransitionState<S, A, E>;
function useAnimatedTransitionState<S, A extends string, E extends HTMLElement>(
    initialState: S | undefined,
    initialAnimation?: A | null,
    onAnimationEnd?: (completedAnimation: A) => void
): AnimatedTransitionState<S | undefined, A, E>;

// Hook to create state that animates state transitions
//
function useAnimatedTransitionState<A extends string, E extends HTMLElement, S = undefined>(
    initialState?: S,
    initialAnimation: A | null = null,
    onAnimationEnd?: (completedAnimation: A) => void
): AnimatedTransitionState<S | undefined, A, E> {
    const queuedState = useQueuedState(initialState);
    const [animationState, setAnimationState] = useState(initialAnimation);

    const dispatch = (completedAnimation: A) => {
        setAnimationState(null);
        queuedState.transitionAll();
        onAnimationEnd && onAnimationEnd(completedAnimation);
    };

    const elementRef = useAnimatingRef<A, E>(animationState, dispatch);

    // when setting state, set the next animation
    const animatedSetState = (nextState: SetStateAction<S | undefined>, nextAnimation: A | null) => {
        setAnimationState(nextAnimation);
        queuedState.enqueue(nextState);
    };

    return [queuedState.current, animatedSetState, elementRef, animationState];
}

export const toTransitionAnimation = (animation: AnimationInput): NormalizedAnimation => {
    const { keyframes, options } = normalizedAnimation(animation);
    return {
        keyframes: keyframes,
        options: { fill: 'forwards', ...options },
    };
};

export default useAnimatedTransitionState;
