# Module: lib/hooks/useAnimatingRef

## Table of contents

### Functions

- [default](../wiki/lib.hooks.useAnimatingRef#default)

## Functions

### default

▸ **default**<`A`, `E`\>(`currentAnimation`, `onAnimationEnd?`): `Ref`<`E`\>

Low-level hook to useRef that will animate the ref'd HTML element with the given currentAnimation name

Expects the AnimationsByName<A> to be serialized as a JSON string in the data-animations attribute on the element - see ControlledAnimated!

Note: will interrupt and play a new animation if the animations stored at data-animations change and the Component using this hook is rerendered

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

[lib/hooks/useAnimatingRef.ts:17](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/hooks/useAnimatingRef.ts#L17)
