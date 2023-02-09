# Module: lib/animationInputMappers

## Table of contents

### Functions

- [toPersistedAnimation](../wiki/lib.animationInputMappers#topersistedanimation)
- [toSimpleTransitionAnimations](../wiki/lib.animationInputMappers#tosimpletransitionanimations)
- [toToggleAnimations](../wiki/lib.animationInputMappers#totoggleanimations)
- [toTransitionAnimation](../wiki/lib.animationInputMappers#totransitionanimation)

## Functions

### toPersistedAnimation

▸ **toPersistedAnimation**(`toPersist`): [`NormalizedAnimation`](../wiki/lib.AnimationInput.NormalizedAnimation)

Returns an edited animation that runs it's last keyframe infinitely (until interrupted)
Useful for controlled animations that are tied to state rather than transitions

The edits are:
- set iterations: 'Infinity' on the last Keyframe in the Keyframes list
- set fill: 'forwards' on the Animation options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toPersist` | [`AnimationInput`](../wiki/lib.AnimationInput#animationinput) | the AnimationInput to get a persisted version of |

#### Returns

[`NormalizedAnimation`](../wiki/lib.AnimationInput.NormalizedAnimation)

#### Defined in

[lib/animationInputMappers.ts:14](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/animationInputMappers.ts#L14)

___

### toSimpleTransitionAnimations

▸ **toSimpleTransitionAnimations**(`transition`): [`AnimationsByName`](../wiki/lib.AnimationInput#animationsbyname)<``"transition"``\>

Helper to create AnimationsByName for a SimpleTransition animation

See useSimpleTransitionState!

#### Parameters

| Name | Type |
| :------ | :------ |
| `transition` | [`AnimationInput`](../wiki/lib.AnimationInput#animationinput) |

#### Returns

[`AnimationsByName`](../wiki/lib.AnimationInput#animationsbyname)<``"transition"``\>

#### Defined in

[lib/animationInputMappers.ts:80](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/animationInputMappers.ts#L80)

___

### toToggleAnimations

▸ **toToggleAnimations**(`togglingOn`): [`AnimationsByName`](../wiki/lib.AnimationInput#animationsbyname)<[`ToggleAnimations`](../wiki/lib.hooks.useAnimatedToggle#toggleanimations)\>

Helper to create a complete toggling animation by reversing a given togglingOn animation

The edits are:
- set fill: 'forwards' on the Animation options

#### Parameters

| Name | Type |
| :------ | :------ |
| `togglingOn` | [`AnimationInput`](../wiki/lib.AnimationInput#animationinput) |

#### Returns

[`AnimationsByName`](../wiki/lib.AnimationInput#animationsbyname)<[`ToggleAnimations`](../wiki/lib.hooks.useAnimatedToggle#toggleanimations)\>

#### Defined in

[lib/animationInputMappers.ts:62](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/animationInputMappers.ts#L62)

___

### toTransitionAnimation

▸ **toTransitionAnimation**(`animation`): [`NormalizedAnimation`](../wiki/lib.AnimationInput.NormalizedAnimation)

Returns an edited animation that retains the style of its last keyframe
Useful for controlled animations that are tied to transitions so that when the transition is complete, the style persists in the new state

The edits are:
- set fill: 'forwards' on the Animation options

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`AnimationInput`](../wiki/lib.AnimationInput#animationinput) |

#### Returns

[`NormalizedAnimation`](../wiki/lib.AnimationInput.NormalizedAnimation)

#### Defined in

[lib/animationInputMappers.ts:46](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/animationInputMappers.ts#L46)
