<<<<<<< HEAD
import React, { useState } from 'react';
import { isolatedCleanup, isolatedRender } from '../testUtils';
import useAnimatedRef from './useAnimatedRef';
import { AnimationInput } from '../AnimationInput';
import { mockAnimationsApi } from 'jsdom-testing-mocks';

import { cleanup } from '@testing-library/react';

mockAnimationsApi();
afterEach(isolatedCleanup);
afterAll(cleanup);
=======
import test, { ExecutionContext } from 'ava';

import React, { useState } from 'react';
import { configureRenderContext, isolatedCleanup, Renderer } from '../testUtils';
import useAnimatedRef from './useAnimatedRef';
import { AnimationInput } from '../AnimationInput';
// import { mockAnimationsApi } from 'jsdom-testing-mocks';

import "global-jsdom/register";
import { cleanup } from '@testing-library/react';

// TODO switch ava to jest to enable mock web animations

// mockAnimationsApi();
test.beforeEach(configureRenderContext(document));
test.afterEach(isolatedCleanup(document));
test.after(cleanup);
>>>>>>> 9a1e3ae (New config and test utils)

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

<<<<<<< HEAD
test('does not animate with null currentAnimation', () => {
    const { getByText } = isolatedRender(<Animated
=======
test('does not animate with null currentAnimation', (t: ExecutionContext<Renderer>) => {
    const { getByText } = t.context.render(<Animated 
>>>>>>> 9a1e3ae (New config and test utils)
        animation={[]}
        onAnimationEnd={() => {}}
    />); 

<<<<<<< HEAD
    expect(getByText('Animator').getAnimations()).toEqual([]);
=======
    t.is(getByText('Animator').getAnimations(), []);
>>>>>>> 9a1e3ae (New config and test utils)
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
