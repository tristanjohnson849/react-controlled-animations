import React, { useCallback } from "react";
import { HTMLIntrinsics, mergeRefs, TagHTMLElement, AnimatedProps } from "./common";
import ControlledAnimated from "./ControlledAnimated";
import useIsHovered from "../hooks/useIsHovered";

export type HoverAnimations = 'hovering'|'notHovering';

type HoverAnimatedProps<A extends string, T extends HTMLIntrinsics> = { 
    /**
     * The optional currentAnimation override that may control this component
     * If present, will override the animation for the current hover state
     * If null or undefined, the component will animate based on the hover state
     * Analogous to {@link components.ControlledAnimatedProps.currentAnimation}
     */
    currentAnimation?: A | null 
} & AnimatedProps<HoverAnimations | A, T>;

function hoverAnimated<A extends string = never, T extends HTMLIntrinsics = "div">(
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
        // @ts-ignore
       <ControlledAnimated<HoverAnimations | A, T>
            currentAnimation={currentAnimation || (hovered ? "hovering" : "notHovering")}
            ref={mergedRef}
            {...rest}
       />
    );
};

/**
 * An Animated component that will track hover (via mouseenter/mouseleave listeners) and animate based on the corresponding hover state
 * May accept a ref to forward to the HTML tag delegate
 * May accept an overriding currentAnimation
 * @typeParam A the additional animation names; default = never makes the default animation names exactly {@link components.HoverAnimations}
 * @typeParam T the HTML Tag delegate
 */
const HoverAnimated = React.forwardRef(hoverAnimated) as <A extends string = never, T extends HTMLIntrinsics = "div">(
    props: HoverAnimatedProps<A, T> & React.RefAttributes<TagHTMLElement<T>>
) => React.ReactElement<any, any>;

hoverAnimated.displayName = "HoverAnimated";

export default HoverAnimated;