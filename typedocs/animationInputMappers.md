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

| Name | Type | Description |
| :------ | :------ | :------ |
| `toPersist` | [`AnimationInput`](../wiki/AnimationInput#animationinput) | the AnimationInput to get a persisted version of |

#### Returns

[`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation)

#### Defined in

[animationInputMappers.ts:20](https://github.com/tristanjohnson849/react-controlled-animations/blob/2fcbb59/src/animationInputMappers.ts#L20)

___

### toSimpleTransitionAnimations

▸ **toSimpleTransitionAnimations**(`transition`): [`AnimationsByName`](../wiki/AnimationInput#animationsbyname)<``"transition"``\>

Helper to create AnimationsByName for a SimpleTransition animation

See [useSimpleTransitionState](../wiki/hooks#usesimpletransitionstate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transition` | [`AnimationInput`](../wiki/AnimationInput#animationinput) |

#### Returns

[`AnimationsByName`](../wiki/AnimationInput#animationsbyname)<``"transition"``\>

#### Defined in

[animationInputMappers.ts:86](https://github.com/tristanjohnson849/react-controlled-animations/blob/2fcbb59/src/animationInputMappers.ts#L86)

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

[animationInputMappers.ts:68](https://github.com/tristanjohnson849/react-controlled-animations/blob/2fcbb59/src/animationInputMappers.ts#L68)

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

[animationInputMappers.ts:52](https://github.com/tristanjohnson849/react-controlled-animations/blob/2fcbb59/src/animationInputMappers.ts#L52)
