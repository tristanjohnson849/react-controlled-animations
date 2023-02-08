import { Ref, SetStateAction } from 'react';

import useAnimatedTransitionState from './useAnimatedTransitionState';

// [state, setState, transitioningElementRef, isTransitioning]
export type SimpleTransitioningState<T, E extends HTMLElement> = readonly [
    T,
    (nextState: SetStateAction<T>) => void,
    Ref<E>,
    boolean
];

function useSimpleTransitioningState<T, E extends HTMLElement>(): SimpleTransitioningState<T | undefined, E>;
function useSimpleTransitioningState<T, E extends HTMLElement>(
    initialState: T,
    initialTransitioning?: boolean,
    onTransitionEnd?: () => void
): SimpleTransitioningState<T, E>;
function useSimpleTransitioningState<T, E extends HTMLElement>(
    initialState?: T | undefined,
    initialTransitioning = false,
    onTransitionEnd?: () => void
): SimpleTransitioningState<T | undefined, E> {
    const [state, animatedSetState, elementRef, animationState] = useAnimatedTransitionState<T, 'transition', E>(
        initialState,
        initialTransitioning ? 'transition' : null,
        onTransitionEnd
    );

    return [state, (action) => animatedSetState(action, 'transition'), elementRef, animationState !== null];
}

export default useSimpleTransitioningState;
