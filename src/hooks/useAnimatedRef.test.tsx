import React, { useState } from 'react';
import { isolatedCleanup, isolatedRender } from '../testUtils';
import useAnimatedRef from './useAnimatedRef';
import { AnimationInput } from '../AnimationInput';

import { act, cleanup, waitFor } from '@testing-library/react';

afterEach(isolatedCleanup);
afterAll(cleanup);

const Animated = ({ A = [], B = [], onAnimationEnd }: { 
    A?: AnimationInput, 
    B?: AnimationInput,
    onAnimationEnd: (completedAnimation: 'A', webAnimation: Animation) => void
}) => {
    const [state, setState] = useState<'A' | 'B' | null>(null); 

    const ref = useAnimatedRef<'A' | 'B', HTMLDivElement>(
        state,
        { A, B },
        (completedAnimation: 'A', webAnimation: Animation) => {
            onAnimationEnd(completedAnimation, webAnimation);
        }
    );

    return (
        <div>
            <div ref={ref}>
                Animator
            </div>
            <button onClick={() => setState('A')}>A</button>
            <button onClick={() => setState('B')}>B</button>
            <button onClick={() => setState(null)}>Cancel</button>
        </div>
    );
}

function expectEachExtends<T>(actual: T[], expected: Partial<T>[]) {
    expected.forEach((maybeSubset, i) => {
        const maybeSuperset = actual[i];
        expect(maybeSuperset).toMatchObject(maybeSubset);
    });
};

function expectMatchingKeyframes(webAnimation: Animation, expected: Keyframe[]) {
    expectEachExtends((webAnimation.effect as KeyframeEffect).getKeyframes(), expected);
}

test('does not animate with null currentAnimation, calls onAnimationEnd', () => {
    const onEnd = jest.fn();

    const { getByText } = isolatedRender(<Animated
        onAnimationEnd={onEnd}
    />); 

    expect(getByText('Animator').getAnimations()).toEqual([]);

    expect(onEnd).toHaveBeenCalledWith(null, null);
});

test('plays animation with keyframes type currentAnimation', async () => {
    const animationInput: AnimationInput = [ {opacity: 1 }, { opacity: 0 }, { opacity: 1, offset: 0.1 } ];
    const { getByText } = isolatedRender(<Animated
        A={animationInput}
        onAnimationEnd={() => {}}
    />); 
    
    act(() => {
        getByText('A').click();
    })

    const animator = getByText('Animator');
    const webAnimation = animator.getAnimations()[0];
    expectMatchingKeyframes(webAnimation, animationInput);

    await webAnimation.ready;
    
    await waitFor(() => {
        expect(animator).not.toBeVisible();
    });

    await waitFor(() => {
        expect(animator).toBeVisible();
    });
});

test('plays animation with object type currentAnimation', async () => {
    const duration = 200;
    const animationInput: AnimationInput = { 
        keyframes: [ {opacity: 1 }, { opacity: 0 }, { opacity: 1 } ],
        options: { duration, iterations: 2 }
    };
    const { getByText } = isolatedRender(<Animated
        A={animationInput}
        onAnimationEnd={() => {}}
    />); 
    
    act(() => {
        getByText('A').click();
    })

    const animator = getByText('Animator');
    const webAnimation = animator.getAnimations()[0];
    expectMatchingKeyframes(webAnimation, animationInput.keyframes);
    expect(webAnimation.effect.getComputedTiming().duration).toEqual(duration);

    await webAnimation.ready;
    
    await waitFor(() => {
        expect(animator).not.toBeVisible();
    });

    await waitFor(() => {
        expect(animator).toBeVisible();
    });
});

