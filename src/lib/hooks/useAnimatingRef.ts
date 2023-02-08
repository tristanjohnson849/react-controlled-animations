import { Ref, useEffect, useRef } from 'react';

import { AnimationInput, normalizedAnimation } from '../AnimationInput';

const useAnimatingRef = <A extends string, E extends HTMLElement>(
    currentAnimation: A | null,
    onAnimationEnd?: (completedAnimationName: A, webAnimation: Animation | null) => void
): Ref<E> => {
    const elementRef = useRef<E>(null);

    const animationsAttr = elementRef.current?.getAttribute('data-animations') || '{}';
    // if we have a ref and an currentAnimation, animate the ref with the currentAnimation
    useEffect(() => {
        if (elementRef.current !== null) {
            try {
                const animations = JSON.parse(animationsAttr) as unknown as Record<A, AnimationInput>;
                if (currentAnimation !== null) {
                    if (!animations || !animations[currentAnimation]) {
                        onAnimationEnd && onAnimationEnd(currentAnimation, null);
                        return undefined;
                    }
                    const {
                        keyframes,
                        options: { ...options },
                    } = normalizedAnimation(animations[currentAnimation]);
                    const webAnimation = elementRef.current.animate(keyframes, options);

                    const end = () => {
                        webAnimation.commitStyles();
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
};

export default useAnimatingRef;
