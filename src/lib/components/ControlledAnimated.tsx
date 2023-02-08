import React, { RefAttributes } from 'react';
import useAnimatingRef from '../hooks/useAnimatingRef';
import {AnimatedProps, HTMLIntrinsics, TagHTMLAttributes, setRef, TagHTMLElement, mergeRefs } from "./common";


export type ControlledAnimatedProps<A extends string, T extends HTMLIntrinsics = "div"> = {
    /**
     * The currentAnimation that controls this component. 
     * On changing this prop, the ControlledAnimated will interrupt the currentAnimation (if not finished/null) and will begin the new animation (if not null)
     */
    currentAnimation: A | null
} & AnimatedProps<A, T>;

const controlledAnimated = <A extends string, T extends HTMLIntrinsics = "div">(
    props: ControlledAnimatedProps<A, T>,
    ref?: React.ForwardedRef<T>
): React.ReactElement<any, any> => {
    const {
        as: Tag = "div",
        currentAnimation,
        onAnimationEnd,
        animations,
        ...tagProps
    } = props;


    const animatingRef = useAnimatingRef<A, HTMLElement>(
        currentAnimation,
        onAnimationEnd
    );

    return (
        // @ts-ignore typescript's really not liking this
        <Tag
            // @ts-ignore 
            ref={mergeRefs(ref, animatingRef as React.ForwardedRef<TagElement<T>>)}
            data-animations={JSON.stringify(animations)}
            {...tagProps}
        />
    );
};

/**
 * An Animated component that is controlled by the currentAnimation prop
 * The component may be changed to a different HTML tag delegate via the as prop
 * May accept a ref to forward to the HTML tag delegate
 * @typeParam A the accepted animation names
 * @typeParam T the HTML Tag delegate
 */
const ControlledAnimated = React.forwardRef(controlledAnimated) as <A extends string = string, T extends HTMLIntrinsics = "div">(
    props: ControlledAnimatedProps<A, T> & RefAttributes<TagHTMLElement<T>>
) => React.ReactElement<any, any>;

controlledAnimated.displayName = "ControlledAnimated";

export default ControlledAnimated;
