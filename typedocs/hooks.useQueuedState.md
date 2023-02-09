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

[hooks/useQueuedState.ts:25](https://github.com/tristanjohnson849/react-controlled-animations/blob/1a5aaaa/src/hooks/useQueuedState.ts#L25)

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

[hooks/useQueuedState.ts:29](https://github.com/tristanjohnson849/react-controlled-animations/blob/1a5aaaa/src/hooks/useQueuedState.ts#L29)
