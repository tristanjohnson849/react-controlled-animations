import { SetStateAction, useState } from 'react';

import useQueuedState from './useQueuedState';

/**
 * @typeParam S state type
 * @typeParam T state transition type
 */
export type TransitioningState<S, T> = readonly [
    /**
     * state
     */
    S,
    /**
     * transitionState
     *
     * Analog of setState
     *
     * When called, will queue a state transition and register the current transition
     * State will not be updated until onTransitionEnd() is called
     * @param nextState a React setState action for this state
     * @param nextanimationName the next animationName or null to skip the animation for this transition
     */
    (nextState: SetStateAction<S>, transition: T | null) => void,
    /**
     * onTransitionEnd callback to be called when the transition is complete
     */
    () => void,
    /**
     * currentTransition, null if not currently transitioning
     */
    T | null
];

function useTransitioningState<S = undefined, T = unknown>(): TransitioningState<S | undefined, T>;
/**
 * State is always a defined S if an initial state is provided
 */
function useTransitioningState<S, T>(initialState: S, initialTransition?: T | null): TransitioningState<S, T>;
function useTransitioningState<S, T>(
    initialState: S | undefined,
    initialTransition?: T | null
): TransitioningState<S | undefined, T>;

/**
 * Hook to useState that animates on transitioning states
 *
 * @typeParam A the accepted animation names
 * @typeParam E the Animated HTML element
 * @typeParam S type of state
 * @param initialState
 * @param initialAnimation if provided, will animate when the togglingElementRef is first set. State will remain as initialState when finished()
 * @param onTransitionEnd
 * @returns [state, animatedStateTransition, elementRef, currentAnimation]
 */
function useTransitioningState<S, T>(
    initialState?: S,
    initialTransition: T | null = null
): TransitioningState<S | undefined, T> {
    const queuedState = useQueuedState(initialState);
    const [transition, setTransition] = useState(initialTransition);

    const endTransition = () => {
        setTransition(null);
        queuedState.transitionAll();
    };

    // when setting state, set the next animation
    const startTransition = (nextState: SetStateAction<S | undefined>, nextTransition: T | null) => {
        setTransition(nextTransition);
        queuedState.enqueue(nextState);
    };

    return [queuedState.current, startTransition, endTransition, transition];
}

export default useTransitioningState;
