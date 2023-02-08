import React, { RefAttributes } from 'react';
import { AnimationInput } from '../AnimationInput';
import useAnimatingRef from '../hooks/useAnimatingRef';
import {AnimatedProps, HTMLIntrinsics, TagAttributes, setRef, TagElement, mergeRefs } from "./common";


export type ControlledAnimatedProps<A extends string, T extends HTMLIntrinsics = "div"> = {
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

const ControlledAnimated = React.forwardRef(controlledAnimated) as <A extends string, T extends HTMLIntrinsics = "div">(
    props: ControlledAnimatedProps<A, T> & RefAttributes<TagElement<T>>
) => React.ReactElement<any, any>;

controlledAnimated.displayName = "ControlledAnimated";

export default ControlledAnimated;
