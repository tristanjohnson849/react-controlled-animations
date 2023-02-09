# Interface: NonHTMLAnimatedProps<A, T\>

[lib/components/common](../wiki/lib.components.common).NonHTMLAnimatedProps

AnimatedProps excluding HTML Attributes, exported

## Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `string` |
| `T` | extends [`HTMLIntrinsics`](../wiki/lib.components.common#htmlintrinsics) = ``"div"`` |

## Table of contents

### Properties

- [animations](../wiki/lib.components.common.NonHTMLAnimatedProps#animations)
- [as](../wiki/lib.components.common.NonHTMLAnimatedProps#as)
- [onAnimationEnd](../wiki/lib.components.common.NonHTMLAnimatedProps#onanimationend)

## Properties

### animations

• `Optional` **animations**: [`AnimationsByName`](../wiki/lib.AnimationInput#animationsbyname)<`A`\>

The mapping of animationName A to an AnimationInput

#### Defined in

[lib/components/common.ts:50](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/components/common.ts#L50)

___

### as

• `Optional` **as**: `T`

The given tag that this Animated element delegates to

#### Defined in

[lib/components/common.ts:45](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/components/common.ts#L45)

___

### onAnimationEnd

• `Optional` **onAnimationEnd**: (`completedAnimationName`: `A`, `webAnimation`: `Animation`) => `void`

#### Type declaration

▸ (`completedAnimationName`, `webAnimation`): `void`

Callback to be called when the animation is finished() or is interrupted by a new animationName

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `completedAnimationName` | `A` | the animation state that is ending |
| `webAnimation` | `Animation` | the Animation that is ending or null if the animation could not be started |

##### Returns

`void`

#### Defined in

[lib/components/common.ts:57](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/components/common.ts#L57)
