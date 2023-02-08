# Module: AnimationInput

## Table of contents

### Interfaces

- [NormalizedAnimation](../wiki/AnimationInput.NormalizedAnimation)

### Type Aliases

- [AnimationInput](../wiki/AnimationInput#animationinput)
- [AnimationOptions](../wiki/AnimationInput#animationoptions)
- [AnimationsByName](../wiki/AnimationInput#animationsbyname)

### Functions

- [normalizedAnimation](../wiki/AnimationInput#normalizedanimation)

## Type Aliases

### AnimationInput

Ƭ **AnimationInput**: `Keyframe`[] \| [`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation) \| { `keyframes`: `Keyframe`[] ; `options`: [`AnimationOptions`](../wiki/AnimationInput#animationoptions)  }

#### Defined in

[AnimationInput.ts:8](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/AnimationInput.ts#L8)

___

### AnimationOptions

Ƭ **AnimationOptions**: `number` \| `KeyframeAnimationOptions`

#### Defined in

[AnimationInput.ts:6](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/AnimationInput.ts#L6)

___

### AnimationsByName

Ƭ **AnimationsByName**<`A`\>: `Record`<`A`, [`AnimationInput`](../wiki/AnimationInput#animationinput)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `string` |

#### Defined in

[AnimationInput.ts:27](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/AnimationInput.ts#L27)

## Functions

### normalizedAnimation

▸ **normalizedAnimation**(`animation`): [`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`AnimationInput`](../wiki/AnimationInput#animationinput) |

#### Returns

[`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation)

#### Defined in

[AnimationInput.ts:16](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/AnimationInput.ts#L16)
