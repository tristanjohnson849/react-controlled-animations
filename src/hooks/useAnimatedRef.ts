import { RefObject, useDebugValue, useEffect, useRef } from 'react';

import { AnimationOptions, AnimationsByName, normalizedAnimation } from '../AnimationInput';

/**
 * Low-level hook to useRef that will animate the ref'd HTML element with the given currentAnimation name
 *
 * Expects the AnimationsByName<A> to be serialized as a JSON string in the data-animations attribute on the element - see {@link components.ControlledAnimated}
 *
 * Note: will interrupt and play a new animation if the animations stored at data-animations change and the Component using this hook is rerendered
 *
 * @typeParam A the accepted animation names
 * @param currentAnimation the animation to be applied to the ref'd element
 * @param onAnimationEnd callback to be called when the animation is finished(), or if the animation is interrupted (currentAnimation changes before finishing)
 * @returns react Ref to be assigned to the Animated element
 */
function useAnimatedRef<A extends string = string, E extends HTMLElement = HTMLElement>(
    currentAnimation: A | null,
    animations: AnimationsByName<A>,
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
                onAnimationEnd && onAnimationEnd(currentAnimation, null);
                return undefined;
            }
            const { keyframes, options } = normalizedAnimation(animations[currentAnimation]);

            const webAnimation = runAnimation(
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

            if (webAnimation !== null) {
                return () => cleanupAnimation(webAnimation);
            }
        }
    }, [elementRef.current, currentAnimation, serializedAnimation]);

    return elementRef;
}

export default useAnimatedRef;

const runAnimation = <E extends HTMLElement>(
    element: E,
    keyframes: Keyframe[],
    options: AnimationOptions,
    onAnimationEnd: (webAnimation: Animation | null) => void,
    errorMessage: (err: Error) => string
) => {
    try {
        const webAnimation = element.animate(keyframes, options as KeyframeAnimationOptions);

        webAnimation.onfinish = () => {
            try {
                webAnimation.commitStyles();
            } catch (e) {
                // element may have been unmounted
            }
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

const cleanupAnimation = (webAnimation: Animation) => {
    if (webAnimation.playState !== 'finished') {
        // simulate finish without actually calling finish() for infinite animations
        webAnimation.onfinish(null);

        // cancel to remove animation
        webAnimation.cancel();
    }
};
