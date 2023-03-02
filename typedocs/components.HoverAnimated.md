# Module: components/HoverAnimated

## Table of contents

### Type Aliases

- [HoverAnimatedProps](../wiki/components.HoverAnimated#hoveranimatedprops)
- [HoverAnimations](../wiki/components.HoverAnimated#hoveranimations)

### Functions

- [default](../wiki/components.HoverAnimated#default)

## Type Aliases

### HoverAnimatedProps

Ƭ **HoverAnimatedProps**<`A`, `T`\>: { `currentAnimation?`: `A` \| ``null``  } & `Omit`<[`AnimatedProps`](../wiki/components.common#animatedprops)<[`HoverAnimations`](../wiki/components.HoverAnimated#hoveranimations) \| `A`, `T`\>, ``"currentAnimation"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `string` |
| `T` | extends [`HTMLTags`](../wiki/components.common#htmltags) = ``"div"`` |

#### Defined in

[components/HoverAnimated.tsx:8](https://github.com/tristanjohnson849/react-controlled-animations/blob/1e5bcb3/src/components/HoverAnimated.tsx#L8)

___

### HoverAnimations

Ƭ **HoverAnimations**: ``"hovering"`` \| ``"notHovering"``

#### Defined in

[components/HoverAnimated.tsx:6](https://github.com/tristanjohnson849/react-controlled-animations/blob/1e5bcb3/src/components/HoverAnimated.tsx#L6)

## Functions

### default

▸ **default**<`A`, `T`\>(`props`): `ReactElement`<`any`, `any`\>

An Animated component that will track hover (via mouseenter/mouseleave listeners) and animate based on the corresponding hover state
May accept a ref to forward to the HTML tag delegate
May accept an overriding currentAnimation

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `never` | additional animation names |
| `T` | extends [`HTMLTags`](../wiki/components.common#htmltags) = ``"div"`` | the HTML Tag delegate |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`HoverAnimatedProps`](../wiki/components.HoverAnimated#hoveranimatedprops)<`A`, `T`\> |

#### Returns

`ReactElement`<`any`, `any`\>

#### Defined in

[components/HoverAnimated.tsx:49](https://github.com/tristanjohnson849/react-controlled-animations/blob/1e5bcb3/src/components/HoverAnimated.tsx#L49)
