import React from "react";
import { AnimationInput, NormalizedAnimation, normalizedAnimation } from "../AnimationInput";
import { HTMLIntrinsics, mergeRefs, TagElement, AnimatedProps } from "./common";
import ControlledAnimated from "./ControlledAnimated";
import useIsHovering from "../hooks/useIsHovering";

export type HoverAnimations = 'hovering'|'notHovering';

function hoverAnimated<T extends HTMLIntrinsics = "div">(
    props: AnimatedProps<HoverAnimations, T>,
    ref?: React.ForwardedRef<TagElement<T>>
): React.ReactElement<any, any> {
    const [hovering, hoverRef] = useIsHovering();

    return (
       <ControlledAnimated<HoverAnimations, T>
            currentAnimation={hovering ? "hovering" : "notHovering"}
            ref={mergeRefs(ref, hoverRef as React.ForwardedRef<TagElement<T>>)}
            {...props}
       />
    );
};

const HoverAnimated = React.forwardRef(hoverAnimated) as <T extends HTMLIntrinsics = "div">(
    props: AnimatedProps<HoverAnimations, T> & React.RefAttributes<TagElement<T>>
) => React.ReactElement<any, any>;

hoverAnimated.displayName = "HoverAnimated";

// Makes a given animation run it's last frame infinitely
// Useful for controlled animations that are tied to state rather than transitions
export const persistedAnimation = (toPersist: AnimationInput): NormalizedAnimation => {
    const { keyframes, options } = normalizedAnimation(toPersist);
    if (!keyframes.length) {
        return { keyframes: [], options: options }
    }

    const lastKeyframe = keyframes.slice(-1)[0];
    const rest = keyframes.slice(0, -1);

    const persistedLast: Keyframe = { 
        iterations: 'Infinity', 
        ...lastKeyframe 
    };
    const persistentOptions: KeyframeAnimationOptions = {
        fill: 'forwards',
        ...options
    }
    return { 
        keyframes: [...rest, persistedLast],
        options: persistentOptions 
    };
}

export default HoverAnimated;