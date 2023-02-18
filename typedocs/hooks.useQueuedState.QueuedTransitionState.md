# Interface: QueuedTransitionState<S\>

[hooks/useQueuedState](../wiki/hooks.useQueuedState).QueuedTransitionState

State that supports asynchronous state transitions
State transitions may be enqueued and then completed in FIFO order via transition or transitionAll

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

[hooks/useQueuedState.ts:11](https://github.com/tristanjohnson849/react-controlled-animations/blob/e2bcfd7/src/hooks/useQueuedState.ts#L11)

___

### enqueue

• `Readonly` **enqueue**: (`action`: `SetStateAction`<`S`\>) => `void`

#### Type declaration

▸ (`action`): `void`

enqueue a state transition - either a literal value or a function (prev) => next

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `SetStateAction`<`S`\> |

##### Returns

`void`

#### Defined in

[hooks/useQueuedState.ts:15](https://github.com/tristanjohnson849/react-controlled-animations/blob/e2bcfd7/src/hooks/useQueuedState.ts#L15)

___

### transition

• `Readonly` **transition**: () => `void`

#### Type declaration

▸ (): `void`

process one queued transition

##### Returns

`void`

#### Defined in

[hooks/useQueuedState.ts:19](https://github.com/tristanjohnson849/react-controlled-animations/blob/e2bcfd7/src/hooks/useQueuedState.ts#L19)

___

### transitionAll

• `Readonly` **transitionAll**: () => `void`

#### Type declaration

▸ (): `void`

process all queued transitions

##### Returns

`void`

#### Defined in

[hooks/useQueuedState.ts:23](https://github.com/tristanjohnson849/react-controlled-animations/blob/e2bcfd7/src/hooks/useQueuedState.ts#L23)
