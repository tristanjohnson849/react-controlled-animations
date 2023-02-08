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

Useful for queuing state transitions while waiting for a concurrent event (like an animation completion)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `undefined` |

#### Returns

[`QueuedTransitionState`](../wiki/hooks.useQueuedState.QueuedTransitionState)<`S` \| `undefined`\>

QueuedTransitionState

#### Defined in

[hooks/useQueuedState.ts:25](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/hooks/useQueuedState.ts#L25)

▸ **default**<`S`\>(`initialState`): [`QueuedTransitionState`](../wiki/hooks.useQueuedState.QueuedTransitionState)<`S`\>

Hook to use a QueuedTransitionState

Useful for queuing state transitions while waiting for a concurrent event (like an animation completion)

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

QueuedTransitionState

#### Defined in

[hooks/useQueuedState.ts:26](https://github.com/tristanjohnson849/react-controlled-animations/blob/c4bddd7/src/lib/hooks/useQueuedState.ts#L26)
