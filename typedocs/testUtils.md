# Module: testUtils

## Table of contents

### Interfaces

- [CurrentPointer](../wiki/testUtils.CurrentPointer)

### Functions

- [actAndThen](../wiki/testUtils#actandthen)
- [actAndThenAsync](../wiki/testUtils#actandthenasync)
- [expectEachExtends](../wiki/testUtils#expecteachextends)
- [expectMatchingKeyframes](../wiki/testUtils#expectmatchingkeyframes)
- [isolatedCleanup](../wiki/testUtils#isolatedcleanup)
- [isolatedRender](../wiki/testUtils#isolatedrender)

## Functions

### actAndThen

▸ **actAndThen**<`T`\>(`renderResult`, `actBody`, `expectBody`): `void`

Helper to run testing-library-react's `act` and work with the result
Assumes a mutable "current" pointer will be updated by each act() (e.g. RenderHookResult)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderResult` | [`CurrentPointer`](../wiki/testUtils.CurrentPointer)<`T`\> |
| `actBody` | (`current`: `T`) => `void`[] \| (`current`: `T`) => `void` |
| `expectBody` | (`updated`: `T`) => `void` |

#### Returns

`void`

#### Defined in

[testUtils.ts:36](https://github.com/tristanjohnson849/react-controlled-animations/blob/9e840f9/src/testUtils.ts#L36)

___

### actAndThenAsync

▸ **actAndThenAsync**<`T`\>(`renderResult`, `actBody`, `expectBody`): `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderResult` | [`CurrentPointer`](../wiki/testUtils.CurrentPointer)<`T`\> |
| `actBody` | (`current`: `T`) => `Promise`<`void`\>[] \| (`current`: `T`) => `Promise`<`void`\> |
| `expectBody` | (`updated`: `T`) => `Promise`<`void`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[testUtils.ts:50](https://github.com/tristanjohnson849/react-controlled-animations/blob/9e840f9/src/testUtils.ts#L50)

___

### expectEachExtends

▸ **expectEachExtends**<`T`\>(`actual`, `expected`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `T`[] |
| `expected` | `Partial`<`T`\>[] |

#### Returns

`void`

#### Defined in

[testUtils.ts:17](https://github.com/tristanjohnson849/react-controlled-animations/blob/9e840f9/src/testUtils.ts#L17)

___

### expectMatchingKeyframes

▸ **expectMatchingKeyframes**(`webAnimation`, `expected`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `webAnimation` | `Animation` |
| `expected` | `Keyframe`[] |

#### Returns

`void`

#### Defined in

[testUtils.ts:24](https://github.com/tristanjohnson849/react-controlled-animations/blob/9e840f9/src/testUtils.ts#L24)

___

### isolatedCleanup

▸ **isolatedCleanup**(): `void`

#### Returns

`void`

#### Defined in

[testUtils.ts:10](https://github.com/tristanjohnson849/react-controlled-animations/blob/9e840f9/src/testUtils.ts#L10)

___

### isolatedRender

▸ **isolatedRender**(`el`): `RenderResult`<`__module`, `HTMLElement`, `HTMLElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> |

#### Returns

`RenderResult`<`__module`, `HTMLElement`, `HTMLElement`\>

#### Defined in

[testUtils.ts:4](https://github.com/tristanjohnson849/react-controlled-animations/blob/9e840f9/src/testUtils.ts#L4)
