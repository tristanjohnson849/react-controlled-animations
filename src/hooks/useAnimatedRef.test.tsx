import React, { useState } from 'react';
import { isolatedCleanup, isolatedRender } from '../testUtils';
import useAnimatedRef from './useAnimatedRef';
import { AnimationInput } from '../AnimationInput';
import { mockAnimationsApi } from 'jsdom-testing-mocks';

import { cleanup } from '@testing-library/react';

mockAnimationsApi();
afterEach(isolatedCleanup);
afterAll(cleanup);

const Animated = ({ animation, onAnimationEnd }: { 
    animation: AnimationInput, 
    onAnimationEnd: (completedAnimation: 'a', webAnimation: Animation) => void
}) => {
    const [state, setState] = useState(false); 

    const ref = useAnimatedRef<'a', HTMLDivElement>(
        state ? 'a' : null, 
        { a: animation },
        (completedAnimation: 'a', webAnimation: Animation) => {
            setState(false);
            onAnimationEnd(completedAnimation, webAnimation);
        }
    );

    return (
        <div ref={ref}>
            Animator
        </div>
    );
}

test('does not animate with null currentAnimation', () => {
    const { getByText } = isolatedRender(<Animated
        animation={[]}
        onAnimationEnd={() => {}}
    />); 

    expect(getByText('Animator').getAnimations()).toEqual([]);
});

// test('plays animation with valid currentAnimation', t => {

// });

// test('does not animate with missing currentAnimation, calls onAnimationEnd', t => {

// });

// test('does not animate with missing currentAnimation, calls onAnimationEnd', t => {

// });

// test('does not throw with invalid animation, calls onAnimationEnd', t => {

// });

// test('animation ends commits style, calls onAnimationEnd', t => {

// });

// test('animation interrupts commits style, calls onAnimationEnd, play new animation', t => {

// });

// test('animation interrupts null commits style, calls onAnimationEnd, no new animation', t => {

// });
