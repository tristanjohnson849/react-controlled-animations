# Module: AnimationInput

## Table of contents

### Interfaces

- [NormalizedAnimation](../wiki/AnimationInput.NormalizedAnimation)

### Type Aliases

- [AnimationInput](../wiki/AnimationInput#animationinput)
- [AnimationOptions](../wiki/AnimationInput#animationoptions)

### Variables

- [DEFAULT\_DURATION](../wiki/AnimationInput#default_duration)

### Functions

- [normalizedAnimation](../wiki/AnimationInput#normalizedanimation)

## Type Aliases

### AnimationInput

Ƭ **AnimationInput**: `Keyframe`[] \| [`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation) \| { `keyframes`: `Keyframe`[] ; `options`: `number` \| [`AnimationOptions`](../wiki/AnimationInput#animationoptions)  }

Defines an Web API Animation

May be either
- an array of [Keyframes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
- an object containing a `keyframes` array and animation [options](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate#parameters)

#### Defined in

[AnimationInput.ts:23](https://github.com/tristanjohnson849/react-controlled-animations/blob/bad52f8/src/AnimationInput.ts#L23)

___

### AnimationOptions

Ƭ **AnimationOptions**: `Omit`<`KeyframeAnimationOptions`, ``"iterations"``\> & { `iterations?`: `number` \| ``"Infinity"``  }

Override dom KeyframeAnimationOptions with [documented types](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters)

#### Defined in

[AnimationInput.ts:4](https://github.com/tristanjohnson849/react-controlled-animations/blob/bad52f8/src/AnimationInput.ts#L4)

## Variables

### DEFAULT\_DURATION

• `Const` **DEFAULT\_DURATION**: ``1000``

#### Defined in

[AnimationInput.ts:31](https://github.com/tristanjohnson849/react-controlled-animations/blob/bad52f8/src/AnimationInput.ts#L31)

## Functions

### normalizedAnimation

▸ **normalizedAnimation**(`animationInput`): [`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationInput` | [`AnimationInput`](../wiki/AnimationInput#animationinput) |

#### Returns

[`NormalizedAnimation`](../wiki/AnimationInput.NormalizedAnimation)

a NormalizedAnimation from the given AnimationInput

#### Defined in

[AnimationInput.ts:37](https://github.com/tristanjohnson849/react-controlled-animations/blob/bad52f8/src/AnimationInput.ts#L37)
