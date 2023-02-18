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

[hooks/useTransitioningToggle.ts:5](https://github.com/tristanjohnson849/react-controlled-animations/blob/e2bcfd7/src/hooks/useTransitioningToggle.ts#L5)

___

### TransitioningToggleState

Ƭ **TransitioningToggleState**: readonly [`boolean`, (`isAsync?`: `boolean`) => `void`, () => `void`, [`ToggleTransitions`](../wiki/hooks.useTransitioningToggle#toggletransitions) \| ``null``]

[isToggled, startToggling, endToggling, currentTransition]

#### Defined in

[hooks/useTransitioningToggle.ts:10](https://github.com/tristanjohnson849/react-controlled-animations/blob/e2bcfd7/src/hooks/useTransitioningToggle.ts#L10)

## Functions

### default

▸ **default**(`initialState?`, `initialTransitioning?`): [`TransitioningToggleState`](../wiki/hooks.useTransitioningToggle#transitioningtogglestate)

Hook to use a boolean toggle state that supports asynchronous transitions

Toggle transitions may be queued via startToggling, and all queued toggles are completed by endTransition

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `initialState` | `boolean` | `false` |  |
| `initialTransitioning` | `boolean` | `false` | if true, will toggle away from initialState when the togglingElementRef is first set |

#### Returns

[`TransitioningToggleState`](../wiki/hooks.useTransitioningToggle#transitioningtogglestate)

[isToggled, startToggling, endToggling, currentTransition]: TransitioningToggleState

#### Defined in

[hooks/useTransitioningToggle.ts:46](https://github.com/tristanjohnson849/react-controlled-animations/blob/e2bcfd7/src/hooks/useTransitioningToggle.ts#L46)
