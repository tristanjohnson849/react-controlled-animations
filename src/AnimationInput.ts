/**
 * Override dom KeyframeAnimationOptions with [documented types](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters)
 */
export type AnimationOptions = Omit<KeyframeAnimationOptions, 'iterations'> & {
    iterations?: number | 'Infinity';
};

/**
 * Normalized animation input for internal use, created from AnimationInput
 */
export interface NormalizedAnimation {
    keyframes: Keyframe[];
    options: AnimationOptions;
}

/**
 * Defines an Web API Animation
 *
 * May be either
 * - an array of [Keyframes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
 * - an object containing a `keyframes` array and animation [options](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate#parameters)
 */
export type AnimationInput =
    | Keyframe[]
    | NormalizedAnimation
    | {
          keyframes: Keyframe[];
          options: number | AnimationOptions;
      };

/**
 *
 * @returns a NormalizedAnimation from the given AnimationInput
 */
export const normalizedAnimation = (animationInput: AnimationInput | null): NormalizedAnimation => {
    if (animationInput == null) {
        return { keyframes: [], options: {} };
    }
    if (Array.isArray(animationInput)) {
        return { keyframes: animationInput, options: {} };
    }

    const { keyframes, options } = animationInput;

    const normalizedOptions = typeof options === 'number' ? { duration: options } : options;

    return { keyframes, options: normalizedOptions };
};
