# Module: animationInputMappers

## Table of contents

### Functions

- [toPersistedAnimation](../wiki/animationInputMappers#topersistedanimation)
- [toSimpleTransitionAnimations](../wiki/animationInputMappers#tosimpletransitionanimations)
- [toToggleAnimations](../wiki/animationInputMappers#totoggleanimations)
- [toTransitionAnimation](../wiki/animationInputMappers#totransitionanimation)

## Functions

### toPersistedAnimation

▸ **toPersistedAnimation**(`toPersist`): [`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation)

Returns an edited animation that runs it's last keyframe infinitely (until interrupted)
Useful for controlled animations that are tied to state rather than transitions

The edits are:
- set iterations: 'Infinity' on the last Keyframe in the Keyframes list
- set fill: 'forwards' on the Animation options

#### Parameters

| Name | Type |
| :------ | :------ |
| `toPersist` | [`AnimationInput`](../wiki/AnimationInput#animationinput) |

#### Returns

[`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation)

#### Defined in

[animationInputMappers.ts:18](https://github.com/tristanjohnson849/react-controlled-animations/blob/1cda27b/src/animationInputMappers.ts#L18)

___

### toSimpleTransitionAnimations

▸ **toSimpleTransitionAnimations**(`transition`): [`AnimationsByName`](../wiki/AnimationInput#animationsbyname)<``"transition"``\>

Helper to create AnimationsByName for a SimpleTransition animation

See [useSimpleTransitioningState](../wiki/hooks#usesimpletransitioningstate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transition` | [`AnimationInput`](../wiki/AnimationInput#animationinput) |

#### Returns

[`AnimationsByName`](../wiki/AnimationInput#animationsbyname)<``"transition"``\>

#### Defined in

[animationInputMappers.ts:80](https://github.com/tristanjohnson849/react-controlled-animations/blob/1cda27b/src/animationInputMappers.ts#L80)

___

### toToggleAnimations

▸ **toToggleAnimations**(`togglingOn`): [`AnimationsByName`](../wiki/AnimationInput#animationsbyname)<[`ToggleTransitions`](../wiki/hooks.useTransitioningToggle#toggletransitions)\>

Helper to create a complete toggling animation by reversing a given togglingOn animation

The edits are:
- set fill: 'forwards' on the Animation options

#### Parameters

| Name | Type |
| :------ | :------ |
| `togglingOn` | [`AnimationInput`](../wiki/AnimationInput#animationinput) |

#### Returns

[`AnimationsByName`](../wiki/AnimationInput#animationsbyname)<[`ToggleTransitions`](../wiki/hooks.useTransitioningToggle#toggletransitions)\>

#### Defined in

[animationInputMappers.ts:62](https://github.com/tristanjohnson849/react-controlled-animations/blob/1cda27b/src/animationInputMappers.ts#L62)

___

### toTransitionAnimation

▸ **toTransitionAnimation**(`animation`): [`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation)

Returns an edited animation that retains the style of its last keyframe
Useful for controlled animations that are tied to transitions so that when the transition is complete, the style persists in the new state

The edits are:
- set fill: 'forwards' on the Animation options

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`AnimationInput`](../wiki/AnimationInput#animationinput) |

#### Returns

[`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation)

#### Defined in

[animationInputMappers.ts:48](https://github.com/tristanjohnson849/react-controlled-animations/blob/1cda27b/src/animationInputMappers.ts#L48)