test('does not throw with invalid animation, calls onAnimationEnd', async () => {
    const onEnd = jest.fn();
    const animationInput: AnimationInput = [ {opacity: 1, offset: 0.2 }, { opacity: 0, offset: 0.1 } ];
    const { getByText } = isolatedRender(<Animated
        A={animationInput}
        onAnimationEnd={onEnd}
    />); 
    
    act(() => {
        getByText('A').click();
    });
    expect(getByText('Animator').getAnimations()).toEqual([]);

    expect(onEnd).toHaveBeenCalledWith('A', null);
    expect(onEnd).toHaveBeenCalledWith(null, null);
});

test('animation ends commits style, calls onAnimationEnd', async () => {
    const onEnd = jest.fn();

    const animationInput: AnimationInput = { 
        keyframes: [ {opacity: 1 }, { opacity: 0 }, { opacity: 0.5 } ],
        options: { duration: 100 }
    };
    const { getByText } = isolatedRender(<Animated
        A={animationInput}
        onAnimationEnd={onEnd}
    />); 
    
    act(() => {
        getByText('A').click();
    })

    const animator = getByText('Animator');
    const webAnimation = animator.getAnimations()[0];

    // mock lib doesn't correctly commit styles, have to rely on spying rather than checking style values
    const spy = jest.spyOn(webAnimation, 'commitStyles');

    await act(async () => {
        await webAnimation.finished;
    });    

    expect(onEnd).toHaveBeenCalledWith('A', webAnimation);
    expect(spy).toHaveBeenCalled();
});

test('animation interrupts null commits style, calls onAnimationEnd, no new animation', async () => {
    const onEnd = jest.fn();

    const duration = 100;
    const animationInput: AnimationInput = { 
        keyframes: [ {opacity: 1 }, { opacity: 0 }, { opacity: 0.5 } ],
        options: { duration }
    };

    const { getByText } = isolatedRender(<Animated
        A={animationInput}
        onAnimationEnd={onEnd}
    />); 
    
    act(() => {
        getByText('A').click();
    })

    const animator = getByText('Animator');
    const webAnimation = animator.getAnimations()[0];
    expectMatchingKeyframes(webAnimation, animationInput.keyframes);

    const spy = jest.spyOn(webAnimation, 'commitStyles');
    await webAnimation.ready;

    act(() => {
        getByText('Cancel').click();
    })

    expect(onEnd).toHaveBeenCalledWith('A', webAnimation);
    expect(spy).toHaveBeenCalled();

    expect(animator.getAnimations()).toEqual([]);
    expect(onEnd).toHaveBeenCalledWith(null, null);
    expect(spy).toHaveBeenCalled();
});

test('animation interrupts commits style, calls onAnimationEnd, play new animation', async () => {
    const onEnd = jest.fn();

    const duration = 100;
    const animationInputA: AnimationInput = { 
        keyframes: [ {opacity: 1 }, { opacity: 0 }, { opacity: 0.5 } ],
        options: { duration }
    };
    const animationInputB: AnimationInput = { 
        keyframes: [ {translate: 0 }, { translate: '100%' }, { translate: '50%' } ],
        options: { duration }
    };

    const { getByText } = isolatedRender(<Animated
        A={animationInputA}
        B={animationInputB}
        onAnimationEnd={onEnd}
    />); 
    
    act(() => {
        getByText('A').click();
    })

    const animator = getByText('Animator');
    const animationA = animator.getAnimations()[0];
    expectMatchingKeyframes(animationA, animationInputA.keyframes);

    const spy = jest.spyOn(animationA, 'commitStyles');
    await animationA.ready;

    act(() => {
        getByText('B').click();
    })

    expect(animator.getAnimations()).toHaveLength(1);
    const animationB = animator.getAnimations()[0];
    expectMatchingKeyframes(animationB, animationInputB.keyframes);

    expect(onEnd).toHaveBeenCalledWith('A', animationA);
    expect(spy).toHaveBeenCalled();

    await act(async () => {
        await animationB.finished;
    });

    expect(onEnd).toHaveBeenCalledWith('B', animationB);
    expect(spy).toHaveBeenCalled();
});
