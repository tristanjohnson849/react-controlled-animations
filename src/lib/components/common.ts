import React from 'react';

import { AnimationsByName } from '../AnimationInput';

type PickByType<T, Value> = {
    [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
};

/**
 * "a", "abbr", ..., "div", ... "webview"
 * Excludes tags that extend React.SVGProps
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HTMLIntrinsics = keyof PickByType<JSX.IntrinsicElements, React.DetailedHTMLProps<any, any>>;

/**
 * TagHTMLElement<"button"> is equivalent to HTMLButtonElement
 */
export type TagHTMLElement<T extends HTMLIntrinsics> = JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    infer E
>
    ? E
    : never;

/**
 * TagHTMLAttributes<"a"> is equivalent to React.AnchorHTMLAttributes<HTMLAnchorElement>
 */
export type TagHTMLAttributes<T extends HTMLIntrinsics> = JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
    infer A,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
>
    ? A
    : never;

/**
 * AnimatedProps excluding HTML Attributes, exported
 */
export interface NonHTMLAnimatedProps<A extends string, T extends HTMLIntrinsics = 'div'> {
    /**
     * The given tag that this Animated element delegates to
     */
    as?: T;

    /**
     * The mapping of animationName A to an AnimationInput
     */
    animations?: AnimationsByName<A>;

    /**
     * Callback to be called when the animation is finished() or is interrupted by a new animationName
     * @param completedAnimationName the animation state that is ending
     * @param webAnimation the {@link Animation} that is ending or null if the animation could not be started
     */
    onAnimationEnd?: (completedAnimationName: A, webAnimation: Animation | null) => void;
}

/**
 * Standard Props for an animated element. Includes the HTMLAttributes for the given Tag delegate, replacing the onAnimationEnd signature
 * @typeParam A the accepted animation names
 * @typeParam T the HTML Tag delegate
 */
export type AnimatedProps<A extends string = string, T extends HTMLIntrinsics = 'div'> = NonHTMLAnimatedProps<A, T> &
    Omit<TagHTMLAttributes<T>, 'onAnimationEnd'>;

/**
 * Helper to update a ref (either CallbackRef or RefObject) to the given next value
 */
export function setRef<E>(ref: React.ForwardedRef<E> | undefined, next: E | null): void {
    if (ref) {
        if (typeof ref === 'function') {
            ref(next);
        } else {
            ref.current = next;
        }
    }
}

/**
 * Useful for tracking both a forwardedRef and a local ref
 *
 * @return a new ref that manages both given refs as one
 */
export function mergeRefs<E>(
    ref1: React.ForwardedRef<E> | undefined,
    ref2: React.ForwardedRef<E> | undefined
): React.ForwardedRef<E> {
    return (value: E | null) => {
        setRef(ref1, value);
        setRef(ref2, value);
    };
}