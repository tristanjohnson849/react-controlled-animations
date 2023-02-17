import { SetStateAction, useState } from 'react';

import useQueuedState from './useQueuedState';

/**
 * [state, startTransition, endTransition, currentTransition]
 *
 * @typeParam S state type
 * @typeParam T state transition type
 */
export type TransitioningState<S, T> = readonly [
    /**
     * state
     */
    S,
    /**
     * startTransition
     *
     * Queue the given state transition with the given transition type
     *
     * Analog of React setState
     *
     * @param nextState a React setState action for this state (either a literal value or function (prev) => next)
     * @param transition if defined, is set as the currentTransition; nextState is queued and will not be completed until endTransition is called
     * If null, completes all interim transitions, then the given nextState transition and rerenders the using component
     */
    (nextState: SetStateAction<S>, transition: T | null) => void,
    /**
     * endTransition
     *
     * calling completes all queued transitions in order, sets currentTransition to null, and rerenders
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
function useTransitioningState<S, T = unknown>(initialState: S, initialTransition?: T | null): TransitioningState<S, T>;
function useTransitioningState<S, T = unknown>(
    initialState: S | undefined,
    initialTransition?: T | null
): TransitioningState<S | undefined, T>;

/**
 * Hook to useState that supports asynchronous transitions with distinct transition values
 *
 * State transitions may be queued via startTransition, and all queued transitions are completed in order by endTransition
 *
 * @typeParam T type of transition values
 * @typeParam S type of state
 * @param initialState
 * @param initialTransition if provided, initializes the state with currentTransition as initialTransition
 * @returns [state, startTransition, endTransition, currentTransition]: TransitioningState<S, T>
 */
function useTransitioningState<S = undefined, T = unknown>(
    initialState?: S,
    initialTransition: T | null = null
): TransitioningState<S | undefined, T> {
    const queuedState = useQueuedState(initialState);
    const [transition, setTransition] = useState(initialTransition);

    const endTransition = () => {
        setTransition(null);
        queuedState.transitionAll();
    };

    const startTransition = (nextState: SetStateAction<S | undefined>, nextTransition: T | null) => {
        queuedState.enqueue(nextState);

        // cancel transition if given null. Otherwise just setTransition
        if (!nextTransition) {
            endTransition();
        } else {
            setTransition(nextTransition);
        }
    };

    return [queuedState.current, startTransition, endTransition, transition];
}

export default useTransitioningState;
