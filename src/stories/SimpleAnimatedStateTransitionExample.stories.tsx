import React, { CSSProperties } from 'react';
import { toTransitionAnimation } from '../animationInputMappers';
import ControlledAnimated from '../components/ControlledAnimated';
import useSimpleTransitioningState from '../hooks/useSimpleTransitioningState';


const textStyle: CSSProperties = {
    background: 'white', 
    padding: '16px', 
    fontFamily: '"Helvetica", "Arial", sans-serif',
    textAlign: 'center',
    verticalAlign: 'middle', 
    borderRadius: '8px'
};

const DURATION = 2000;

const SimpleAnimatedStateTransitionExample: React.FC<{}> = () => {
    const [
        moveCounter,
        startTransition,
        endTransition,
        isTransitioning
    ] = useSimpleTransitioningState<number>(0);
    return (
<div style={{ 
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <ControlledAnimated<'transitioning'>
                currentAnimation={isTransitioning ? 'transitioning' : null}
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
                    transitioning: toTransitionAnimation({
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
                    })
                }}
                >
            🤓
            </ControlledAnimated>
            <div style={textStyle}>
                <div>Moves: {moveCounter}</div>
                <div>Transitioning? {isTransitioning.toString()}</div>
                <button onClick={() => startTransition(prev => prev + 1)}>Move</button>
            </div>
            <div style={{maxWidth: '600px', ...textStyle}}>
                The useSimpleTransitioningState hook lets you easily animate React state changes. 
                Notice that the Move counter is only updated once the animation completes, and that continued clicks on the 'Move' button still count towards the counter.
            </div>
        </div>
    )
}

export default {
    component: SimpleAnimatedStateTransitionExample,
    title: 'Hooks/SimpleAnimatedStateTransitionExample',
};

const Template = args => <SimpleAnimatedStateTransitionExample {...args} />;

export const Primary = Template.bind({});