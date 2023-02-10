import React, { RefAttributes, ForwardedRef } from 'react';
import useAnimatingRef, { isAnimatedRef } from '../hooks/useAnimatedRef';
import Animated from './Animated';
import {AnimatedProps, HTMLIntrinsics, TagHTMLElement, mergeRefs } from "./common";


export type ControlledAnimatedProps<A extends string, T extends HTMLIntrinsics = "div"> = {
    /**
     * The currentAnimation that controls this component. 
     * On changing this prop, the ControlledAnimated will interrupt the currentAnimation (if not finished/null) and will begin the new animation (if not null)
     */
    currentAnimation: A | null
    
    /**
     * Callback to be called when the animation is finished() or is interrupted by a new animationName
     * @param completedAnimationName the animation state that is ending
     * @param webAnimation the Web API Animation that is ending or null if the animation could not be started
     */
    onAnimationEnd?: (completedAnimationName: A, webAnimation: Animation | null) => void;
} & AnimatedProps<A, T>;

// typescript's really not liking the mapping between tags/elements/attributes, but type safety for component props is working except for the ref
// TODO fix typesafety for refs
// TODO see if we can get cleaner types in this component
const controlledAnimated = <A extends string, T extends HTMLIntrinsics = "div">(
    props: ControlledAnimatedProps<A, T>,
    ref?: ForwardedRef<TagHTMLElement<T>>
): React.ReactElement<any, any> => {
    const {
        currentAnimation,
        onAnimationEnd,
        ...animatedProps
    } = props;


    const animatingRef = useAnimatingRef<A, HTMLElement>(
        currentAnimation,
        onAnimationEnd
    );

    // ignore local ref if we were forwarded an AnimatedRef, animations will be managed by the forwarded ref
    // @ts-ignore
    const elementRef = isAnimatedRef(ref) && isAnimatedRef(animatingRef) 
        ? ref 
        : mergeRefs(
            ref, 
            // @ts-ignore
            animatingRef
        );

    return (
        // @ts-ignore
        <Animated<A, T>
            // @ts-ignore
            ref={elementRef}
            {...animatedProps}
        />
    );
};

/**
 * An Animated component that is controlled by the currentAnimation prop
 * The component may be changed to a different HTML tag delegate via the as prop
 * May accept a ref to forward to the HTML tag delegate, though there is no need to pass an AnimatedRef (see @link components.Animated)
 * 
 * This component is useful for synchronizing animations with other animated elements
 * @typeParam A the accepted animation names
 * @typeParam T the HTML Tag delegate
 */
const ControlledAnimated = React.forwardRef(controlledAnimated) as <A extends string = string, T extends HTMLIntrinsics = "div">(
    props: ControlledAnimatedProps<A, T> & RefAttributes<TagHTMLElement<T>>
) => React.ReactElement<any, any>;

controlledAnimated.displayName = "ControlledAnimated";

export default ControlledAnimated;
