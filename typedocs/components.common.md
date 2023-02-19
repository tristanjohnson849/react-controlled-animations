# Module: components/common

## Table of contents

### Interfaces

- [NonHTMLAnimatedProps](../wiki/components.common.NonHTMLAnimatedProps)

### Type Aliases

- [AnimatedProps](../wiki/components.common#animatedprops)
- [HTMLIntrinsics](../wiki/components.common#htmlintrinsics)
- [TagHTMLAttributes](../wiki/components.common#taghtmlattributes)
- [TagHTMLElement](../wiki/components.common#taghtmlelement)

### Functions

- [mergeRefs](../wiki/components.common#mergerefs)
- [setRef](../wiki/components.common#setref)

## Type Aliases

### AnimatedProps

Ƭ **AnimatedProps**<`A`, `T`\>: [`NonHTMLAnimatedProps`](../wiki/components.common.NonHTMLAnimatedProps)<`A`, `T`\> & `Omit`<[`TagHTMLAttributes`](../wiki/components.common#taghtmlattributes)<`T`\>, ``"onAnimationEnd"``\>

Standard Props for an animated element. Includes the HTMLAttributes for the given Tag delegate, replacing the onAnimationEnd signature

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `string` | the accepted animation names |
| `T` | extends [`HTMLIntrinsics`](../wiki/components.common#htmlintrinsics) = ``"div"`` | the HTML Tag delegate |

#### Defined in

[components/common.ts:54](https://github.com/tristanjohnson849/react-controlled-animations/blob/5f39586/src/components/common.ts#L54)

___

### HTMLIntrinsics

Ƭ **HTMLIntrinsics**: keyof `JSX.IntrinsicElements`

Base HTML Elements

#### Defined in

[components/common.ts:8](https://github.com/tristanjohnson849/react-controlled-animations/blob/5f39586/src/components/common.ts#L8)

___

### TagHTMLAttributes

Ƭ **TagHTMLAttributes**<`T`\>: `HTMLAttributes`<[`TagHTMLElement`](../wiki/components.common#taghtmlelement)<`T`\>\> & `JSX.IntrinsicElements`[`T`] extends `React.DetailedHTMLProps`<infer A, `any`\> ? `A` : `never`

TagHTMLAttributes<"a"> is equivalent to React.AnchorHTMLAttributes<HTMLAnchorElement>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`HTMLIntrinsics`](../wiki/components.common#htmlintrinsics) |

#### Defined in

[components/common.ts:21](https://github.com/tristanjohnson849/react-controlled-animations/blob/5f39586/src/components/common.ts#L21)

___

### TagHTMLElement

Ƭ **TagHTMLElement**<`T`\>: `HTMLElement` & `JSX.IntrinsicElements`[`T`] extends `React.DetailedHTMLProps`<`any`, infer E\> ? `E` : `never`

TagHTMLElement<"a"> is equivalent to HTMLAnchorElement

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`HTMLIntrinsics`](../wiki/components.common#htmlintrinsics) |

#### Defined in

[components/common.ts:13](https://github.com/tristanjohnson849/react-controlled-animations/blob/5f39586/src/components/common.ts#L13)

## Functions

### mergeRefs

▸ **mergeRefs**<`E`\>(`ref1`, `ref2`): (`value`: `E` \| ``null``) => `void`

Useful for tracking both a forwardedRef and a local ref

If both refs are AnimatedRef, returns the first since AnimatedRefs should be unique

#### Type parameters

| Name |
| :------ |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref1` | `ForwardedRef`<`E`\> |
| `ref2` | `ForwardedRef`<`E`\> |

#### Returns

`fn`

a new ref that manages both given refs as one

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `E` \| ``null`` |

##### Returns

`void`

#### Defined in

[components/common.ts:77](https://github.com/tristanjohnson849/react-controlled-animations/blob/5f39586/src/components/common.ts#L77)

___

### setRef

▸ **setRef**<`E`\>(`ref`, `next`): `void`

Helper to update a ref (either CallbackRef or RefObject) to the given next value

#### Type parameters

| Name |
| :------ |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ForwardedRef`<`E`\> |
| `next` | `E` |

#### Returns

`void`

#### Defined in

[components/common.ts:60](https://github.com/tristanjohnson849/react-controlled-animations/blob/5f39586/src/components/common.ts#L60)
