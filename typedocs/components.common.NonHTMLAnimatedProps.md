# Interface: NonHTMLAnimatedProps<A, T\>

[components/common](../wiki/components.common).NonHTMLAnimatedProps

AnimatedProps excluding HTML Attributes, exported

## Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `string` |
| `T` | extends [`HTMLTags`](../wiki/components.common#htmltags) = ``"div"`` |

## Table of contents

### Properties

- [animations](../wiki/components.common.NonHTMLAnimatedProps#animations)
- [as](../wiki/components.common.NonHTMLAnimatedProps#as)
- [currentAnimation](../wiki/components.common.NonHTMLAnimatedProps#currentanimation)
- [onAnimationEnd](../wiki/components.common.NonHTMLAnimatedProps#onanimationend)

## Properties

### animations

• `Optional` **animations**: `Record`<`A`, [`AnimationInput`](../wiki/AnimationInput#animationinput)\>

The mapping of animationName A to an AnimationInput

#### Defined in

[components/common.ts:154](https://github.com/tristanjohnson849/react-controlled-animations/blob/5858e1a/src/components/common.ts#L154)

___

### as

• `Optional` **as**: `T`

The given tag that this Animated element delegates to
Defaults to "div"

#### Defined in

[components/common.ts:141](https://github.com/tristanjohnson849/react-controlled-animations/blob/5858e1a/src/components/common.ts#L141)

___

### currentAnimation

• **currentAnimation**: `A`

The currentAnimation that controls this component.
On changing this prop to a non-null value, will start the animation at animations[currentAnimation]
If given null, will cancel() any current animations
If given a new or null value while the previous aninmation is not finished(), will commit the current style to the element and call onAnimationEnd

#### Defined in

[components/common.ts:149](https://github.com/tristanjohnson849/react-controlled-animations/blob/5858e1a/src/components/common.ts#L149)

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

[components/common.ts:161](https://github.com/tristanjohnson849/react-controlled-animations/blob/5858e1a/src/components/common.ts#L161)
