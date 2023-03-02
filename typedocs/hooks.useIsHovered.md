# Module: hooks/useIsHovered

## Table of contents

### Functions

- [default](../wiki/hooks.useIsHovered#default)

## Functions

### default

▸ **default**<`E`\>(): readonly [`boolean` \| `undefined`, `RefObject`<`E`\>]

Hook to capture the hovering state of a ref'd HTMLElement

Note: if the ref is pointed at a new element, isHovered will be the last hoverState of the previous element
until a mouseenter/leave event happens on the new element

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `HTMLElement`<`E`\> = `HTMLElement` |

#### Returns

readonly [`boolean` \| `undefined`, `RefObject`<`E`\>]

[isHovered, elementRef]

#### Defined in

[hooks/useIsHovered.ts:11](https://github.com/tristanjohnson849/react-controlled-animations/blob/c9fdb9a/src/hooks/useIsHovered.ts#L11)
