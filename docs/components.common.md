# Module: components/common

## Table of contents

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

Ƭ **AnimatedProps**<`A`, `T`\>: `NonHTMLAnimatedProps`<`A`\> & `Omit`<[`TagHTMLAttributes`](../wiki/components.common#taghtmlattributes)<`T`\>, ``"onAnimationEnd"``\>

Standard Props for an animated element. Includes the HTMLAttributes for the given Tag delegate, replacing the onAnimationEnd signature

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `string` | the accepted animation names |
| `T` | extends [`HTMLIntrinsics`](../wiki/components.common#htmlintrinsics) = ``"div"`` | the HTML Tag delegate |

#### Defined in

[components/common.ts:62](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/components/common.ts#L62)

___

### HTMLIntrinsics

Ƭ **HTMLIntrinsics**: keyof `PickByType`<`JSX.IntrinsicElements`, `React.DetailedHTMLProps`<`any`, `any`\>\>

"a", "abbr", ..., "div", ... "webview"
Excludes tags that extend React.SVGProps

#### Defined in

[components/common.ts:14](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/components/common.ts#L14)

___

### TagHTMLAttributes

Ƭ **TagHTMLAttributes**<`T`\>: `JSX.IntrinsicElements`[`T`] extends `React.DetailedHTMLProps`<infer A, `any`\> ? `A` : `never`

TagHTMLAttributes<"a"> is equivalent to React.AnchorHTMLAttributes<HTMLAnchorElement>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`HTMLIntrinsics`](../wiki/components.common#htmlintrinsics) |

#### Defined in

[components/common.ts:30](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/components/common.ts#L30)

___

### TagHTMLElement

Ƭ **TagHTMLElement**<`T`\>: `JSX.IntrinsicElements`[`T`] extends `React.DetailedHTMLProps`<`any`, infer E\> ? `E` : `never`

TagHTMLElement<"button"> is equivalent to HTMLButtonElement

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`HTMLIntrinsics`](../wiki/components.common#htmlintrinsics) |

#### Defined in

[components/common.ts:19](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/components/common.ts#L19)

## Functions

### mergeRefs

▸ **mergeRefs**<`E`\>(`ref1`, `ref2`): `React.ForwardedRef`<`E`\>

Useful for tracking both a forwardedRef and a local ref

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

`React.ForwardedRef`<`E`\>

a new ref that manages both given refs as one

#### Defined in

[components/common.ts:83](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/components/common.ts#L83)

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

[components/common.ts:68](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/components/common.ts#L68)
