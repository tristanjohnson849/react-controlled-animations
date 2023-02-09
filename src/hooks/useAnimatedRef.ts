import { Ref, useEffect, useRef } from 'react';

import { AnimationsByName, normalizedAnimation } from '../AnimationInput';

/**
 * A React.Ref that declares itself as an AnimatedRef
 */
export interface AnimatedRef<E> {
    current: E | null;
    refType: 'animated';
}

/**
 *
 * @param ref React Ref that is possibly Animated
 * @returns
 */
export function isAnimatedRef<E>(ref: Ref<E>): ref is AnimatedRef<E> {
    return typeof ref === 'object' && 'refType' in ref && ref.refType === 'animated';
}

/**
 * Low-level hook to useRef that will animate the ref'd HTML element with the given currentAnimation name
 *
 * Expects the AnimationsByName<A> to be serialized as a JSON string in the data-animations attribute on the element - see {@link ControlledAnimated!}
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
    onAnimationEnd?: (completedAnimationName: A, webAnimation: Animation | null) => void
): AnimatedRef<E> {
    const elementRef = useRef<E>(null) as AnimatedRef<E>;
    elementRef.refType = 'animated';

    const animationsAttr = elementRef.current?.getAttribute('data-animations') || '{}';
    // if we have a ref and an currentAnimation, animate the ref with the currentAnimation
    useEffect(() => {
        if (elementRef.current !== null) {
            try {
                const animations = JSON.parse(animationsAttr) as unknown as AnimationsByName<A>;
                if (currentAnimation !== null) {
                    if (!animations || !animations[currentAnimation]) {
                        onAnimationEnd && onAnimationEnd(currentAnimation, null);
                        return undefined;
                    }
                    const {
                        keyframes,
                        options: { ...options },
                    } = normalizedAnimation(animations[currentAnimation]);

                    const webAnimation = elementRef.current.animate(keyframes, options as KeyframeAnimationOptions);

                    const end = () => {
                        try {
                            webAnimation.commitStyles();
                        } catch (e) {
                            // element may have been unmounted
                        }
                        onAnimationEnd && onAnimationEnd(currentAnimation, webAnimation);
                    };
                    webAnimation.onfinish = end;
                    return () => {
                        if (webAnimation.playState !== 'finished') {
                            end();
                        }
                    };
                }
            } catch (err) {
                if (process.env.NODE_ENV !== 'production') {
                    const selector = elementRef.current.id || elementRef.current.className || null;
                    console.error(
                        `Failed to animate ${elementRef.current}${
                            selector ? `[${selector}]` : ''
                        }(${currentAnimation}).\nCheck your animations: ${animationsAttr}.\n`,
                        err
                    );
                }
            }
        }
        return undefined;
    }, [elementRef.current, currentAnimation, animationsAttr]);

    return elementRef;
}

export default useAnimatedRef;
