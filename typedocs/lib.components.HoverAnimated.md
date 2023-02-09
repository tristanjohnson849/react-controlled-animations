# Module: lib/components/HoverAnimated

## Table of contents

### Type Aliases

- [HoverAnimations](../wiki/lib.components.HoverAnimated#hoveranimations)

### Functions

- [default](../wiki/lib.components.HoverAnimated#default)

## Type Aliases

### HoverAnimations

Ƭ **HoverAnimations**: ``"hovering"`` \| ``"notHovering"``

#### Defined in

[lib/components/HoverAnimated.tsx:6](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/components/HoverAnimated.tsx#L6)

## Functions

### default

▸ **default**<`A`, `T`\>(`props`): `ReactElement`<`any`, `any`\>

An Animated component that will track hover (via mouseenter/mouseleave listeners) and change animations to the corresponding hover state
May accept a ref to forward to the HTML tag delegate

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `never` | the additional animation names; default = never makes the default animation names exactly [HoverAnimations](../wiki/lib.components.HoverAnimated#hoveranimations) |
| `T` | extends keyof `IntrinsicElements` = ``"div"`` | the HTML Tag delegate |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`NonHTMLAnimatedProps`](../wiki/lib.components.common.NonHTMLAnimatedProps)<[`HoverAnimations`](../wiki/lib.components.HoverAnimated#hoveranimations) \| `A`, `T`\> & `Omit`<[`TagHTMLAttributes`](../wiki/lib.components.common#taghtmlattributes)<`T`\>, ``"onAnimationEnd"``\> & `RefAttributes`<[`TagHTMLElement`](../wiki/lib.components.common#taghtmlelement)<`T`\>\> |

#### Returns

`ReactElement`<`any`, `any`\>

#### Defined in

[lib/components/HoverAnimated.tsx:29](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/components/HoverAnimated.tsx#L29)
