# Module: components/ControlledAnimated

## Table of contents

### Type Aliases

- [ControlledAnimatedProps](../wiki/components.ControlledAnimated#controlledanimatedprops)

### Functions

- [default](../wiki/components.ControlledAnimated#default)

## Type Aliases

### ControlledAnimatedProps

Ƭ **ControlledAnimatedProps**<`A`, `T`\>: { `currentAnimation`: `A` \| ``null``  } & [`AnimatedProps`](../wiki/components.common#animatedprops)<`A`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `string` |
| `T` | extends [`HTMLIntrinsics`](../wiki/components.common#htmlintrinsics) = ``"div"`` |

#### Defined in

[components/ControlledAnimated.tsx:6](https://github.com/tristanjohnson849/react-controlled-animations/blob/f69f4c7/src/components/ControlledAnimated.tsx#L6)

## Functions

### default

▸ **default**<`A`, `T`\>(`props`): `ReactElement`<`any`, `any`\>

An Animated component that is controlled by the currentAnimation prop
The component may use a different HTML tag delegate via the `as` prop
May accept a ref to forward to the HTML tag delegate. 
Note: forwarding a ref returned from [useAnimatedRef](../wiki/hooks#useanimatedref) may result in undeterministic behavior

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `string` | the accepted animation names |
| `T` | extends keyof `IntrinsicElements` = ``"div"`` | the HTML Tag delegate |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | { `currentAnimation`: `A`  } & [`NonHTMLAnimatedProps`](../wiki/components.common.NonHTMLAnimatedProps)<`A`, `T`\> & `Omit`<[`TagHTMLAttributes`](../wiki/components.common#taghtmlattributes)<`T`\>, ``"onAnimationEnd"``\> & `RefAttributes`<[`TagHTMLElement`](../wiki/components.common#taghtmlelement)<`T`\>\> |

#### Returns

`ReactElement`<`any`, `any`\>

#### Defined in

[components/ControlledAnimated.tsx:62](https://github.com/tristanjohnson849/react-controlled-animations/blob/f69f4c7/src/components/ControlledAnimated.tsx#L62)
