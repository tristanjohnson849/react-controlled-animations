# Module: components/Animated

## Table of contents

### Functions

- [default](../wiki/components.Animated#default)

## Functions

### default

▸ **default**<`A`, `T`\>(`props`): `ReactElement`<`any`, `any`\>

Animated allows you to declare animations that will apply to an HTML tag delegate (`as` prop)
These animations are written as a JSON string to the element's data-animations attribute
This component requires an AnimatedRef prop to manage the animations on the tag delegate

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` = `string` | the accepted animation names |
| `T` | extends keyof `IntrinsicElements` = ``"div"`` | the HTML Tag delegate |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`NonHTMLAnimatedProps`](../wiki/components.common.NonHTMLAnimatedProps)<`A`, `T`\> & `Omit`<[`TagHTMLAttributes`](../wiki/components.common#taghtmlattributes)<`T`\>, ``"onAnimationEnd"``\> & { `ref`: [`AnimatedRef`](../wiki/hooks.useAnimatedRef.AnimatedRef)<[`TagHTMLElement`](../wiki/components.common#taghtmlelement)<`T`\>\>  } |

#### Returns

`ReactElement`<`any`, `any`\>

#### Defined in

[components/Animated.tsx:38](https://github.com/tristanjohnson849/react-controlled-animations/blob/ea03579/src/components/Animated.tsx#L38)
