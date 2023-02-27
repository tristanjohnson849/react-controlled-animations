# Module: hooks/useSimpleTransitioningState

## Table of contents

### Type Aliases

- [SimpleTransitioningState](../wiki/hooks.useSimpleTransitioningState#simpletransitioningstate)

### Functions

- [default](../wiki/hooks.useSimpleTransitioningState#default)

## Type Aliases

### SimpleTransitioningState

Ƭ **SimpleTransitioningState**<`S`\>: readonly [`S`, (`nextState`: `SetStateAction`<`S`\>, `isAsync?`: `boolean`) => `void`, () => `void`, `boolean`]

[state, startTransition, endTransition, isTransitioning]

#### Type parameters

| Name |
| :------ |
| `S` |

#### Defined in

[hooks/useSimpleTransitioningState.ts:8](https://github.com/tristanjohnson849/react-controlled-animations/blob/4fa6b95/src/hooks/useSimpleTransitioningState.ts#L8)

## Functions

### default

▸ **default**<`S`\>(): [`SimpleTransitioningState`](../wiki/hooks.useSimpleTransitioningState#simpletransitioningstate)<`S` \| `undefined`\>

Hook to useState that supports asynchronous transitions

State transitions may be queued via startTransition, and all queued transitions are completed in order by endTransition

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `undefined` | type of state |

#### Returns

[`SimpleTransitioningState`](../wiki/hooks.useSimpleTransitioningState#simpletransitioningstate)<`S` \| `undefined`\>

[state, startTransition, endTransition, isTransitioning]: SimpleTransitioningState<S>

#### Defined in

[hooks/useSimpleTransitioningState.ts:39](https://github.com/tristanjohnson849/react-controlled-animations/blob/4fa6b95/src/hooks/useSimpleTransitioningState.ts#L39)

▸ **default**<`S`\>(`initialState`, `initialTransitioning?`): [`SimpleTransitioningState`](../wiki/hooks.useSimpleTransitioningState#simpletransitioningstate)<`S`\>

State is always a defined S if an initial state is provided

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `S` |
| `initialTransitioning?` | `boolean` |

#### Returns

[`SimpleTransitioningState`](../wiki/hooks.useSimpleTransitioningState#simpletransitioningstate)<`S`\>

#### Defined in

[hooks/useSimpleTransitioningState.ts:43](https://github.com/tristanjohnson849/react-controlled-animations/blob/4fa6b95/src/hooks/useSimpleTransitioningState.ts#L43)
