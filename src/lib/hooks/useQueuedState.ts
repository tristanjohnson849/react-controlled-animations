import { SetStateAction, useState } from 'react';

export type QueuedState<T> = {
    readonly current: T;
    readonly enqueue: (action: SetStateAction<T>) => void;
    readonly transition: () => void;
    readonly transitionAll: () => void;
};

function useQueuedState<T = undefined>(): QueuedState<T | undefined>;
function useQueuedState<T>(initialState: T): QueuedState<T>;
function useQueuedState<T>(initialState?: T): QueuedState<T | undefined> {
    const [queuedState, setQueuedState] = useState<InternalQueuedState<T | undefined>>({
        current: initialState,
        actionQueue: [],
    });

    const transition = () =>
        setQueuedState(({ current, actionQueue }: InternalQueuedState<T | undefined>) => {
            if (actionQueue.length <= 0) {
                return { current, actionQueue };
            }
            const [action, ...remaining] = actionQueue;
            return {
                current: isFunctionAction(action) ? action(current) : action,
                actionQueue: remaining,
            };
        });

    return {
        current: queuedState.current as T,
        enqueue: (newAction: SetStateAction<T | undefined>) =>
            setQueuedState(({ current, actionQueue }) => ({
                current,
                actionQueue:
                    // have to make assertions to get around the optional param
                    [...actionQueue, newAction],
            })),
        transition,
        transitionAll: () => {
            for (let i = 0; i < queuedState.actionQueue.length; i++) {
                transition();
            }
        },
    };
}

type InternalQueuedState<T> = {
    readonly current: T;
    readonly actionQueue: readonly SetStateAction<T>[];
};

const isFunctionAction = <T>(action: SetStateAction<T>): action is (prevState: T) => T => typeof action === 'function';

export default useQueuedState;
