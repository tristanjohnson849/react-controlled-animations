import { SetStateAction, useState } from 'react';

import useAnimatedRef, { AnimatedRef } from './useAnimatedRef';
import useQueuedState from './useQueuedState';

/**
 * @typeParam S state type
 * @typeParam A the accepted animation names
 * @typeParam E the HTMLElement to be Animated
 */
export type AnimatedTransitionState<S, A extends string, E extends HTMLElement> = readonly [
    /**
     * state
     */
    S,
    /**
     * animatedStateTransition
     *
     * Analog of setState
     *
     * When called, will animate the transition with the given animation and setState once the animation is finished()
     * Supports queuing multiple state transitions during the course of an animation (note that the animation will be interrupted if the nextanimationName is set while the currentAnimation is not finished())
     * @param nextState a React setState action for this state
     * @param nextanimationName the next animationName or null to skip the animation for this transition
     */
    (nextState: SetStateAction<S>, nextanimationName: A | null) => void,
    /**
     * elementRef AnimatedRef to be passed to the Animated HTML element
     */
    AnimatedRef<E>,
    /**
     * currentanimationName, null if not currently transitioning
     */
    A | null
];

function useAnimatedTransitionState<
    S = undefined,
    A extends string = string,
    E extends HTMLElement = HTMLElement
>(): AnimatedTransitionState<S | undefined, A, E>;
/**
 * State is always a defined S if an initial state is provided
 */
function useAnimatedTransitionState<S, A extends string = string, E extends HTMLElement = HTMLElement>(
    initialState: S,
    initialAnimation?: A | null,
    onAnimationEnd?: (completedAnimation: A) => void
): AnimatedTransitionState<S, A, E>;
function useAnimatedTransitionState<S, A extends string = string, E extends HTMLElement = HTMLElement>(
    initialState: S | undefined,
    initialAnimation?: A | null,
    onAnimationEnd?: (completedAnimation: A) => void
): AnimatedTransitionState<S | undefined, A, E>;

/**
 * Hook to useState that animates on transitioning states
 *
 * @typeParam A the accepted animation names
 * @typeParam E the Animated HTML element
 * @typeParam S type of state
 * @param initialState
 * @param initialAnimation if provided, will animate when the togglingElementRef is first set. State will remain as initialState when finished()
 * @param onAnimationEnd
 * @returns [state, animatedStateTransition, elementRef, currentAnimation]
 */
function useAnimatedTransitionState<S, A extends string = string, E extends HTMLElement = HTMLElement>(
    initialState?: S,
    initialAnimation: A | null = null,
    onAnimationEnd?: (completedAnimation: A, webAnimation: Animation | null) => void
): AnimatedTransitionState<S | undefined, A, E> {
    const queuedState = useQueuedState(initialState);
    const [animationName, setanimationName] = useState(initialAnimation);

    const dispatch = (completedAnimation: A, webAnimation: Animation | null) => {
        setanimationName(null);
        queuedState.transitionAll();
        onAnimationEnd && onAnimationEnd(completedAnimation, webAnimation);
    };

    const elementRef = useAnimatedRef<A, E>(animationName, dispatch);

    // when setting state, set the next animation
    const animatedSetState = (nextState: SetStateAction<S | undefined>, nextAnimation: A | null) => {
        setanimationName(nextAnimation);
        queuedState.enqueue(nextState);
    };

    return [queuedState.current, animatedSetState, elementRef, animationName];
}

export default useAnimatedTransitionState;
