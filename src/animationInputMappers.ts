import { AnimationInput, normalizedAnimation } from './AnimationInput';
import { ToggleTransitions } from './hooks/useTransitioningToggle';

/**
 * Helper to create a complete toggling animation by reversing a given togglingOn animation
 *
 * The edits are:
 * - set fill: 'forwards' on the Animation options
 * - togglingOff is exactly the togglingOn animations with the keyframes array reversed. If an offset values is set at keyframes[i], it is swapped with the offset from keyframes[keyframes.length - (i + 1)]
 */
export const toToggleAnimations = (togglingOn: AnimationInput): Record<ToggleTransitions, AnimationInput> => {
    const { keyframes, options } = normalizedAnimation(togglingOn);

    const reversedKeyframes = keyframes.map((keyframe, i) => {
        const swap = { ...keyframes[keyframes.length - (i + 1)] };

        if ('offset' in keyframe) {
            swap.offset = keyframe.offset;
        } else {
            delete swap.offset;
        }
        return swap;
    });

    return {
        togglingOn: { keyframes, options },
        togglingOff: {
            keyframes: reversedKeyframes,
            options,
        },
    };
};
