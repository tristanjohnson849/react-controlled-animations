# Module: hooks/useSimpleTransitionState

## Table of contents

### Type Aliases

- [SimpleTransitionState](../wiki/hooks.useSimpleTransitionState#simpletransitionstate)

### Functions

- [default](../wiki/hooks.useSimpleTransitionState#default)

## Type Aliases

### SimpleTransitionState

Ƭ **SimpleTransitionState**<`S`, `E`\>: readonly [`S`, (`nextState`: `SetStateAction`<`S`\>, `animate?`: `boolean`) => `void`, [`AnimatedRef`](../wiki/hooks.useAnimatedRef.AnimatedRef)<`E`\>, `boolean`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `S` |
| `E` | extends `HTMLElement` |

#### Defined in

[hooks/useSimpleTransitionState.ts:6](https://github.com/tristanjohnson849/react-controlled-animations/blob/2b16b7f/src/hooks/useSimpleTransitionState.ts#L6)

## Functions

### default

▸ **default**<`S`, `E`\>(): [`SimpleTransitionState`](../wiki/hooks.useSimpleTransitionState#simpletransitionstate)<`S` \| `undefined`, `E`\>

Hook to useState that animates on transitioning states
This is a simplified version of useAnimatedTransitionState where only one animation is configured for all transitions and is expected to be named 'transition' in AnimationsByName

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `undefined` | type of state |
| `E` | extends `HTMLElement`<`E`\> = `HTMLElement` | the Animated HTML element |

#### Returns

[`SimpleTransitionState`](../wiki/hooks.useSimpleTransitionState#simpletransitionstate)<`S` \| `undefined`, `E`\>

[state, animatedTransitionState, transitioningElementRef, isTransitioning]

#### Defined in

[hooks/useSimpleTransitionState.ts:34](https://github.com/tristanjohnson849/react-controlled-animations/blob/2b16b7f/src/hooks/useSimpleTransitionState.ts#L34)

▸ **default**<`S`, `E`\>(`initialState`, `initialTransitioning?`, `onTransitionEnd?`): [`SimpleTransitionState`](../wiki/hooks.useSimpleTransitionState#simpletransitionstate)<`S`, `E`\>

Hook to useState that animates on transitioning states
This is a simplified version of useAnimatedTransitionState where only one animation is configured for all transitions and is expected to be named 'transition' in AnimationsByName

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `S` | type of state |
| `E` | extends `HTMLElement`<`E`\> = `HTMLElement` | the Animated HTML element |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `S` |  |
| `initialTransitioning?` | `boolean` | if true, will animate when the togglingElementRef is first set. State will remain as initialState when finished() |
| `onTransitionEnd?` | () => `void` |  |

#### Returns

[`SimpleTransitionState`](../wiki/hooks.useSimpleTransitionState#simpletransitionstate)<`S`, `E`\>

[state, animatedTransitionState, transitioningElementRef, isTransitioning]

#### Defined in

[hooks/useSimpleTransitionState.ts:38](https://github.com/tristanjohnson849/react-controlled-animations/blob/2b16b7f/src/hooks/useSimpleTransitionState.ts#L38)
