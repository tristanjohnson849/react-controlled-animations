import React, { useState } from 'react';
import { expectMatchingKeyframes, isolatedCleanup, isolatedRender } from '../testUtils.js';
import useAnimatedRef from './useAnimatedRef.js';
import { AnimationInput } from '../AnimationInput.js';

import { act, cleanup, waitFor } from '@testing-library/react';
import { EnableAnimationContext } from './enableAnimationContext.js';

afterEach(isolatedCleanup);
afterAll(cleanup);

interface AnimatedProps {
    A?: AnimationInput;
    B?: AnimationInput;
    onAnimationEnd: (completedAnimation: 'A' | 'B' | null, webAnimation: Animation | null) => void;
}

const Animated = ({ A = [], B = [], onAnimationEnd }: AnimatedProps) => {
    const [state, setState] = useState<'A' | 'B' | null>(null); 

    const ref = useAnimatedRef<'A' | 'B', HTMLDivElement>(
        state,
        { A, B },
        (completedAnimation: 'A' | 'B' | null, webAnimation: Animation | null) => {
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
            <button onClick={() => setState(null)}>Interrupt</button>
        </div>
    );
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
    const animationInput = { 
        keyframes: [ {opacity: 1 }, { opacity: 0 }, { opacity: 1 } ], 
        options: 200 
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
    expect(webAnimation.effect?.getComputedTiming().duration).toEqual(duration);

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

test('animation ends calls onAnimationEnd', async () => {
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

    await act(async () => {
        await webAnimation.finished;
    });    

    expect(onEnd).toHaveBeenCalledWith('A', webAnimation);
});

test('animation interrupts null calls onAnimationEnd', async () => {
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

    await webAnimation.ready;

    act(() => {
        getByText('Interrupt').click();
    })

    expect(onEnd).toHaveBeenCalledWith('A', webAnimation);
});

test('animation interrupts null, set currentAnimation to same value => first animation is canceled, second plays', async () => {
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
    const firstAnimation = animator.getAnimations()[0];
    const cancelSpy = jest.spyOn(firstAnimation, 'cancel');
    expectMatchingKeyframes(firstAnimation, animationInput.keyframes);

    await firstAnimation.ready;

    act(() => {
        getByText('Interrupt').click();
    })

    expect(onEnd).toHaveBeenCalledWith('A', firstAnimation);

    act(() => {
        getByText('A').click();
    })

    const secondAnimation = animator.getAnimations()[0];

    expectMatchingKeyframes(secondAnimation, animationInput.keyframes);
    expect(secondAnimation).not.toBe(firstAnimation);
    expect(cancelSpy).toHaveBeenCalled();

    await secondAnimation.finished;

    expect(onEnd).toHaveBeenCalledWith('A', secondAnimation);
});

test('animation interrupts calls onAnimationEnd, play new animation', async () => {
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

    await animationA.ready;

    act(() => {
        getByText('B').click();
    })

    const animationB = animator.getAnimations()[1];
    expectMatchingKeyframes(animationB, animationInputB.keyframes);

    expect(onEnd).toHaveBeenCalledWith('A', animationA);

    await act(async () => {
        await animationB.finished;
    });

    expect(onEnd).toHaveBeenCalledWith('B', animationB);
});

test('change current animation definition cancels previous and plays new animation definition', async () => {
    const onEnd = jest.fn();

    const duration = 100;
    const animationInputA1: AnimationInput = { 
        keyframes: [ {opacity: 1 }, { opacity: 0 }, { opacity: 0.5 } ],
        options: { duration }
    };
    const animationInputA2: AnimationInput = { 
        keyframes: [ {translate: 0 }, { translate: '100%' }, { translate: '50%' } ],
        options: { duration }
    };

    const { getByText, rerender } = isolatedRender(<Animated
        A={animationInputA1}
        onAnimationEnd={onEnd}
    />); 
    
    act(() => {
        getByText('A').click();
    })

    const animator = getByText('Animator');
    const animationA1 = animator.getAnimations()[0];
    const cancelSpy = jest.spyOn(animationA1, 'cancel');
    expectMatchingKeyframes(animationA1, animationInputA1.keyframes);

    await animationA1.ready;

    rerender(<Animated
        A={animationInputA2}
        onAnimationEnd={onEnd}
    />)

    expect(cancelSpy).toHaveBeenCalled();
    expect(onEnd).toHaveBeenCalledWith('A', animationA1);

    const animationA2 = animator.getAnimations()[0];
    expectMatchingKeyframes(animationA2, animationInputA2.keyframes);

    await act(async () => {
        await animationA2.finished;
    });

    expect(onEnd).toHaveBeenCalledWith('A', animationA2);
});

test('change other animation definition does not interrupt current animation', async () => {
    const onEnd = jest.fn();

    const duration = 500;
    const animationInputA: AnimationInput = { 
        keyframes: [ {opacity: 1 }, { opacity: 0 }, { opacity: 0.5 } ],
        options: { duration }
    };

    const animationInputB1: AnimationInput = { 
        keyframes: [ {translate: 0 }, { translate: '100%' }, { translate: '50%' } ],
        options: { duration }
    };
    const animationInputB2: AnimationInput = { 
        keyframes: [ {rotate: 0 }, { rotate: '180deg' }, { rotate: 0 } ],
        options: { duration }
    };

    const { getByText, rerender } = isolatedRender(<Animated
        A={animationInputA}
        B={animationInputB1}
        onAnimationEnd={onEnd}
    />); 
    
    act(() => {
        getByText('A').click();
    })

    const animator = getByText('Animator');
    const animationA = animator.getAnimations()[0];
    expectMatchingKeyframes(animationA, animationInputA.keyframes);


    await animationA.ready;

    rerender(<Animated
        A={animationInputA}
        B={animationInputB2}
        onAnimationEnd={onEnd}
    />)

    expectMatchingKeyframes(animator.getAnimations()[0], animationInputA.keyframes);

    expect(onEnd).not.toHaveBeenCalledWith('A', expect.any(Animation));
});


const ContextAnimated = ({initEnabled = true, ...animatedProps}: { initEnabled?: boolean } & AnimatedProps) => {
    const [animationEnabled, setAnimationEnabled] = useState(initEnabled); 

    return (
        <div>
            <EnableAnimationContext.Provider value={{ enabled: animationEnabled }}>
                <Animated {...animatedProps} />
            </EnableAnimationContext.Provider>
            <button onClick={() => setAnimationEnabled(p => !p)}>ChangeEnabled</button>
        </div>
    );
}

test('with EnabledAnimationContext.enabled=false, set currentAnimation => no animation, call onAnimationEnd', async () => {
    const onEnd = jest.fn();

    const duration = 500;
    const animationInputA: AnimationInput = { 
        keyframes: [ {opacity: 1 }, { opacity: 0 }, { opacity: 0.5 } ],
        options: { duration }
    };

    const { getByText } = isolatedRender(<ContextAnimated
        initEnabled={false}
        A={animationInputA}
        onAnimationEnd={onEnd}
    />);

    act(() => {
        getByText('A').click();
    });

    const animator = getByText('Animator');
    expect(animator.getAnimations()).toHaveLength(0);

    expect(onEnd).toHaveBeenCalledWith('A', expect.any(Animation));
});

test('play animation, change EnabledAnimationContext.enabled to false, current animation canceled', async () => {
    const onEnd = jest.fn();

    const duration = 500;
    const animationInputA: AnimationInput = { 
        keyframes: [ {opacity: 1 }, { opacity: 0 }, { opacity: 0.5 } ],
        options: { duration }
    };

    const { getByText } = isolatedRender(<ContextAnimated
        A={animationInputA}
        onAnimationEnd={onEnd}
    />);

    act(() => {
        getByText('A').click();
    });

    const animator = getByText('Animator');
    const animationA = animator.getAnimations()[0];
    const cancelSpy = jest.spyOn(animationA, 'cancel');
    expectMatchingKeyframes(animationA, animationInputA.keyframes);

    await animationA.ready;

    act(() => {
        getByText('ChangeEnabled').click();
    });

    expect(cancelSpy).toHaveBeenCalled();
    expect(animator.getAnimations()).toHaveLength(0);
    expect(onEnd).toHaveBeenCalledWith('A', expect.any(Animation));
});
