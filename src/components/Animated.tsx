import React, { ForwardedRef } from 'react';
import {AnimatedProps, HTMLIntrinsics, TagHTMLElement } from "./common";
import { AnimatedRef } from '../hooks/useAnimatedRef';


// typescript's really not liking the mapping between tags/elements/attributes, but type safety for component props is working except for the ref
// TODO fix typesafety for refs
// TODO see if we can get cleaner types in this component
const animated = <A extends string, T extends HTMLIntrinsics = "div">(
    props: AnimatedProps<A, T>,
    ref?: ForwardedRef<TagHTMLElement<T>>
): React.ReactElement<any, any> => {
    const {
        as: Tag = "div",
        animations,
        ...tagProps
    } = props;

    return (
        // @ts-ignore 
        <Tag
            // @ts-ignore 
            ref={ref}
            data-animations={JSON.stringify(animations)}
            {...tagProps}
        />
    );
};

/**
 * Animated allows you to declare animations that will apply to an HTML tag delegate (`as` prop)
 * These animations are written as a JSON string to the element's data-animations attribute
 * This component requires an AnimatedRef prop to manage the animations on the tag delegate
 * 
 * @typeParam A the accepted animation names
 * @typeParam T the HTML Tag delegate
 */
const Animated = React.forwardRef(animated) as <A extends string = string, T extends HTMLIntrinsics = "div">(
    props: AnimatedProps<A, T> & { ref: AnimatedRef<TagHTMLElement<T>> }
) => React.ReactElement<any, any>;

animated.displayName = "ControlledAnimated";

export default Animated;
