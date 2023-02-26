# Module: hooks/useQueuedState

## Table of contents

### Interfaces

- [QueuedTransitionState](../wiki/hooks.useQueuedState.QueuedTransitionState)

### Functions

- [default](../wiki/hooks.useQueuedState#default)

## Functions

### default

▸ **default**<`S`\>(): [`QueuedTransitionState`](../wiki/hooks.useQueuedState.QueuedTransitionState)<`S` \| `undefined`\>

Hook to use a QueuedTransitionState

Useful for queuing state transitions while waiting for a concurrent event (like an animation completion) before updating state

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `unknown` |

#### Returns

[`QueuedTransitionState`](../wiki/hooks.useQueuedState.QueuedTransitionState)<`S` \| `undefined`\>

QueuedTransitionState

#### Defined in

[hooks/useQueuedState.ts:26](https://github.com/tristanjohnson849/react-controlled-animations/blob/e6f8404/src/hooks/useQueuedState.ts#L26)

▸ **default**<`S`\>(`initialState`): [`QueuedTransitionState`](../wiki/hooks.useQueuedState.QueuedTransitionState)<`S`\>

State is always a defined S if an initial state is provided

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `S` |

#### Returns

[`QueuedTransitionState`](../wiki/hooks.useQueuedState.QueuedTransitionState)<`S`\>

#### Defined in

[hooks/useQueuedState.ts:30](https://github.com/tristanjohnson849/react-controlled-animations/blob/e6f8404/src/hooks/useQueuedState.ts#L30)
