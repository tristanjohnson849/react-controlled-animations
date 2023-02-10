# Module: hooks/useAnimatedRef

## Table of contents

### Interfaces

- [AnimatedRef](../wiki/hooks.useAnimatedRef.AnimatedRef)

### Functions

- [default](../wiki/hooks.useAnimatedRef#default)
- [isAnimatedRef](../wiki/hooks.useAnimatedRef#isanimatedref)

## Functions

### default

▸ **default**<`A`, `E`\>(`currentAnimation`, `onAnimationEnd?`): [`AnimatedRef`](../wiki/hooks.useAnimatedRef.AnimatedRef)<`E`\>

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

[`AnimatedRef`](../wiki/hooks.useAnimatedRef.AnimatedRef)<`E`\>

react Ref to be assigned to the Animated element

#### Defined in

[hooks/useAnimatedRef.ts:34](https://github.com/tristanjohnson849/react-controlled-animations/blob/35474ce/src/hooks/useAnimatedRef.ts#L34)

___

### isAnimatedRef

▸ **isAnimatedRef**<`E`\>(`ref`): ref is AnimatedRef<E\>

#### Type parameters

| Name |
| :------ |
| `E` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `Ref`<`E`\> | React Ref that is possibly Animated |

#### Returns

ref is AnimatedRef<E\>

#### Defined in

[hooks/useAnimatedRef.ts:18](https://github.com/tristanjohnson849/react-controlled-animations/blob/35474ce/src/hooks/useAnimatedRef.ts#L18)
