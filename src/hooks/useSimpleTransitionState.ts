import { SetStateAction } from 'react';

import { AnimatedRef } from './useAnimatedRef';
import useAnimatedTransitionState from './useAnimatedTransitionState';

export type SimpleTransitionState<S, E extends HTMLElement> = readonly [
    /**
     * state
     */
    S,
    /**
     * animatedTransitionState
     *
     * Analog of setState
     *
     * When called, will animate the transitionand setState once the animation is finished()
     * Supports queuing multiple state transitions during the course of an animation (note that the animation will be interrupted if the nextanimationName is set while the currentAnimation is not finished())
     * @param nextState a React setState action for this state
     * @param animate flag to animate the transition, or skip animation if false
     */
    (nextState: SetStateAction<S>, animate?: boolean) => void,
    /**
     * elementRef AnimatedRef to be passed to the Animated HTML element
     */
    AnimatedRef<E>,
    /**
     * isTransitioning
     *
     * If true, is playing the transition Animation
     */
    boolean
];

function useSimpleTransitionState<S = undefined, E extends HTMLElement = HTMLElement>(): SimpleTransitionState<
    S | undefined,
    E
>;
function useSimpleTransitionState<S, E extends HTMLElement = HTMLElement>(
    initialState: S,
    initialTransitioning?: boolean,
    onTransitionEnd?: () => void
): SimpleTransitionState<S, E>;

/**
 * Hook to useState that animates on transitioning states
 * This is a simplified version of useAnimatedTransitionState where only one animation is configured for all transitions and is expected to be named 'transition' in AnimationsByName
 *
 * @typeParam A the accepted animation names
 * @typeParam E the Animated HTML element
 * @typeParam S type of state
 * @param initialState
 * @param initialTransitioning if true, will animate when the togglingElementRef is first set. State will remain as initialState when finished()
 * @param onTransitionEnd
 * @returns [state, animatedTransitionState, transitioningElementRef, isTransitioning]
 */
function useSimpleTransitionState<S, E extends HTMLElement = HTMLElement>(
    initialState?: S | undefined,
    initialTransitioning = false,
    onTransitionEnd?: () => void
): SimpleTransitionState<S | undefined, E> {
    const [state, animatedSetState, elementRef, animationName] = useAnimatedTransitionState<S, 'transition', E>(
        initialState,
        initialTransitioning ? 'transition' : null,
        onTransitionEnd
    );

    return [
        state,
        (action, animate = true) => animatedSetState(action, animate ? 'transition' : null),
        elementRef,
        animationName !== null,
    ];
}

export default useSimpleTransitionState;
