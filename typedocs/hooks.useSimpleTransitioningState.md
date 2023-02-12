# Module: hooks/useSimpleTransitioningState

## Table of contents

### Type Aliases

- [SimpleTransitioningState](../wiki/hooks.useSimpleTransitioningState#simpletransitioningstate)

### Functions

- [default](../wiki/hooks.useSimpleTransitioningState#default)

## Type Aliases

### SimpleTransitioningState

Ƭ **SimpleTransitioningState**<`S`\>: readonly [`S`, (`nextState`: `SetStateAction`<`S`\>, `transition?`: `boolean`) => `void`, () => `void`, `boolean`]

#### Type parameters

| Name |
| :------ |
| `S` |

#### Defined in

[hooks/useSimpleTransitioningState.ts:5](https://github.com/tristanjohnson849/react-controlled-animations/blob/2fcbb59/src/hooks/useSimpleTransitioningState.ts#L5)

## Functions

### default

▸ **default**<`S`\>(): [`SimpleTransitioningState`](../wiki/hooks.useSimpleTransitioningState#simpletransitioningstate)<`S` \| `undefined`\>

Hook to useState that animates on transitioning states
This is a simplified version of useAnimatedTransitionState where only one animation is configured for all transitions and is expected to be named 'transition' in AnimationsByName

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `undefined` | type of state |

#### Returns

[`SimpleTransitioningState`](../wiki/hooks.useSimpleTransitioningState#simpletransitioningstate)<`S` \| `undefined`\>

[state, animatedTransitionState, transitioningElementRef, isTransitioning]

#### Defined in

[hooks/useSimpleTransitioningState.ts:33](https://github.com/tristanjohnson849/react-controlled-animations/blob/2fcbb59/src/hooks/useSimpleTransitioningState.ts#L33)

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

[hooks/useSimpleTransitioningState.ts:37](https://github.com/tristanjohnson849/react-controlled-animations/blob/2fcbb59/src/hooks/useSimpleTransitioningState.ts#L37)
