# Module: components/ControlledAnimated

## Table of contents

### Functions

- [default](../wiki/components.ControlledAnimated#default)

## Functions

### default

▸ **default**<`A`, `T`\>(`props`): `ReactElement`<`any`, `any`\>

An Animated component that is controlled by the currentAnimation prop
The component may use a different HTML tag delegate via the `as` prop
May accept a ref to forward to the HTML tag delegate. 
Note: forwarding a ref returned from [useAnimatedRef](../wiki/hooks#useanimatedref) may result in undeterministic behavior

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `string` | the accepted animation names |
| `T` | extends [`HTMLTags`](../wiki/components.common#htmltags) = ``"div"`` | the HTML Tag delegate |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AnimatedProps`](../wiki/components.common#animatedprops)<`A`, `T`\> |

#### Returns

`ReactElement`<`any`, `any`\>

#### Defined in

[components/ControlledAnimated.tsx:85](https://github.com/tristanjohnson849/react-controlled-animations/blob/da9ca15/src/components/ControlledAnimated.tsx#L85)
