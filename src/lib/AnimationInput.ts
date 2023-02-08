export interface NormalizedAnimation {
    keyframes: Keyframe[];
    options: KeyframeAnimationOptions;
};

export type AnimationOptions = number | KeyframeAnimationOptions;

export type AnimationInput =
    | Keyframe[]
    | NormalizedAnimation
    | {
          keyframes: Keyframe[];
          options: AnimationOptions;
      };

export const normalizedAnimation = (animation: AnimationInput): NormalizedAnimation => {
    if (Array.isArray(animation)) {
        return { keyframes: animation, options: {} };
    }
    const { keyframes, options } = animation;

    const normalizedOptions = typeof options === 'number' ? { duration: options } : options;

    return { keyframes, options: normalizedOptions };
};

export type AnimationsByName<A extends string> = Record<A, AnimationInput>;
