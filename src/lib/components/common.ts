import React from 'react';
import { AnimationInput } from '../AnimationInput';

type PickByType<T, Value> = {
    [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
};

export type HTMLIntrinsics = keyof PickByType<JSX.IntrinsicElements, React.DetailedHTMLProps<any, any>>;

// TagElement<"button"> equivalent to HTMLButtonElement
export type TagElement<T extends HTMLIntrinsics> = 
    JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<any, infer E>
        ? E
        : never;
export type TagAttributes<T extends HTMLIntrinsics> = 
    JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer A, any>
        ? A
        : never;

export type AnimatedProps<A extends string, T extends HTMLIntrinsics = 'div'> = {
    as?: T;
    animations?: Record<A, AnimationInput>;
    onAnimationEnd?: (completedAnimation: A) => void;
} & Omit<TagAttributes<T>, 'onAnimationEnd'>;

export function setRef<E>(ref: React.ForwardedRef<E> | undefined, next: E | null): void {
    if (ref) {
        if (typeof ref === 'function') {
            ref(next);
        } else {
            ref.current = next;
        }
    }
}

export function mergeRefs<E>(
    ref1: React.ForwardedRef<E> | undefined,
    ref2: React.ForwardedRef<E> | undefined
): React.ForwardedRef<E> {
    return (value: E | null) => {
        setRef(ref1, value);
        setRef(ref2, value);
    };
}
