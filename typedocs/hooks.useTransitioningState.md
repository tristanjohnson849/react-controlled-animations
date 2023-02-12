# Module: hooks/useTransitioningState

## Table of contents

### Type Aliases

- [TransitioningState](../wiki/hooks.useTransitioningState#transitioningstate)

### Functions

- [default](../wiki/hooks.useTransitioningState#default)

## Type Aliases

### TransitioningState

Ƭ **TransitioningState**<`S`, `T`\>: readonly [`S`, (`nextState`: `SetStateAction`<`S`\>, `transition`: `T` \| ``null``) => `void`, () => `void`, `T` \| ``null``]

#### Type parameters

| Name | Description |
| :------ | :------ |
| `S` | state type |
| `T` | state transition type |

#### Defined in

[hooks/useTransitioningState.ts:9](https://github.com/tristanjohnson849/react-controlled-animations/blob/7201a09/src/hooks/useTransitioningState.ts#L9)

## Functions

### default

▸ **default**<`S`, `T`\>(): [`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S` \| `undefined`, `T`\>

Hook to useState that animates on transitioning states

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `undefined` | type of state |
| `T` | `unknown` | - |

#### Returns

[`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S` \| `undefined`, `T`\>

[state, animatedStateTransition, elementRef, currentAnimation]

#### Defined in

[hooks/useTransitioningState.ts:35](https://github.com/tristanjohnson849/react-controlled-animations/blob/7201a09/src/hooks/useTransitioningState.ts#L35)

▸ **default**<`S`, `T`\>(`initialState`, `initialTransition?`): [`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S`, `T`\>

State is always a defined S if an initial state is provided

#### Type parameters

| Name |
| :------ |
| `S` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `S` |
| `initialTransition?` | `T` |

#### Returns

[`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S`, `T`\>

#### Defined in

[hooks/useTransitioningState.ts:39](https://github.com/tristanjohnson849/react-controlled-animations/blob/7201a09/src/hooks/useTransitioningState.ts#L39)

▸ **default**<`S`, `T`\>(`initialState`, `initialTransition?`): [`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S` \| `undefined`, `T`\>

Hook to useState that animates on transitioning states

#### Type parameters

| Name | Description |
| :------ | :------ |
| `S` | type of state |
| `T` | - |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `S` |
| `initialTransition?` | `T` |

#### Returns

[`TransitioningState`](../wiki/hooks.useTransitioningState#transitioningstate)<`S` \| `undefined`, `T`\>

[state, animatedStateTransition, elementRef, currentAnimation]

#### Defined in

[hooks/useTransitioningState.ts:40](https://github.com/tristanjohnson849/react-controlled-animations/blob/7201a09/src/hooks/useTransitioningState.ts#L40)
