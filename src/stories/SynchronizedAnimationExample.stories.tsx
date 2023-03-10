import React from 'react';
import useTransitioningState from '../hooks/useTransitioningState.js';
import ControlledAnimated from '../components/ControlledAnimated.js';

import { StoryFn } from '@storybook/react';

const allAnimations = ['flying', 'jumping', 'sliding'] as const;
type MyAnimations = typeof allAnimations[number];

const DURATION = 2000;

const SynchronizedAnimationExample: React.FC<{ chosenAnimation: MyAnimations }> = ({ chosenAnimation }) => {
    const [
        moveCounter,
        startTransition,
        endTransition,
        currentAnimation
    ] = useTransitioningState<number, MyAnimations>(0);

    return (
        <ControlledAnimated<'movingBackground'>
            currentAnimation={currentAnimation ? 'movingBackground' : null}
            finishOnInterrupt
            animations={{
                movingBackground: [
                        { backgroundPosition: 0 },
                        { backgroundPosition: '-100vw' },
                    ],
            }}
            animationOptions={{ duration: DURATION, easing: 'ease-in-out' }}
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(66,99,214,1) 50%, rgba(0,212,255,1) 100%)',
            }}
        >
            <ControlledAnimated<MyAnimations>
                currentAnimation={currentAnimation}
                onAnimationEnd={endTransition}
                animations={{
                    flying: [
                        { translate: 0 },
                        { translate: '0 -30vh' },
                        { translate: '0 -28vh' },
                        { translate: '0 -32vh' },
                        { translate: '0 -28vh' },
                        { translate: '0 -32vh' },
                        { translate: 0 },
                    ],
                    jumping: [
                        { scale: 1, translate: 0 },
                        { scale: 1, translate: 0, offset: 0.1 },
                        { scale: '1.1 0.9', translate: 0, offset: 0.15 },
                        { scale: '0.9 1.1', translate: 0, offset: 0.2 },
                        { scale: '0.9 1.1', translate: '0 -18vh', offset: 0.35 },
                        { scale: '0.9 1.1', translate: '0 -20vh', offset: 0.4 },
                        { scale: '0.9 1.1', translate: '0 -18vh', offset: 0.45 },
                        { scale: '0.9 1.1', translate: 0, offset: 0.6 },
                        { scale: '1.1 0.9', translate: 0, offset: 0.65 },
                        { scale: 1, translate: 0, offset: 0.7 },
                        { scale: 1, translate: 0 },
                    ],
                    sliding: [
                        { translate: 0 },
                        { translate: '25vw', offset: 0.2 },
                        { translate: 0 },
                    ]
                }}
                animationOptions={{ duration: DURATION, easing: 'ease-in-out' }}
                style={{
                    width: '100px',
                    height: '100px',
                    fontSize: '48px',
                    margin: '24px',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                }}
            >
                ????
            </ControlledAnimated>
            <div style={{
                background: 'white', padding: '16px', fontFamily: '"Helvetica", "Arial", sans-serif',
                textAlign: 'center',
                verticalAlign: 'middle', borderRadius: '8px'
            }}>
                <div>Moves: {moveCounter}</div>
                <div>Animation: {currentAnimation || "null"}</div>
                <button onClick={() => startTransition(prev => prev + 1, chosenAnimation)}>Move</button>
            </div>
        </ControlledAnimated>
    )
};

export default {
    component: SynchronizedAnimationExample,
    title: 'Components/SynchronizedAnimationExample',
};

const Template: StoryFn<typeof SynchronizedAnimationExample> = args => <SynchronizedAnimationExample {...args} />;

export const Flying = Template.bind({});
Flying.args = {
    chosenAnimation: 'flying',
};
export const Jumping = Template.bind({});
Jumping.args = {
    chosenAnimation: 'jumping'
};

export const Sliding = Template.bind({});
Sliding.args = {
    chosenAnimation: 'sliding'
};
