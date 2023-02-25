import React, { DetailedHTMLProps } from 'react';

import { AnimationInput } from '../AnimationInput.js';

// exclude SVG
export type HTMLTags =
    | 'a'
    | 'abbr'
    | 'address'
    | 'area'
    | 'article'
    | 'aside'
    | 'audio'
    | 'b'
    | 'base'
    | 'bdi'
    | 'bdo'
    | 'big'
    | 'blockquote'
    | 'body'
    | 'br'
    | 'button'
    | 'canvas'
    | 'caption'
    | 'center'
    | 'cite'
    | 'code'
    | 'col'
    | 'colgroup'
    | 'data'
    | 'datalist'
    | 'dd'
    | 'del'
    | 'details'
    | 'dfn'
    | 'dialog'
    | 'div'
    | 'dl'
    | 'dt'
    | 'em'
    | 'embed'
    | 'fieldset'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'form'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'head'
    | 'header'
    | 'hgroup'
    | 'hr'
    | 'html'
    | 'i'
    | 'iframe'
    | 'img'
    | 'input'
    | 'ins'
    | 'kbd'
    | 'keygen'
    | 'label'
    | 'legend'
    | 'li'
    | 'link'
    | 'main'
    | 'map'
    | 'mark'
    | 'menu'
    | 'menuitem'
    | 'meta'
    | 'meter'
    | 'nav'
    | 'noindex'
    | 'noscript'
    | 'object'
    | 'ol'
    | 'optgroup'
    | 'option'
    | 'output'
    | 'p'
    | 'param'
    | 'picture'
    | 'pre'
    | 'progress'
    | 'q'
    | 'rp'
    | 'rt'
    | 'ruby'
    | 's'
    | 'samp'
    | 'slot'
    | 'script'
    | 'section'
    | 'select'
    | 'small'
    | 'source'
    | 'span'
    | 'strong'
    | 'style'
    | 'sub'
    | 'summary'
    | 'sup'
    | 'table'
    | 'template'
    | 'tbody'
    | 'td'
    | 'textarea'
    | 'tfoot'
    | 'th'
    | 'thead'
    | 'time'
    | 'title'
    | 'tr'
    | 'track'
    | 'u'
    | 'ul'
    | 'var'
    | 'video'
    | 'wbr'
    | 'webview';

export type TagHTMLElement<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] extends DetailedHTMLProps<
    any,
    infer E extends HTMLElement
>
    ? E
    : never;

/**
 * AnimatedProps excluding HTML Attributes, exported
 */
export interface NonHTMLAnimatedProps<A extends string, T extends HTMLTags = 'div'> {
    /**
     * The given tag that this Animated element delegates to
     * Defaults to "div"
     */
    as?: T;

    /**
     * The currentAnimation that controls this component.
     * On changing this prop to a non-null value, will start the animation at animations[currentAnimation]
     * If given null, will cancel() any current animations
     * If given a new or null value while the previous aninmation is not finished(), will commit the current style to the element and call onAnimationEnd
     */
    currentAnimation: A | null;

    /**
     * The mapping of animationName A to an AnimationInput
     */
    animations?: Record<A, AnimationInput>;

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
export type AnimatedProps<A extends string = string, T extends HTMLTags = 'div'> = NonHTMLAnimatedProps<A, T> &
    Omit<JSX.IntrinsicElements[T], 'onAnimationEnd'>;

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
