# react-controlled-animations

### Utilities for declaratively controlling animations through React hooks

## Overview

CSS animations are hard to control, and even more so when you want your animations tied to the state of your React components. 
The [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) makes it easier to control animations through javascript, but the API is designed to be used imperatively with DOM elements, violating React's declarative (one-way-data-flow) paradigm.

This library is a set of hooks and components to enable declarative, controlled Web Animations API animations in React components.


[Storybook Examples](https://tristanjohnson849.github.io/react-controlled-animations/)

[Typedocs](https://github.com/tristanjohnson849/react-controlled-animations/wiki)

## Example usage

```typescript
const AnimatedTransitionExample: React.FC<{}> = () => {
    const [
        counter,
        startTransition,
        endTransition, 
        currentTransitionName
    ] = useTransitioningState<number, 'flying'|'sliding'>(0);

    return (
        <div>
            <ControlledAnimated<'flying'|'sliding', "span">
                as="span"
                currentAnimation={currentTransitionName}
                onAnimationEnd={endTransition}
                style={{
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
                finishOnInterrupt
            >
                ????
            </ControlledAnimated>
            <div style={{ 
                textAlign: 'center',
                verticalAlign: 'middle', 
            }}>
                <div>Count: {counter}</div>
                <div>Animation: {currentTransitionName || "null"}</div>
                <button onClick={() => startTransition(
                    prev => prev + 1, 
                    Math.random() > 0.5 ? 'flying' : 'sliding'
                )}>
                    Increment
                </button>
            </div>
        </div>
    )
};
```

Like normal React state, this component keeps a counter that is Incremented by the button. However, setting state for this component animates the transition (here with a random choice between 'flying' and 'sliding'), and the counter state is only updated once the animation is complete. If the animation is interrupted by another click, it will run the new animation (if different), and queue the state changes until that new animation is complete. This is done through the useAnimatedTransitionState hook and ControlledAnimated component.

Also check out:

Components
- [HoverAnimated](https://github.com/tristanjohnson849/react-controlled-animations/wiki/components.HoverAnimated): a utility that animates based whether the component is hovered or not (generally very difficult with basic inline styles)

Hooks
- [useTransitioningToggle](https://github.com/tristanjohnson849/react-controlled-animations/wiki/hooks.useTransitioningToggle): a hook based on useAnimatedTransitionState that allows you to animate transitions on a boolean toggle
- [useSimpleTransitioningState](https://github.com/tristanjohnson849/react-controlled-animations/wiki/hooks.useSimpleTransitioningState): a simplified version of useAnimatedTransitionState that assumes a single animation for all transitions
