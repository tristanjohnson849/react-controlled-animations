import { SetStateAction, useEffect, useState } from 'react';

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
    const [isTransitioningAll, setTransitioningAll] = useState(false);

    const transition = () =>
        setQueuedState(({ current, actionQueue }: InternalQueuedState<S | undefined>) => {
            if (actionQueue.length <= 0) {
                return { current, actionQueue };
            }
            const [action, ...remaining] = actionQueue;
            return {
                current: isFunctionAction(action) ? action(current) : action,
                actionQueue: remaining,
            };
        });

    useEffect(() => {
        if (isTransitioningAll) {
            for (let i = 0; i < queuedState.actionQueue.length; i++) {
                transition();
            }
            setTransitioningAll(false);
        }
    }, [isTransitioningAll]);

    return {
        current: queuedState.current as S,
        enqueue: (newAction: SetStateAction<S | undefined>) =>
            setQueuedState(({ current, actionQueue }) => ({
                current,
                actionQueue: [...actionQueue, newAction],
            })),
        transition,
        // can't just transition based on queuedState here since react may queue setStates (i.e. enqueues)
        // have to set a flag to transition on next render
        transitionAll: () => {
            setTransitioningAll(true);
        },
    };
}

type InternalQueuedState<T> = {
    readonly current: T;
    readonly actionQueue: readonly SetStateAction<T>[];
};

const isFunctionAction = <T>(action: SetStateAction<T>): action is (prevState: T) => T => typeof action === 'function';

export default useQueuedState;
