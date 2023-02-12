# Module: hooks/useTransitioningToggle

## Table of contents

### Type Aliases

- [ToggleTransitions](../wiki/hooks.useTransitioningToggle#toggletransitions)
- [TransitioningToggleState](../wiki/hooks.useTransitioningToggle#transitioningtogglestate)

### Functions

- [default](../wiki/hooks.useTransitioningToggle#default)

## Type Aliases

### ToggleTransitions

Ƭ **ToggleTransitions**: ``"togglingOn"`` \| ``"togglingOff"``

#### Defined in

[hooks/useTransitioningToggle.ts:5](https://github.com/tristanjohnson849/react-controlled-animations/blob/2fcbb59/src/hooks/useTransitioningToggle.ts#L5)

___

### TransitioningToggleState

Ƭ **TransitioningToggleState**: readonly [`boolean`, () => `void`, () => `void`, [`ToggleTransitions`](../wiki/hooks.useTransitioningToggle#toggletransitions) \| ``null``]

**`Type Param`**

the HTMLElement to be Animated

#### Defined in

[hooks/useTransitioningToggle.ts:10](https://github.com/tristanjohnson849/react-controlled-animations/blob/2fcbb59/src/hooks/useTransitioningToggle.ts#L10)

## Functions

### default

▸ **default**(`initialState?`, `initialTransitioning?`): [`TransitioningToggleState`](../wiki/hooks.useTransitioningToggle#transitioningtogglestate)

Hook to create a boolean toggle state that animates when toggled

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `initialState` | `boolean` | `false` |  |
| `initialTransitioning` | `boolean` | `false` | if true, will toggle away from initialState when the togglingElementRef is first set |

#### Returns

[`TransitioningToggleState`](../wiki/hooks.useTransitioningToggle#transitioningtogglestate)

[isToggled, toggleCallback, togglingElementRef, currentAnimation]

#### Defined in

[hooks/useTransitioningToggle.ts:37](https://github.com/tristanjohnson849/react-controlled-animations/blob/2fcbb59/src/hooks/useTransitioningToggle.ts#L37)
