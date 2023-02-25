import React, { ForwardedRef, useCallback } from 'react';
import useAnimatedRef from '../hooks/useAnimatedRef.js';
import { AnimatedProps, HTMLTags, mergeRefs, TagHTMLElement } from './common.js';


const controlledAnimated = <A extends string, T extends HTMLTags = 'div'>(
    props: Omit<AnimatedProps<A, T>, "ref">,
    forwardedRef?: ForwardedRef<TagHTMLElement<T>>
): React.ReactElement<any, any> => {
    const {
        as: Tag = "div" as React.ElementType,
        animations,
        currentAnimation,
        onAnimationEnd,
        ...tagProps
    } = props;

    const animatedRef = useAnimatedRef<A, TagHTMLElement<T>>(
        currentAnimation,
        animations,
        onAnimationEnd,
    );

    const elementRef = useCallback(mergeRefs(
        forwardedRef,
        animatedRef
    ), [forwardedRef]);

    return (
        <Tag
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
const ControlledAnimated = React.forwardRef(controlledAnimated) as <A extends string = string, T extends HTMLTags = "div">(
    props: AnimatedProps<A, T>
) => React.ReactElement<any, any>;

controlledAnimated.displayName = "ControlledAnimated";

export default ControlledAnimated;
