export type AnimationOptions = Omit<KeyframeAnimationOptions, 'iterations'> & {
    iterations?: number | 'Infinity';
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

export const DEFAULT_DURATION = 1000;

export const normalizedAnimation = (animation: AnimationInput): NormalizedAnimation => {
    if (Array.isArray(animation)) {
        return { keyframes: animation, options: { duration: DEFAULT_DURATION } };
    }
    const { keyframes, options } = animation;

    const normalizedOptions = typeof options === 'number' ? { duration: options } : options;

    return { keyframes, options: normalizedOptions };
};

export type AnimationsByName<A extends string> = Record<A, AnimationInput | null>;
