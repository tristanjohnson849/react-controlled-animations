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

Ƭ **AnimationInput**: `Keyframe`[] \| [`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation) \| { `keyframes`: `Keyframe`[] ; `options`: `number` \| [`AnimationOptions`](../wiki/AnimationInput#animationoptions)  }

#### Defined in

[AnimationInput.ts:10](https://github.com/tristanjohnson849/react-controlled-animations/blob/35474ce/src/AnimationInput.ts#L10)

___

### AnimationOptions

Ƭ **AnimationOptions**: `Omit`<`KeyframeAnimationOptions`, ``"iterations"``\> & { `iterations?`: `number` \| ``"Infinity"``  }

#### Defined in

[AnimationInput.ts:1](https://github.com/tristanjohnson849/react-controlled-animations/blob/35474ce/src/AnimationInput.ts#L1)

___

### AnimationsByName

Ƭ **AnimationsByName**<`A`\>: `Record`<`A`, [`AnimationInput`](../wiki/AnimationInput#animationinput) \| ``null``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `string` |

#### Defined in

[AnimationInput.ts:29](https://github.com/tristanjohnson849/react-controlled-animations/blob/35474ce/src/AnimationInput.ts#L29)

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

[AnimationInput.ts:18](https://github.com/tristanjohnson849/react-controlled-animations/blob/35474ce/src/AnimationInput.ts#L18)
