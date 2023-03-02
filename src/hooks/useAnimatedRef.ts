import { RefObject, useContext, useDebugValue, useEffect, useRef } from 'react';

import { AnimationInput, AnimationOptions, normalizedAnimation } from '../AnimationInput.js';

import { EnableAnimationContext } from './enableAnimationContext.js';

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
 * @param onAnimationEnd callback to be called when the animation is finished(), or if the animation is interrupted by a new currentAnimation. Must be stable across renders.
 * @returns react Ref to be assigned to the Animated element
 */
function useAnimatedRef<A extends string = string, E extends HTMLElement = HTMLElement>(
    currentAnimation: A | null,
    animations: Record<A, AnimationInput | null>,
    onAnimationEnd?: (completedAnimationName: A | null, webAnimation: Animation | null) => void
): RefObject<E> {
    const elementRef = useRef<E>(null);
    const enabledContext = useContext(EnableAnimationContext);

    const serializedAnimation =
        currentAnimation && animations && animations[currentAnimation] && JSON.stringify(animations[currentAnimation]);

    useDebugValue(`${currentAnimation}: ${serializedAnimation}`);

    // if we have a ref and an currentAnimation, animate the ref with the currentAnimation
    useEffect(() => {
        if (elementRef.current !== null) {
            // remove existing animations for currentAnimation
            if (currentAnimation) {
                elementRef.current.getAnimations().forEach((anim) => {
                    if (anim.id === currentAnimation) {
                        anim.cancel();
                    }
                });
            }

            // if we cannot animate, still call onAnimationEnd
            if (!currentAnimation || !animations || !animations[currentAnimation]) {
                onAnimationEnd && onAnimationEnd(currentAnimation, null);
                return;
            }

            const { keyframes, options } = normalizedAnimation(animations[currentAnimation]);
            const webAnimation = runAnimation(
                elementRef.current,
                keyframes,
                // id will always be currentAnimation
                { ...options, id: currentAnimation },
                (anim) => onAnimationEnd && onAnimationEnd(currentAnimation, anim),
                () => {
                    const selector = elementRef.current.id || elementRef.current.className || null;
                    return `Failed to animate ${currentAnimation} on ${elementRef.current.tagName}${
                        selector ? `[${selector}]` : ''
                    }.\nCheck your animations: ${serializedAnimation}.\n`;
                }
            );

            // similar to just having currentAnimation == null, but we'll initialize and cancel each new animation in case we need to finish()
            if (!enabledContext.enabled) {
                onAnimationEnd && onAnimationEnd(currentAnimation, webAnimation);
                if (webAnimation?.playState !== 'finished') {
                    webAnimation?.cancel();
                }
                return;
            }
            if (webAnimation) {
                return () => {
                    // useEffect cleanup. Only call onEnd if we haven't already finished and it's still registered on the element
                    if (
                        webAnimation.playState !== 'finished' &&
                        elementRef?.current?.getAnimations()?.includes(webAnimation)
                    ) {
                        onAnimationEnd && onAnimationEnd(currentAnimation, webAnimation);
                    }
                };
            }
        }
    }, [enabledContext, elementRef.current, currentAnimation, serializedAnimation]);

    return elementRef;
}

const runAnimation = <E extends HTMLElement>(
    element: E,
    keyframes: Keyframe[],
    options: AnimationOptions,
    onAnimationEnd: (webAnimation: Animation | null) => void,
    errorMessage: (err: Error) => string
): Animation | null => {
    try {
        const webAnimation = element.animate(keyframes, options as KeyframeAnimationOptions);

        webAnimation.onfinish = () => {
            onAnimationEnd && onAnimationEnd(webAnimation);
        };

        return webAnimation;
    } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(errorMessage(err), err);
        }

        onAnimationEnd && onAnimationEnd(null);
        return null;
    }
};

export default useAnimatedRef;
