import { RefObject, useDebugValue, useEffect, useRef } from 'react';

import { AnimationInput, AnimationOptions, normalizedAnimation } from '../AnimationInput.js';

/**
 * Low-level hook  that will animate the ref'd HTML element with the given currentAnimation name
 *
 * Note: will interrupt and play a new animation if the animations stored at data-animations change and the Component using this hook is rerendered
 *
 * @typeParam A the accepted animation names
 * @typeParam E the type of element to be ref'd
 * @param currentAnimation On changing to a non-null value, will start the animation at animations[currentAnimation].
 * If given null, will cancel() any current animations
 * If given a new or null value while the previous aninmation is not finished(),
 * will commit the current style to the element and call onAnimationEnd
 * @param animations The mapping of animationName to AnimationInput
 * @param onAnimationEnd callback to be called when the animation is finished(), or if the animation is interrupted by a new currentAnimation
 * @returns react Ref to be assigned to the Animated element
 */
function useAnimatedRef<A extends string = string, E extends HTMLElement = HTMLElement>(
    currentAnimation: A | null,
    animations: Record<A, AnimationInput>,
    onAnimationEnd?: (completedAnimationName: A | null, webAnimation: Animation | null) => void
): RefObject<E> {
    const elementRef = useRef<E>(null);

    const serializedAnimation =
        currentAnimation && animations && animations[currentAnimation] && JSON.stringify(animations[currentAnimation]);

    useDebugValue(`${currentAnimation}: ${serializedAnimation}`);

    // if we have a ref and an currentAnimation, animate the ref with the currentAnimation
    useEffect(() => {
        if (elementRef.current !== null) {
            if (!currentAnimation || !animations || !animations[currentAnimation]) {
                elementRef.current.getAnimations().forEach((anim) => anim.cancel());

                onAnimationEnd && onAnimationEnd(currentAnimation, null);
                return undefined;
            }
            const { keyframes, options } = normalizedAnimation(animations[currentAnimation]);

            return runAnimation(
                elementRef.current,
                keyframes,
                options,
                (anim) => onAnimationEnd && onAnimationEnd(currentAnimation, anim),
                () => {
                    const selector = elementRef.current.id || elementRef.current.className || null;
                    return `Failed to animate ${currentAnimation} on ${elementRef.current.tagName}${
                        selector ? `[${selector}]` : ''
                    }.\nCheck your animations: ${serializedAnimation}.\n`;
                }
            );
        }
    }, [elementRef.current, currentAnimation, serializedAnimation]);

    return elementRef;
}

const runAnimation = <E extends HTMLElement>(
    element: E,
    keyframes: Keyframe[],
    options: AnimationOptions,
    onAnimationEnd: (webAnimation: Animation | null) => void,
    errorMessage: (err: Error) => string
): void | (() => void) => {
    try {
        const webAnimation = element.animate(keyframes, options as KeyframeAnimationOptions);

        webAnimation.onfinish = () => {
            onAnimationEnd && onAnimationEnd(webAnimation);
        };

        return () => {
            // useEffect cleanup. Only call onEnd if we haven't already finished
            if (webAnimation.playState !== 'finished') {
                onAnimationEnd && onAnimationEnd(webAnimation);
            }
        };
    } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(errorMessage(err), err);
        }

        onAnimationEnd && onAnimationEnd(null);
    }
};

export default useAnimatedRef;
