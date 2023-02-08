import React from "react";
import { HTMLIntrinsics, mergeRefs, TagHTMLElement, AnimatedProps } from "./common";
import ControlledAnimated from "./ControlledAnimated";
import useIsHovering from "../hooks/useIsHovering";

export type HoverAnimations = 'hovering'|'notHovering';

function hoverAnimated<A extends string = never, T extends HTMLIntrinsics = "div">(
    props: AnimatedProps<HoverAnimations | A, T>,
    ref?: React.ForwardedRef<TagHTMLElement<T>>
): React.ReactElement<any, any> {
    const [hovering, hoverRef] = useIsHovering();

    return (
       <ControlledAnimated<HoverAnimations | A, T>
            currentAnimation={hovering ? "hovering" : "notHovering"}
            ref={mergeRefs(ref, hoverRef as React.ForwardedRef<TagHTMLElement<T>>)}
            {...props}
       />
    );
};

/**
 * An Animated component that will track hover (via mouseenter/mouseleave listeners) and change animations to the corresponding hover state
 * May accept a ref to forward to the HTML tag delegate
 * @typeParam A the additional animation names; default = never makes the default animation names exactly {@link HoverAnimations}
 * @typeParam T the HTML Tag delegate
 */
const HoverAnimated = React.forwardRef(hoverAnimated) as <A extends string = never, T extends HTMLIntrinsics = "div">(
    props: AnimatedProps<HoverAnimations | A, T> & React.RefAttributes<TagHTMLElement<T>>
) => React.ReactElement<any, any>;

hoverAnimated.displayName = "HoverAnimated";

export default HoverAnimated;