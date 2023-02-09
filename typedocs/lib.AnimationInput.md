# Module: lib/AnimationInput

## Table of contents

### Interfaces

- [NormalizedAnimation](../wiki/lib.AnimationInput.NormalizedAnimation)

### Type Aliases

- [AnimationInput](../wiki/lib.AnimationInput#animationinput)
- [AnimationOptions](../wiki/lib.AnimationInput#animationoptions)
- [AnimationsByName](../wiki/lib.AnimationInput#animationsbyname)

### Functions

- [normalizedAnimation](../wiki/lib.AnimationInput#normalizedanimation)

## Type Aliases

### AnimationInput

Ƭ **AnimationInput**: `Keyframe`[] \| [`NormalizedAnimation`](../wiki/lib.AnimationInput.NormalizedAnimation) \| { `keyframes`: `Keyframe`[] ; `options`: `number` \| [`AnimationOptions`](../wiki/lib.AnimationInput#animationoptions)  }

#### Defined in

[lib/AnimationInput.ts:10](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/AnimationInput.ts#L10)

___

### AnimationOptions

Ƭ **AnimationOptions**: `Omit`<`KeyframeAnimationOptions`, ``"iterations"``\> & { `iterations?`: `number` \| ``"Infinity"``  }

#### Defined in

[lib/AnimationInput.ts:1](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/AnimationInput.ts#L1)

___

### AnimationsByName

Ƭ **AnimationsByName**<`A`\>: `Record`<`A`, [`AnimationInput`](../wiki/lib.AnimationInput#animationinput)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `string` |

#### Defined in

[lib/AnimationInput.ts:29](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/AnimationInput.ts#L29)

## Functions

### normalizedAnimation

▸ **normalizedAnimation**(`animation`): [`NormalizedAnimation`](../wiki/lib.AnimationInput.NormalizedAnimation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`AnimationInput`](../wiki/lib.AnimationInput#animationinput) |

#### Returns

[`NormalizedAnimation`](../wiki/lib.AnimationInput.NormalizedAnimation)

#### Defined in

[lib/AnimationInput.ts:18](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/AnimationInput.ts#L18)
