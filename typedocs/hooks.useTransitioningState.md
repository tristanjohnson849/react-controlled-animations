# Module: hooks/useTransitioningState

## Table of contents

### Type Aliases

- [TransitioningState](../wiki/hooks.useTransitioningState#transitioningstate)

### Functions

- [default](../wiki/hooks.useTransitioningState#default)

## Type Aliases

### TransitioningState

Ƭ **TransitioningState**<`S`, `T`\>: readonly [`S`, (`nextState`: `SetStateAction`<`S`\>, `transition`: `T` \| ``null``) => `void`, () => `void`, `T` \| ``null``]

[state, startTransition, endTransition, currentTransition]

#### Type parameters

| Name | Description |
| :------ | :------ |
| `S` | state type |
| `T` | state transition type |

#### Defined in

[hooks/useTransitioningState.ts:11](https://github.com/tristanjohnson849/react-controlled-animations/blob/5f39586/src/hooks/useTransitioningState.ts#L11)

## Functions

### default

▸ **default**<`S`, `T`\>(): [`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S` \| `undefined`, `T`\>

Hook to useState that supports asynchronous transitions with distinct transition values

State transitions may be queued via startTransition, and all queued transitions are completed in order by endTransition

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `undefined` | type of state |
| `T` | `unknown` | type of transition values |

#### Returns

[`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S` \| `undefined`, `T`\>

[state, startTransition, endTransition, currentTransition]: TransitioningState<S, T>

#### Defined in

[hooks/useTransitioningState.ts:40](https://github.com/tristanjohnson849/react-controlled-animations/blob/5f39586/src/hooks/useTransitioningState.ts#L40)

▸ **default**<`S`, `T`\>(`initialState`, `initialTransition?`): [`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S`, `T`\>

State is always a defined S if an initial state is provided

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `S` |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `S` |
| `initialTransition?` | `T` |

#### Returns

[`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S`, `T`\>

#### Defined in

[hooks/useTransitioningState.ts:44](https://github.com/tristanjohnson849/react-controlled-animations/blob/5f39586/src/hooks/useTransitioningState.ts#L44)

▸ **default**<`S`, `T`\>(`initialState`, `initialTransition?`): [`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S` \| `undefined`, `T`\>

Hook to useState that supports asynchronous transitions with distinct transition values

State transitions may be queued via startTransition, and all queued transitions are completed in order by endTransition

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `S` | type of state |
| `T` | `unknown` | type of transition values |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `S` |  |
| `initialTransition?` | `T` | if provided, initializes the state with currentTransition as initialTransition |

#### Returns

[`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S` \| `undefined`, `T`\>

[state, startTransition, endTransition, currentTransition]: TransitioningState<S, T>

#### Defined in

[hooks/useTransitioningState.ts:45](https://github.com/tristanjohnson849/react-controlled-animations/blob/5f39586/src/hooks/useTransitioningState.ts#L45)
