# Module: components/HoverAnimated

## Table of contents

### Type Aliases

- [HoverAnimations](../wiki/components.HoverAnimated#hoveranimations)

### Functions

- [default](../wiki/components.HoverAnimated#default)

## Type Aliases

### HoverAnimations

Ƭ **HoverAnimations**: ``"hovering"`` \| ``"notHovering"``

#### Defined in

[components/HoverAnimated.tsx:6](https://github.com/tristanjohnson849/react-controlled-animations/blob/f69f4c7/src/components/HoverAnimated.tsx#L6)

## Functions

### default

▸ **default**<`A`, `T`\>(`props`): `ReactElement`<`any`, `any`\>

An Animated component that will track hover (via mouseenter/mouseleave listeners) and animate based on the corresponding hover state
May accept a ref to forward to the HTML tag delegate
May accept an overriding currentAnimation

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `never` | the additional animation names; default = never makes the default animation names exactly components.HoverAnimations |
| `T` | extends keyof `IntrinsicElements` = ``"div"`` | the HTML Tag delegate |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | { `currentAnimation?`: `A`  } & [`NonHTMLAnimatedProps`](../wiki/components.common.NonHTMLAnimatedProps)<[`HoverAnimations`](../wiki/components.HoverAnimated#hoveranimations) \| `A`, `T`\> & `Omit`<[`TagHTMLAttributes`](../wiki/components.common#taghtmlattributes)<`T`\>, ``"onAnimationEnd"``\> & `RefAttributes`<[`TagHTMLElement`](../wiki/components.common#taghtmlelement)<`T`\>\> |

#### Returns

`ReactElement`<`any`, `any`\>

#### Defined in

[components/HoverAnimated.tsx:49](https://github.com/tristanjohnson849/react-controlled-animations/blob/f69f4c7/src/components/HoverAnimated.tsx#L49)
