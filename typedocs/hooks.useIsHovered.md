# Module: hooks/useIsHovered

## Table of contents

### Functions

- [default](../wiki/hooks.useIsHovered#default)

## Functions

### default

▸ **default**<`E`\>(): readonly [`boolean` \| `undefined`, `Ref`<`E`\>]

Hook to capture the hovering state of a ref'd HTMLElement

Caveat: if ref is pointed at a new element, isHovered will be the last hoverState of the previous element until a mouseOver/Out event happens on the new element

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `HTMLElement`<`E`\> = `HTMLElement` |

#### Returns

readonly [`boolean` \| `undefined`, `Ref`<`E`\>]

[isHovered, elementRef]

#### Defined in

[hooks/useIsHovered.ts:10](https://github.com/tristanjohnson849/react-controlled-animations/blob/7201a09/src/hooks/useIsHovered.ts#L10)
