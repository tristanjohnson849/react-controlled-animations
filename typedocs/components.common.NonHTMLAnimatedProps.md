# Interface: NonHTMLAnimatedProps<A, T\>

[components/common](../wiki/components.common).NonHTMLAnimatedProps

AnimatedProps excluding HTML Attributes, exported

## Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `string` |
| `T` | extends [`HTMLIntrinsics`](../wiki/components.common#htmlintrinsics) = ``"div"`` |

## Table of contents

### Properties

- [animations](../wiki/components.common.NonHTMLAnimatedProps#animations)
- [as](../wiki/components.common.NonHTMLAnimatedProps#as)
- [onAnimationEnd](../wiki/components.common.NonHTMLAnimatedProps#onanimationend)

## Properties

### animations

• `Optional` **animations**: [`AnimationsByName`](../wiki/AnimationInput#animationsbyname)<`A`\>

The mapping of animationName A to an AnimationInput

#### Defined in

[components/common.ts:39](https://github.com/tristanjohnson849/react-controlled-animations/blob/e2bcfd7/src/components/common.ts#L39)

___

### as

• `Optional` **as**: `T`

The given tag that this Animated element delegates to
Defaults to "div"

#### Defined in

[components/common.ts:34](https://github.com/tristanjohnson849/react-controlled-animations/blob/e2bcfd7/src/components/common.ts#L34)

___

### onAnimationEnd

• `Optional` **onAnimationEnd**: (`completedAnimationName`: `A`, `webAnimation`: `Animation`) => `void`

#### Type declaration

▸ (`completedAnimationName`, `webAnimation`): `void`

Callback to be called when the animation is finished() or is interrupted by a new animationName

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `completedAnimationName` | `A` | the name of the animation that is ending |
| `webAnimation` | `Animation` | the Web API Animation that is ending, or null if the animation was not started |

##### Returns

`void`

#### Defined in

[components/common.ts:46](https://github.com/tristanjohnson849/react-controlled-animations/blob/e2bcfd7/src/components/common.ts#L46)
