export type AnimationOptions = Omit<KeyframeAnimationOptions, "iterations"> & {
    iterations?: number | 'Infinity'
};

export interface NormalizedAnimation {
    keyframes: Keyframe[];
    options: AnimationOptions;
}

export type AnimationInput =
    | Keyframe[]
    | NormalizedAnimation
    | {
          keyframes: Keyframe[];
          options: number | AnimationOptions;
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
