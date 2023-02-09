# Module: lib/components/ControlledAnimated

## Table of contents

### Type Aliases

- [ControlledAnimatedProps](../wiki/lib.components.ControlledAnimated#controlledanimatedprops)

### Functions

- [default](../wiki/lib.components.ControlledAnimated#default)

## Type Aliases

### ControlledAnimatedProps

Ƭ **ControlledAnimatedProps**<`A`, `T`\>: { `currentAnimation`: `A` \| ``null``  } & [`AnimatedProps`](../wiki/lib.components.common#animatedprops)<`A`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `string` |
| `T` | extends [`HTMLIntrinsics`](../wiki/lib.components.common#htmlintrinsics) = ``"div"`` |

#### Defined in

[lib/components/ControlledAnimated.tsx:6](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/components/ControlledAnimated.tsx#L6)

## Functions

### default

▸ **default**<`A`, `T`\>(`props`): `ReactElement`<`any`, `any`\>

An Animated component that is controlled by the currentAnimation prop
The component may be changed to a different HTML tag delegate via the as prop
May accept a ref to forward to the HTML tag delegate

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `string` | the accepted animation names |
| `T` | extends keyof `IntrinsicElements` = ``"div"`` | the HTML Tag delegate |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | { `currentAnimation`: `A`  } & [`NonHTMLAnimatedProps`](../wiki/lib.components.common.NonHTMLAnimatedProps)<`A`, `T`\> & `Omit`<[`TagHTMLAttributes`](../wiki/lib.components.common#taghtmlattributes)<`T`\>, ``"onAnimationEnd"``\> & `RefAttributes`<[`TagHTMLElement`](../wiki/lib.components.common#taghtmlelement)<`T`\>\> |

#### Returns

`ReactElement`<`any`, `any`\>

#### Defined in

[lib/components/ControlledAnimated.tsx:50](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/components/ControlledAnimated.tsx#L50)
