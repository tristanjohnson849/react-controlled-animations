import React, { CSSProperties } from 'react';
import { toTransitionAnimation } from '../animationInputMappers';
import ControlledAnimated from '../components/ControlledAnimated';
import useTransitioningState from '../hooks/useTransitioningState';


const allAnimations = ['flying', 'jumping', 'sliding'] as const;
type MyAnimations = typeof allAnimations[number];

const textStyle: CSSProperties = {
    background: 'white', 
    padding: '16px', 
    fontFamily: '"Helvetica", "Arial", sans-serif',
    textAlign: 'center',
    verticalAlign: 'middle', 
    borderRadius: '8px'
};

const DURATION = 2000;

const AnimatedStateTransitionsExample: React.FC<{ chosenAnimation: MyAnimations}> = ({ chosenAnimation }) => {
    const [
        moveCounter,
        startTransition,
        endTransition,
        currentTransition
    ] = useTransitioningState<number, 'jumping' | 'flying' | 'sliding'>(0);
    return (
        <div style={{ 
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <ControlledAnimated<'jumping' | 'flying' | 'sliding'>
                currentAnimation={currentTransition}
                onAnimationEnd={endTransition}
                style={{
                    width: '100px',
                    height: '100px',
                    fontSize: '48px',
                    margin: '24px',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                }}
                animations={{
                    flying: toTransitionAnimation({
                        keyframes: [
                            { translate: 0 },
                            { translate: '0 -30vh' },
                            { translate: '0 -28vh' },
                            { translate: '0 -32vh' },
                            { translate: '0 -28vh' },
                            { translate: '0 -32vh' },
                            { translate: 0, easing: 'ease-in-out' },
                        ],
                        options: { duration: DURATION }
                    }),
                    jumping: toTransitionAnimation({
                        keyframes: [
                            { translate: 0, scale: 1 },
                            { scale: '1.1 0.9', translate: 0, offset: 0.05 },
                            { scale: '0.9 1.1', translate: 0, offset: 0.1 },
                            { scale: '0.9 1.1', translate: '0 -18vh', offset: 0.45 },
                            { scale: '0.9 1.1', translate: '0 -20vh', offset: 0.5 },
                            { scale: '0.9 1.1', translate: '0 -18vh', offset: 0.55 },
                            { scale: '0.9 1.1', translate: 0, offset: 0.9 },
                            { scale: '1.1 0.9', translate: 0, offset: 0.95 },
                            { scale: 1, translate: 0 },
                        ],
                        options: { duration: DURATION, easing: 'ease-in-out' }
                    }),
                    sliding: toTransitionAnimation({
                        keyframes: [
                            { translate: 0 },
                            { translate: '25vw', offset: 0.2 },
                            { translate: 0 },
                        ],
                        options: { duration: DURATION, easing: 'ease-in-out' }
                    }),
                }}
                >
            🤓
            </ControlledAnimated>
            <div style={textStyle}>
                <div>Moves: {moveCounter}</div>
                <div>Animation: {currentTransition || "null"}</div>
                <button onClick={() => startTransition(prev => prev + 1, chosenAnimation)}>Move</button>
            </div>
            <div style={{maxWidth: '600px', ...textStyle}}>
                The useAnimatedTransitionState hook lets you easily animate React state changes. 
                Notice that the Move counter is only updated once the animation completes, and that continued clicks on the 'Move' button still count towards the counter.
            </div>
        </div>
    )
}

export default {
    component: AnimatedStateTransitionsExample,
    title: 'Hooks/AnimatedStateTransitionsExample',
};

const Template = args => <AnimatedStateTransitionsExample {...args} />;


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
