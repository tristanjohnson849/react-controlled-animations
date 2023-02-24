# Module: components/common

## Table of contents

### Interfaces

- [NonHTMLAnimatedProps](../wiki/components.common.NonHTMLAnimatedProps)

### Type Aliases

- [AnimatedProps](../wiki/components.common#animatedprops)
- [HTMLTags](../wiki/components.common#htmltags)
- [TagHTMLElement](../wiki/components.common#taghtmlelement)

### Functions

- [mergeRefs](../wiki/components.common#mergerefs)
- [setRef](../wiki/components.common#setref)

## Type Aliases

### AnimatedProps

Ƭ **AnimatedProps**<`A`, `T`\>: [`NonHTMLAnimatedProps`](../wiki/components.common.NonHTMLAnimatedProps)<`A`, `T`\> & `Omit`<`JSX.IntrinsicElements`[`T`], ``"onAnimationEnd"``\>

Standard Props for an animated element. Includes the HTMLAttributes for the given Tag delegate, replacing the onAnimationEnd signature

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `string` | the accepted animation names |
| `T` | extends [`HTMLTags`](../wiki/components.common#htmltags) = ``"div"`` | the HTML Tag delegate |

#### Defined in

[components/common.ts:169](https://github.com/tristanjohnson849/react-controlled-animations/blob/5858e1a/src/components/common.ts#L169)

___

### HTMLTags

Ƭ **HTMLTags**: ``"a"`` \| ``"abbr"`` \| ``"address"`` \| ``"area"`` \| ``"article"`` \| ``"aside"`` \| ``"audio"`` \| ``"b"`` \| ``"base"`` \| ``"bdi"`` \| ``"bdo"`` \| ``"big"`` \| ``"blockquote"`` \| ``"body"`` \| ``"br"`` \| ``"button"`` \| ``"canvas"`` \| ``"caption"`` \| ``"center"`` \| ``"cite"`` \| ``"code"`` \| ``"col"`` \| ``"colgroup"`` \| ``"data"`` \| ``"datalist"`` \| ``"dd"`` \| ``"del"`` \| ``"details"`` \| ``"dfn"`` \| ``"dialog"`` \| ``"div"`` \| ``"dl"`` \| ``"dt"`` \| ``"em"`` \| ``"embed"`` \| ``"fieldset"`` \| ``"figcaption"`` \| ``"figure"`` \| ``"footer"`` \| ``"form"`` \| ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"`` \| ``"head"`` \| ``"header"`` \| ``"hgroup"`` \| ``"hr"`` \| ``"html"`` \| ``"i"`` \| ``"iframe"`` \| ``"img"`` \| ``"input"`` \| ``"ins"`` \| ``"kbd"`` \| ``"keygen"`` \| ``"label"`` \| ``"legend"`` \| ``"li"`` \| ``"link"`` \| ``"main"`` \| ``"map"`` \| ``"mark"`` \| ``"menu"`` \| ``"menuitem"`` \| ``"meta"`` \| ``"meter"`` \| ``"nav"`` \| ``"noindex"`` \| ``"noscript"`` \| ``"object"`` \| ``"ol"`` \| ``"optgroup"`` \| ``"option"`` \| ``"output"`` \| ``"p"`` \| ``"param"`` \| ``"picture"`` \| ``"pre"`` \| ``"progress"`` \| ``"q"`` \| ``"rp"`` \| ``"rt"`` \| ``"ruby"`` \| ``"s"`` \| ``"samp"`` \| ``"slot"`` \| ``"script"`` \| ``"section"`` \| ``"select"`` \| ``"small"`` \| ``"source"`` \| ``"span"`` \| ``"strong"`` \| ``"style"`` \| ``"sub"`` \| ``"summary"`` \| ``"sup"`` \| ``"table"`` \| ``"template"`` \| ``"tbody"`` \| ``"td"`` \| ``"textarea"`` \| ``"tfoot"`` \| ``"th"`` \| ``"thead"`` \| ``"time"`` \| ``"title"`` \| ``"tr"`` \| ``"track"`` \| ``"u"`` \| ``"ul"`` \| ``"var"`` \| ``"video"`` \| ``"wbr"`` \| ``"webview"``

#### Defined in

[components/common.ts:6](https://github.com/tristanjohnson849/react-controlled-animations/blob/5858e1a/src/components/common.ts#L6)

___

### TagHTMLElement

Ƭ **TagHTMLElement**<`T`\>: `JSX.IntrinsicElements`[`T`] extends `DetailedHTMLProps`<`any`, infer E\> ? `E` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `JSX.IntrinsicElements` |

#### Defined in

[components/common.ts:126](https://github.com/tristanjohnson849/react-controlled-animations/blob/5858e1a/src/components/common.ts#L126)

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

[components/common.ts:192](https://github.com/tristanjohnson849/react-controlled-animations/blob/5858e1a/src/components/common.ts#L192)

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

[components/common.ts:175](https://github.com/tristanjohnson849/react-controlled-animations/blob/5858e1a/src/components/common.ts#L175)
