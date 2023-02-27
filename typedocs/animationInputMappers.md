# Module: animationInputMappers

## Table of contents

### Functions

- [toToggleAnimations](../wiki/animationInputMappers#totoggleanimations)

## Functions

### toToggleAnimations

▸ **toToggleAnimations**(`togglingOn`): `Record`<[`ToggleTransitions`](../wiki/hooks.useTransitioningToggle#toggletransitions), [`AnimationInput`](../wiki/AnimationInput#animationinput)\>

Helper to create a complete toggling animation by reversing a given togglingOn animation

The edits are:
- set fill: 'forwards' on the Animation options
- togglingOff is exactly the togglingOn animations with the keyframes array reversed. If an offset values is set at keyframes[i], it is swapped with the offset from keyframes[keyframes.length - (i + 1)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `togglingOn` | [`AnimationInput`](../wiki/AnimationInput#animationinput) |

#### Returns

`Record`<[`ToggleTransitions`](../wiki/hooks.useTransitioningToggle#toggletransitions), [`AnimationInput`](../wiki/AnimationInput#animationinput)\>

#### Defined in

[animationInputMappers.ts:11](https://github.com/tristanjohnson849/react-controlled-animations/blob/4fa6b95/src/animationInputMappers.ts#L11)
