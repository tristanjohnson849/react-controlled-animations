import { SetStateAction } from 'react';

import useTransitioningState from './useTransitioningState';

export type SimpleTransitioningState<S> = readonly [
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
    (nextState: SetStateAction<S>, transition?: boolean) => void,
    /**
     * onTransitionEnd callback to be called when the transition is complete
     */
    () => void,
    /**
     * isTransitioning
     *
     * If true, is playing the transition Animation
     */
    boolean
];

function useSimpleTransitioningState<S = undefined>(): SimpleTransitioningState<S | undefined>;
/**
 * State is always a defined S if an initial state is provided
 */
function useSimpleTransitioningState<S>(initialState: S, initialTransitioning?: boolean): SimpleTransitioningState<S>;

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
function useSimpleTransitioningState<S>(
    initialState?: S | undefined,
    initialTransitioning = false
): SimpleTransitioningState<S | undefined> {
    const [state, startTransition, endTransition, currentTransition] = useTransitioningState<S, 'transitioning'>(
        initialState,
        initialTransitioning ? 'transitioning' : null
    );

    return [
        state,
        (action, shouldTransition = true) => startTransition(action, shouldTransition ? 'transitioning' : null),
        endTransition,
        currentTransition !== null,
    ];
}

export default useSimpleTransitioningState;
