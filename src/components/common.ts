import React, { HTMLAttributes } from 'react';

import { AnimationsByName } from '../AnimationInput';

type PickByType<T, Value> = {
    [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
};

/**
 * "a", "abbr", ..., "div", ... "webview"
 * Excludes tags that extend React.SVGProps
 */
export type HTMLIntrinsics = keyof PickByType<JSX.IntrinsicElements, React.DetailedHTMLProps<any, any>>;

/**
 * TagHTMLElement<"a"> is equivalent to HTMLAnchorElement
 */
export type TagHTMLElement<T extends HTMLIntrinsics> = HTMLElement &
    JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
    any,
    infer E
>
    ? E
    : never;

/**
 * TagHTMLAttributes<"a"> is equivalent to React.AnchorHTMLAttributes<HTMLAnchorElement>
 */
export type TagHTMLAttributes<T extends HTMLIntrinsics> = HTMLAttributes<TagHTMLElement<T>> &
    JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
    infer A,
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
     * Defaults to "div"
     */
    as?: T;

    /**
     * The mapping of animationName A to an AnimationInput
     */
    animations?: AnimationsByName<A>;

    /**
     * Callback to be called when the animation is finished() or is interrupted by a new animationName
     * @param completedAnimationName the name of the animation that is ending
     * @param webAnimation the Web API Animation that is ending, or null if the animation was not started
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
 * If both refs are AnimatedRef, returns the first since AnimatedRefs should be unique
 *
 * @return a new ref that manages both given refs as one
 */
export function mergeRefs<E>(
    ref1: React.ForwardedRef<E> | undefined,
    ref2: React.ForwardedRef<E> | undefined
): (value: E | null) => void {
    return (value: E | null) => {
        setRef(ref1, value);
        setRef(ref2, value);
    };
}
