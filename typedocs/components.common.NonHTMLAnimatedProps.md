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

## Properties

### animations

• `Optional` **animations**: [`AnimationsByName`](../wiki/AnimationInput#animationsbyname)<`A`\>

The mapping of animationName A to an AnimationInput

#### Defined in

[components/common.ts:52](https://github.com/tristanjohnson849/react-controlled-animations/blob/5534f41/src/components/common.ts#L52)

___

### as

• `Optional` **as**: `T`

The given tag that this Animated element delegates to

#### Defined in

[components/common.ts:47](https://github.com/tristanjohnson849/react-controlled-animations/blob/5534f41/src/components/common.ts#L47)
