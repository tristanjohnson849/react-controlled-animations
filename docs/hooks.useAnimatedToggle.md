# Module: hooks/useAnimatedToggle

## Table of contents

### Type Aliases

- [AnimatedToggleState](../wiki/hooks.useAnimatedToggle#animatedtogglestate)
- [ToggleAnimations](../wiki/hooks.useAnimatedToggle#toggleanimations)

### Functions

- [default](../wiki/hooks.useAnimatedToggle#default)

## Type Aliases

### AnimatedToggleState

Ƭ **AnimatedToggleState**<`E`\>: readonly [`boolean`, () => `void`, `Ref`<`E`\>, [`ToggleAnimations`](../wiki/hooks.useAnimatedToggle#toggleanimations) \| ``null``]

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `E` | extends `HTMLElement` | the HTMLElement to be Animated |

#### Defined in

[hooks/useAnimatedToggle.ts:10](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/hooks/useAnimatedToggle.ts#L10)

___

### ToggleAnimations

Ƭ **ToggleAnimations**: ``"togglingOn"`` \| ``"togglingOff"``

#### Defined in

[hooks/useAnimatedToggle.ts:5](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/hooks/useAnimatedToggle.ts#L5)

## Functions

### default

▸ **default**<`E`\>(`initialState?`, `initialanimationName?`): [`AnimatedToggleState`](../wiki/hooks.useAnimatedToggle#animatedtogglestate)<`E`\>

Hook to create a boolean toggle state that animates when toggled

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `E` | extends `HTMLElement`<`E`\> | the Animated HTMLElement |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `initialState` | `boolean` | `false` |  |
| `initialanimationName` | [`ToggleAnimations`](../wiki/hooks.useAnimatedToggle#toggleanimations) | `null` | if provided, will toggle away from initialState when the togglingElementRef is first set |

#### Returns

[`AnimatedToggleState`](../wiki/hooks.useAnimatedToggle#animatedtogglestate)<`E`\>

[isToggled, toggleCallback, togglingElementRef, currentAnimation]

#### Defined in

[hooks/useAnimatedToggle.ts:37](https://github.com/tristanjohnson849/react-controlled-animations/blob/1674950/src/lib/hooks/useAnimatedToggle.ts#L37)
