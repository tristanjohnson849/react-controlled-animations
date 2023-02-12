import React from "react";
import { HTMLIntrinsics, mergeRefs, TagHTMLElement, AnimatedProps } from "./common";
import ControlledAnimated from "./ControlledAnimated";
import useIsHovered from "../hooks/useIsHovered";

export type HoverAnimations = 'hovering'|'notHovering';

type HoverAnimatedProps<A extends string, T extends HTMLIntrinsics> = { 
    currentAnimation?: A | null 
} & AnimatedProps<HoverAnimations | A, T>;

function hoverAnimated<A extends string = never, T extends HTMLIntrinsics = "div">(
    { currentAnimation, ...rest}: HoverAnimatedProps<A, T>,
    ref?: React.ForwardedRef<TagHTMLElement<T>>
): React.ReactElement<any, any> {
    const [hovered, hoverRef] = useIsHovered();

    return (
        // @ts-ignore
       <ControlledAnimated<HoverAnimations | A, T>
            currentAnimation={currentAnimation || (hovered ? "hovering" : "notHovering")}
            ref={mergeRefs(ref, hoverRef as React.ForwardedRef<TagHTMLElement<T>>)}
            {...rest}
       />
    );
};

/**
 * An Animated component that will track hover (via mouseenter/mouseleave listeners) and change animations to the corresponding hover state
 * May accept a ref to forward to the HTML tag delegate
 * @typeParam A the additional animation names; default = never makes the default animation names exactly {@link components.HoverAnimations}
 * @typeParam T the HTML Tag delegate
 */
const HoverAnimated = React.forwardRef(hoverAnimated) as <A extends string = never, T extends HTMLIntrinsics = "div">(
    props: AnimatedProps<HoverAnimations | A, T> & React.RefAttributes<TagHTMLElement<T>>
) => React.ReactElement<any, any>;

hoverAnimated.displayName = "HoverAnimated";

export default HoverAnimated;