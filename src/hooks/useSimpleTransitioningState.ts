import { SetStateAction } from 'react';

import useTransitioningState from './useTransitioningState';

/**
 * [state, startTransition, endTransition, isTransitioning]
 */
export type SimpleTransitioningState<S> = readonly [
    /**
     * current state value
     */
    S,
    /**
     * startTransition
     *
     * Queue the given state transition
     *
     * Analog of React setState
     *
     * @param nextState a React setState action for this state (either a literal value or function (prev) => next)
     * @param isAsync if true, nextState is queued and will not be updated until endTransition is called.
     * Otherwise, completes all interim transitions, then the given nextState transition and rerenders the using component
     */
    (nextState: SetStateAction<S>, isAsync?: boolean) => void,
    /**
     * endTransition
     *
     * calling completes all queued transitions in order, sets isTransitioning to false, and rerenders
     */
    () => void,
    /**
     * isTransitioning
     *
     * true iff this state is in the middle of a transition
     */
    boolean
];

function useSimpleTransitioningState<S = undefined>(): SimpleTransitioningState<S | undefined>;
/**
 * State is always a defined S if an initial state is provided
 */
function useSimpleTransitioningState<S>(initialState: S, initialTransitioning?: boolean): SimpleTransitioningState<S>;

/**
 * Hook to useState that supports asynchronous transitions
 *
 * State transitions may be queued via startTransition, and all queued transitions are completed in order by endTransition
 *
 * @typeParam S type of state
 * @param initialState
 * @param initialTransitioning if true, initializes the state with isTransitioning: true
 * @returns [state, startTransition, endTransition, isTransitioning]: SimpleTransitioningState<S>
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
