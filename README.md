# react-controlled-animations

### Utilities for declaratively controlling animations through React hooks

## Overview

CSS animations are hard to control, and even more so when you want your animations tied to the state of your React components. 
The [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) makes it easier to control animations through javascript, but the API is designed to be used imperatively with DOM elements, violating React's declarative (one-way-data-flow) paradigm.

This library is a set of hooks and components to enable declarative, controlled Web Animations API animations React components.


[Storybook Examples](https://tristanjohnson849.github.io/react-controlled-animations/)

[Typedocs](https://github.com/tristanjohnson849/react-controlled-animations/wiki)

## Example usage

```
const AnimatedTransitionExample: React.FC<{ chosenAnimation: MyAnimations }> = ({ chosenAnimation }) => {
    const [
        counter, animatedTransition,
        elementRef, currentAnimation
    ] = useAnimatedTransitionState<number, MyAnimations, HTMLElement>(0);

    return (
        <Animated<'flying'|'sliding', "span">
            as="span"
            ref={elementRef}
            style={{
                width: '100px',
                height: '100px',
                fontSize: '48px',
                margin: '24px',
                textAlign: 'center',
                verticalAlign: 'middle'
            }}
            animations={{
                flying: toTransitionAnimation({
                    keyframes: [
                        { translate: 0 },
                        { translate: '0 -30vh' },
                        { translate: '0 -28vh' },
                        { translate: '0 -32vh' },
                        { translate: '0 -28vh' },
                        { translate: '0 -32vh' },
                        { translate: 0, easing: 'ease-in-out' },
                    ],
                    options: { duration: 3000 }
                }),
                sliding: toTransitionAnimation({
                    keyframes: [
                        { translate: 0 },
                        { translate: '25vw', offset: 0.2 },
                        { translate: 0 },
                    ],
                    options: { duration: 3000, easing: 'ease-in-out' }
                }),
            }}
        >
            🤓
        </Animated>
        <div style={{ background: 'white', padding: '16px', fontFamily: '"Helvetica", "Arial", sans-serif',
                textAlign: 'center',
                verticalAlign: 'middle', borderRadius: '8px' }}>
            <div>Count: {counter}</div>
            <div>Animation: {currentAnimation || "null"}</div>
            <button onClick={() => animatedTransition(prev => prev + 1, Math.rand() > 0.5 ? 'flying' : 'sliding')}>Increment</button>
        </div>
    )
};
```

Like normal React state, this component keeps a counter that is Incremented by the button. However, setting state for this component animates the transition (here with a random choice between 'flying' and 'sliding'), and the counter state is only updated once the animation is complete or interrupted by another click. This is done through the useAnimatedTransitionState hook and Animated component.

Also check out:
Components
- ControlledAnimated: like Animated, but is controlled by the currentAnimation prop. This is helpful for synchronizing animations across multiple elements based on one state
- HoverAnimated: a utility that animates based whether the component is hovered or not (generally very difficult with basic inline styles)
- useAnimatedToggle: a hook based on useAnimatedTransitionState that allows you to animate transitions on a boolean toggle
