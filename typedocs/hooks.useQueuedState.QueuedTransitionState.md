# Interface: QueuedTransitionState<S\>

[hooks/useQueuedState](../wiki/hooks.useQueuedState).QueuedTransitionState

State that supports queueing transitioning

## Type parameters

| Name |
| :------ |
| `S` |

## Table of contents

### Properties

- [current](../wiki/hooks.useQueuedState.QueuedTransitionState#current)
- [enqueue](../wiki/hooks.useQueuedState.QueuedTransitionState#enqueue)
- [transition](../wiki/hooks.useQueuedState.QueuedTransitionState#transition)
- [transitionAll](../wiki/hooks.useQueuedState.QueuedTransitionState#transitionall)

## Properties

### current

• `Readonly` **current**: `S`

Current state value

#### Defined in

[hooks/useQueuedState.ts:10](https://github.com/tristanjohnson849/react-controlled-animations/blob/5534f41/src/hooks/useQueuedState.ts#L10)

___

### enqueue

• `Readonly` **enqueue**: (`action`: `SetStateAction`<`S`\>) => `void`

#### Type declaration

▸ (`action`): `void`

enqueue a state transition

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `SetStateAction`<`S`\> |

##### Returns

`void`

#### Defined in

[hooks/useQueuedState.ts:14](https://github.com/tristanjohnson849/react-controlled-animations/blob/5534f41/src/hooks/useQueuedState.ts#L14)

___

### transition

• `Readonly` **transition**: () => `void`

#### Type declaration

▸ (): `void`

process one queued transition

##### Returns

`void`

#### Defined in

[hooks/useQueuedState.ts:18](https://github.com/tristanjohnson849/react-controlled-animations/blob/5534f41/src/hooks/useQueuedState.ts#L18)

___

### transitionAll

• `Readonly` **transitionAll**: () => `void`

#### Type declaration

▸ (): `void`

process all queued transitions

##### Returns

`void`

#### Defined in

[hooks/useQueuedState.ts:22](https://github.com/tristanjohnson849/react-controlled-animations/blob/5534f41/src/hooks/useQueuedState.ts#L22)
