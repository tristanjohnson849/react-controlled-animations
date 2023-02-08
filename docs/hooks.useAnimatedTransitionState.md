# Module: hooks/useAnimatedTransitionState

## Table of contents

### Type Aliases

- [AnimatedTransitionState](../wiki/hooks.useAnimatedTransitionState#animatedtransitionstate)

### Functions

- [default](../wiki/hooks.useAnimatedTransitionState#default)

## Type Aliases

### AnimatedTransitionState

Ƭ **AnimatedTransitionState**<`S`, `A`, `E`\>: readonly [`S`, (`nextState`: `SetStateAction`<`S`\>, `nextAnimationState`: `A` \| ``null``) => `void`, `Ref`<`E`\>, `A` \| ``null``]

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `S` | state type |
| `A` | extends `string` | the accepted animation names |
| `E` | extends `HTMLElement` | the HTMLElement to be Animated |

#### Defined in

[hooks/useAnimatedTransitionState.ts:11](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/hooks/useAnimatedTransitionState.ts#L11)

## Functions

### default

▸ **default**<`S`, `A`, `E`\>(): [`AnimatedTransitionState`](../wiki/hooks.useAnimatedTransitionState#animatedtransitionstate)<`S` \| `undefined`, `A`, `E`\>

Hook to useState that animates on transitioning states

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `undefined` | type of state |
| `A` | extends `string` = `string` | the accepted animation names |
| `E` | extends `HTMLElement`<`E`\> = `HTMLElement` | the Animated HTML element |

#### Returns

[`AnimatedTransitionState`](../wiki/hooks.useAnimatedTransitionState#animatedtransitionstate)<`S` \| `undefined`, `A`, `E`\>

[state, animatedStateTransition, elementRef, currentAnimation]

#### Defined in

[hooks/useAnimatedTransitionState.ts:38](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/hooks/useAnimatedTransitionState.ts#L38)

▸ **default**<`S`, `A`, `E`\>(`initialState`, `initialAnimation?`, `onAnimationEnd?`): [`AnimatedTransitionState`](../wiki/hooks.useAnimatedTransitionState#animatedtransitionstate)<`S`, `A`, `E`\>

Hook to useState that animates on transitioning states

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `S` | type of state |
| `A` | extends `string` = `string` | the accepted animation names |
| `E` | extends `HTMLElement`<`E`\> = `HTMLElement` | the Animated HTML element |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `S` |  |
| `initialAnimation?` | `A` | if provided, will animate when the togglingElementRef is first set. State will remain as initialState when finished() |
| `onAnimationEnd?` | (`completedAnimation`: `A`) => `void` |  |

#### Returns

[`AnimatedTransitionState`](../wiki/hooks.useAnimatedTransitionState#animatedtransitionstate)<`S`, `A`, `E`\>

[state, animatedStateTransition, elementRef, currentAnimation]

#### Defined in

[hooks/useAnimatedTransitionState.ts:43](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/hooks/useAnimatedTransitionState.ts#L43)

▸ **default**<`S`, `A`, `E`\>(`initialState`, `initialAnimation?`, `onAnimationEnd?`): [`AnimatedTransitionState`](../wiki/hooks.useAnimatedTransitionState#animatedtransitionstate)<`S` \| `undefined`, `A`, `E`\>

Hook to useState that animates on transitioning states

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `S` | type of state |
| `A` | extends `string` = `string` | the accepted animation names |
| `E` | extends `HTMLElement`<`E`\> = `HTMLElement` | the Animated HTML element |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `S` |  |
| `initialAnimation?` | `A` | if provided, will animate when the togglingElementRef is first set. State will remain as initialState when finished() |
| `onAnimationEnd?` | (`completedAnimation`: `A`) => `void` |  |

#### Returns

[`AnimatedTransitionState`](../wiki/hooks.useAnimatedTransitionState#animatedtransitionstate)<`S` \| `undefined`, `A`, `E`\>

[state, animatedStateTransition, elementRef, currentAnimation]

#### Defined in

[hooks/useAnimatedTransitionState.ts:48](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/hooks/useAnimatedTransitionState.ts#L48)
