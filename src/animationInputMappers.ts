import { AnimationInput, AnimationOptions, normalizedAnimation, NormalizedAnimation } from './AnimationInput.js';
import { ToggleTransitions } from './hooks/useTransitioningToggle.js';

/**
 * Returns an edited animation that runs it's last keyframe infinitely (until interrupted)
 * Useful for controlled animations that are tied to state rather than transitions
 *
 * The edits are:
 * - set iterations: 'Infinity' on the last Keyframe in the Keyframes list
 * - set fill: 'forwards' on the Animation options
 */
export const toPersistedAnimation = (toPersist: AnimationInput): NormalizedAnimation => {
    const { keyframes, options } = normalizedAnimation(toPersist);
    if (!keyframes.length) {
        return { keyframes: [], options: options };
    }

    const lastKeyframe = keyframes.slice(-1)[0];
    const rest = keyframes.slice(0, -1);

    const persistedLast: Keyframe = {
        ...lastKeyframe,
        iterations: 'Infinity',
    };
    const persistentOptions: AnimationOptions = {
        ...options,
        fill: 'forwards',
    };
    return {
        keyframes: [...rest, persistedLast],
        options: persistentOptions,
    };
};

/**
 * Returns an edited animation that retains the style of its last keyframe
 * Useful for controlled animations that are tied to transitions so that when the transition is complete, the style persists in the new state
 *
 * The edits are:
 * - set fill: 'forwards' on the Animation options
 */
export const toTransitionAnimation = (animation: AnimationInput): NormalizedAnimation => {
    const { keyframes, options } = normalizedAnimation(animation);
    return {
        keyframes: keyframes,
        options: { fill: 'forwards', ...options },
    };
};

/**
 * Helper to create a complete toggling animation by reversing a given togglingOn animation
 *
 * The edits are:
 * - set fill: 'forwards' on the Animation options
 */
export const toToggleAnimations = (togglingOn: AnimationInput): Record<ToggleTransitions, AnimationInput> => {
    const { keyframes, options } = toTransitionAnimation(togglingOn);
    return {
        togglingOn: { keyframes, options },
        togglingOff: {
            keyframes: keyframes.slice().reverse(),
            options,
        },
    };
};

/**
 * Helper to create expected SimpleTransition animation Record
 *
 * See {@link hooks.useSimpleTransitioningState}
 *
 * @param transition
 */
export const toSimpleTransitionAnimations = (transition: AnimationInput): Record<'transition', AnimationInput> => {
    const edited = toTransitionAnimation(transition);
    return {
        transition: edited,
    };
};
