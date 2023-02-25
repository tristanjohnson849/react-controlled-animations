# Module: hooks/useAnimatedRef

## Table of contents

### Functions

- [default](../wiki/hooks.useAnimatedRef#default)

## Functions

### default

▸ **default**<`A`, `E`\>(`currentAnimation`, `animations`, `onAnimationEnd?`): `RefObject`<`E`\>

Low-level hook  that will animate the ref'd HTML element with the given currentAnimation name

Note: will interrupt and play a new animation if the animations stored at data-animations change and the Component using this hook is rerendered

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `string` | the accepted animation names |
| `E` | extends `HTMLElement`<`E`\> = `HTMLElement` | the type of element to be ref'd |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentAnimation` | `A` | On changing to a non-null value, will start the animation at animations[currentAnimation]. If given null, will cancel() any current animations If given a new or null value while the previous aninmation is not finished(), will commit the current style to the element and call onAnimationEnd |
| `animations` | `Record`<`A`, [`AnimationInput`](../wiki/AnimationInput#animationinput)\> | The mapping of animationName to AnimationInput |
| `onAnimationEnd?` | (`completedAnimationName`: `A`, `webAnimation`: `Animation`) => `void` | callback to be called when the animation is finished(), or if the animation is interrupted by a new currentAnimation |

#### Returns

`RefObject`<`E`\>

react Ref to be assigned to the Animated element

#### Defined in

[hooks/useAnimatedRef.ts:20](https://github.com/tristanjohnson849/react-controlled-animations/blob/ac9e16e/src/hooks/useAnimatedRef.ts#L20)
