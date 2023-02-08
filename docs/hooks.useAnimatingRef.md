# Module: hooks/useAnimatingRef

## Table of contents

### Functions

- [default](../wiki/hooks.useAnimatingRef#default)

## Functions

### default

▸ **default**<`A`, `E`\>(`currentAnimation`, `onAnimationEnd?`): `Ref`<`E`\>

Low-level hook to useRef that will animate the ref'd HTML element with the given currentAnimation name

Expects the AnimationsByName<A> to be serialized as a JSON string in the data-animations attribute on the element - see ControlledAnimated!

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `string` | the accepted animation names |
| `E` | extends `HTMLElement`<`E`\> = `HTMLElement` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentAnimation` | `A` | the animation to be applied to the ref'd element |
| `onAnimationEnd?` | (`completedAnimationName`: `A`, `webAnimation`: `Animation`) => `void` | callback to be called when the animation is finished(), or if the animation is interrupted (currentAnimation changes before finishing) |

#### Returns

`Ref`<`E`\>

react Ref to be assigned to the Animated element

#### Defined in

[hooks/useAnimatingRef.ts:15](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/hooks/useAnimatingRef.ts#L15)
