# Module: lib/hooks/useQueuedState

## Table of contents

### Interfaces

- [QueuedTransitionState](../wiki/lib.hooks.useQueuedState.QueuedTransitionState)

### Functions

- [default](../wiki/lib.hooks.useQueuedState#default)

## Functions

### default

▸ **default**<`S`\>(): [`QueuedTransitionState`](../wiki/lib.hooks.useQueuedState.QueuedTransitionState)<`S` \| `undefined`\>

Hook to use a QueuedTransitionState

Useful for queuing state transitions while waiting for a concurrent event (like an animation completion)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `undefined` |

#### Returns

[`QueuedTransitionState`](../wiki/lib.hooks.useQueuedState.QueuedTransitionState)<`S` \| `undefined`\>

QueuedTransitionState

#### Defined in

[lib/hooks/useQueuedState.ts:25](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/hooks/useQueuedState.ts#L25)

▸ **default**<`S`\>(`initialState`): [`QueuedTransitionState`](../wiki/lib.hooks.useQueuedState.QueuedTransitionState)<`S`\>

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

[`QueuedTransitionState`](../wiki/lib.hooks.useQueuedState.QueuedTransitionState)<`S`\>

QueuedTransitionState

#### Defined in

[lib/hooks/useQueuedState.ts:26](https://github.com/tristanjohnson849/react-controlled-animations/blob/699e18a/src/lib/hooks/useQueuedState.ts#L26)
