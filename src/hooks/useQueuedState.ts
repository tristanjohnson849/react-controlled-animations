import { SetStateAction, useState } from 'react';

/**
 * State that supports queueing transitioning
 */
export interface QueuedTransitionState<S> {
    /**
     * Current state value
     */
    readonly current: S;
    /**
     * enqueue a state transition
     */
    readonly enqueue: (action: SetStateAction<S>) => void;
    /**
     * process one queued transition
     */
    readonly transition: () => void;
    /**
     * process all queued transitions
     */
    readonly transitionAll: () => void;
}

function useQueuedState<S = undefined>(): QueuedTransitionState<S | undefined>;
/**
 * State is always a defined S if an initial state is provided
 */
function useQueuedState<S>(initialState: S): QueuedTransitionState<S>;

/**
 * Hook to use a QueuedTransitionState
 *
 * Useful for queuing state transitions while waiting for a concurrent event (like an animation completion)
 *
 * @param initialState
 * @returns QueuedTransitionState
 */
function useQueuedState<S>(initialState?: S): QueuedTransitionState<S | undefined> {
    const [queuedState, setQueuedState] = useState<InternalQueuedState<S | undefined>>({
        current: initialState,
        actionQueue: [],
    });
    const transition = () => setQueuedState((prevState) => transitionNActions(prevState, 1));

    return {
        current: queuedState.current as S,
        enqueue: (newAction: SetStateAction<S | undefined>) =>
            setQueuedState(({ current, actionQueue }) => ({
                current,
                actionQueue: [...actionQueue, newAction],
            })),
        transition,
        transitionAll: () => setQueuedState((prevState) => transitionNActions(prevState, prevState.actionQueue.length)),
    };
}

const transitionNActions = <S>({ current, actionQueue }: InternalQueuedState<S>, n: number): InternalQueuedState<S> => {
    const next = actionQueue.slice(0, n).reduce<S>((next, action) => dispatch(action, next), current);

    return { current: next, actionQueue: actionQueue.slice(n) };
};

const dispatch = <S>(action: SetStateAction<S>, state: S): S => (isFunctionAction(action) ? action(state) : action);

type InternalQueuedState<T> = {
    readonly current: T;
    readonly actionQueue: readonly SetStateAction<T>[];
};

const isFunctionAction = <T>(action: SetStateAction<T>): action is (prevState: T) => T => typeof action === 'function';

export default useQueuedState;
