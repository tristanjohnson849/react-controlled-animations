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

- [animationOptions](../wiki/components.common.NonHTMLAnimatedProps#animationoptions)
- [animations](../wiki/components.common.NonHTMLAnimatedProps#animations)
- [as](../wiki/components.common.NonHTMLAnimatedProps#as)
- [commitStylesOnEnd](../wiki/components.common.NonHTMLAnimatedProps#commitstylesonend)
- [currentAnimation](../wiki/components.common.NonHTMLAnimatedProps#currentanimation)
- [finishOnInterrupt](../wiki/components.common.NonHTMLAnimatedProps#finishoninterrupt)
- [onAnimationEnd](../wiki/components.common.NonHTMLAnimatedProps#onanimationend)

## Properties

### animationOptions

• `Optional` **animationOptions**: [`AnimationOptions`](../wiki/AnimationInput#animationoptions)

AnimationOptions to be applied to all AnimationInputs in animations.

If a property is defined twice, the property on the specific animation in animations overrides the property in animationOptions

#### Defined in

[components/common.ts:161](https://github.com/tristanjohnson849/react-controlled-animations/blob/3a86756/src/components/common.ts#L161)

___

### animations

• **animations**: `Record`<`A`, [`AnimationInput`](../wiki/AnimationInput#animationinput)\>

The mapping of animationName A to an AnimationInput

#### Defined in

[components/common.ts:154](https://github.com/tristanjohnson849/react-controlled-animations/blob/3a86756/src/components/common.ts#L154)

___

### as

• `Optional` **as**: `T`

The given tag that this Animated element delegates to
Defaults to "div"

#### Defined in

[components/common.ts:141](https://github.com/tristanjohnson849/react-controlled-animations/blob/3a86756/src/components/common.ts#L141)

___

### commitStylesOnEnd

• `Optional` **commitStylesOnEnd**: `boolean`

On every animation end, webAnimation.commitStyles()

Default: true

#### Defined in

[components/common.ts:184](https://github.com/tristanjohnson849/react-controlled-animations/blob/3a86756/src/components/common.ts#L184)

___

### currentAnimation

• **currentAnimation**: `A`

The currentAnimation that controls this component.
On changing this prop to a non-null value, will start the animation at animations[currentAnimation]
If given null, will cancel() any current animations
If given a new or null value while the previous aninmation is not finished(), will commit the current style to the element and call onAnimationEnd

#### Defined in

[components/common.ts:149](https://github.com/tristanjohnson849/react-controlled-animations/blob/3a86756/src/components/common.ts#L149)

___

### finishOnInterrupt

• `Optional` **finishOnInterrupt**: `boolean`

If the currentAnimation is interrupted, webAnimation.finish() instead of webAnimation.cancel()

Default: false

#### Defined in

[components/common.ts:177](https://github.com/tristanjohnson849/react-controlled-animations/blob/3a86756/src/components/common.ts#L177)

___

### onAnimationEnd

• `Optional` **onAnimationEnd**: (`completedAnimationName`: `A`, `webAnimation`: `Animation`) => `void`

#### Type declaration

▸ (`completedAnimationName`, `webAnimation`): `void`

Callback to be called when the animation is finished() or is interrupted by a new animationName

Callback will be called after the declarative end behavior (finishOnInterrupt, commitStylesOnEnd, etc) is run

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `completedAnimationName` | `A` | the name of the animation that is ending |
| `webAnimation` | `Animation` | the Web API Animation that is ending, or null if the animation was not started |

##### Returns

`void`

#### Defined in

[components/common.ts:170](https://github.com/tristanjohnson849/react-controlled-animations/blob/3a86756/src/components/common.ts#L170)
