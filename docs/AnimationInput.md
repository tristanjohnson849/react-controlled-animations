# Module: AnimationInput

## Table of contents

### Type Aliases

- [AnimationInput](../wiki/AnimationInput#animationinput)
- [AnimationOptions](../wiki/AnimationInput#animationoptions)
- [AnimationsByName](../wiki/AnimationInput#animationsbyname)
- [NormalizedAnimation](../wiki/AnimationInput#normalizedanimation)

### Functions

- [normalizedAnimation](../wiki/AnimationInput#normalizedanimation-1)

## Type Aliases

### AnimationInput

Ƭ **AnimationInput**: `Keyframe`[] \| [`NormalizedAnimation`](../wiki/AnimationInput#normalizedanimation) \| { `keyframes`: `Keyframe`[] ; `options`: [`AnimationOptions`](../wiki/AnimationInput#animationoptions)  }

#### Defined in

[AnimationInput.ts:8](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/AnimationInput.ts#L8)

___

### AnimationOptions

Ƭ **AnimationOptions**: `number` \| `KeyframeAnimationOptions`

#### Defined in

[AnimationInput.ts:6](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/AnimationInput.ts#L6)

___

### AnimationsByName

Ƭ **AnimationsByName**<`A`\>: `Record`<`A`, [`AnimationInput`](../wiki/AnimationInput#animationinput)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `string` |

#### Defined in

[AnimationInput.ts:27](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/AnimationInput.ts#L27)

___

### NormalizedAnimation

Ƭ **NormalizedAnimation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `keyframes` | `Keyframe`[] |
| `options` | `KeyframeAnimationOptions` |

#### Defined in

[AnimationInput.ts:1](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/AnimationInput.ts#L1)

## Functions

### normalizedAnimation

▸ **normalizedAnimation**(`animation`): [`NormalizedAnimation`](../wiki/AnimationInput#normalizedanimation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`AnimationInput`](../wiki/AnimationInput#animationinput) |

#### Returns

[`NormalizedAnimation`](../wiki/AnimationInput#normalizedanimation)

#### Defined in

[AnimationInput.ts:16](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/AnimationInput.ts#L16)
