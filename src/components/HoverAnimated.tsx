import React, { useCallback } from "react";
import { HTMLTags, mergeRefs, TagHTMLElement, AnimatedProps } from "./common";
import ControlledAnimated from "./ControlledAnimated";
import useIsHovered from "../hooks/useIsHovered";

export type HoverAnimations = 'hovering'|'notHovering';

type HoverAnimatedProps<A extends string, T extends HTMLTags = "div"> = { 
    /**
     * The optional currentAnimation override that may control this component
     * If present, will override the animation for the current hover state
     * If null or undefined, the component will animate based on the hover state
     * Analogous to currentAnimation in {@link components/ControlledAnimated.ControlledAnimatedProps}
     */
    currentAnimation?: A | null 
} & Omit<AnimatedProps<HoverAnimations | A, T>, "currentAnimation">;

function hoverAnimated<A extends string, T extends HTMLTags>(
    { 
        currentAnimation = null, 
        ...rest
    }: HoverAnimatedProps<A, T>,
    ref?: React.ForwardedRef<TagHTMLElement<T>>
): React.ReactElement<any, any> {
    const [hovered, hoverRef] = useIsHovered();

    const mergedRef = useCallback(
        mergeRefs(ref, hoverRef as React.ForwardedRef<TagHTMLElement<T>>), 
        [ref]
    );

    return (
       <ControlledAnimated<HoverAnimations | A, T>
            currentAnimation={currentAnimation || (hovered ? "hovering" : "notHovering")}
            ref={mergedRef}
            {...rest as AnimatedProps<HoverAnimations | A, T>}
       />
    );
};

/**
 * An Animated component that will track hover (via mouseenter/mouseleave listeners) and animate based on the corresponding hover state
 * May accept a ref to forward to the HTML tag delegate
 * May accept an overriding currentAnimation
 * @typeParam A additional animation names
 * @typeParam T the HTML Tag delegate
 */
const HoverAnimated = React.forwardRef(hoverAnimated) as <A extends string = never, T extends HTMLTags = "div">(
    props: HoverAnimatedProps<A, T>
) => React.ReactElement<any, any>;

hoverAnimated.displayName = "HoverAnimated";

export default HoverAnimated;