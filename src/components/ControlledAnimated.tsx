import React, { RefAttributes, ForwardedRef, useCallback } from 'react';
import useAnimatedRef from '../hooks/useAnimatedRef';
import { AnimatedProps, HTMLIntrinsics, TagHTMLElement, mergeRefs } from "./common";


export type ControlledAnimatedProps<A extends string, T extends HTMLIntrinsics = "div"> = {
    /**
     * The currentAnimation that controls this component. 
     * On changing this prop to a non-null value, will start the animation at animations[currentAnimation]
     * If given null, will cancel() any current animations
     * If given a new or null value while the previous aninmation is not finished(), will commit the current style to the element and call onAnimationEnd
     */
    currentAnimation: A | null
} & AnimatedProps<A, T>;

// typescript's really not liking the mapping between tags/elements/attributes, but type safety for component props is working except for the ref
// TODO fix typesafety for refs
// TODO see if we can get cleaner types in this component
const controlledAnimated = <A extends string, T extends HTMLIntrinsics = "div">(
    props: ControlledAnimatedProps<A, T>,
    forwardedRef?: ForwardedRef<TagHTMLElement<T>>
): React.ReactElement<any, any> => {
    const {
        as: Tag = "div",
        animations,
        currentAnimation,
        onAnimationEnd,
        ...tagProps
    } = props;

    const animatedRef = useAnimatedRef<A, HTMLElement>(
        currentAnimation,
        animations,
        onAnimationEnd,
    );

    const elementRef = useCallback(mergeRefs(
        forwardedRef,
        // @ts-ignore
        animatedRef
    ), [forwardedRef]);

    return (
        // @ts-ignore 
        <Tag
            // @ts-ignore 
            ref={elementRef}
            {...tagProps}
        />
    );
};

/**
 * An Animated component that is controlled by the currentAnimation prop
 * The component may use a different HTML tag delegate via the `as` prop
 * May accept a ref to forward to the HTML tag delegate. 
 * Note: forwarding a ref returned from {@link hooks.useAnimatedRef} may result in undeterministic behavior
 *  
 * @typeParam A the accepted animation names
 * @typeParam T the HTML Tag delegate
 */
const ControlledAnimated = React.forwardRef(controlledAnimated) as <A extends string = string, T extends HTMLIntrinsics = "div">(
    props: ControlledAnimatedProps<A, T> & RefAttributes<TagHTMLElement<T>>
) => React.ReactElement<any, any>;

controlledAnimated.displayName = "ControlledAnimated";

export default ControlledAnimated;
