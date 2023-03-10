import { StoryFn } from "@storybook/react";
import React from "react";
import HoverAnimated from '../components/HoverAnimated.js';


const HoverAnimatedExample = () => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(66,99,214,1) 50%, rgba(0,212,255,1) 100%)',
                margin: 0,
                padding: 0
            }}
        >
            <HoverAnimated
                style={{
                    width: '100px',
                    height: '100px',
                    fontSize: '48px',
                    margin: '24px',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    cursor: 'default'
                }}
                animations={{
                    hovering: {
                        keyframes: [
                            { scale: 1 },
                            { scale: 2 }
                        ],
                        options: { iterations: 'Infinity', direction: 'alternate' }
                    },
                    notHovering: [
                        { scale: 1, offset: 1 }
                    ],
                }}
                animationOptions={{ duration: 1000, fill: 'forwards' }}
            >
                🤓
            </HoverAnimated>
            <div style={{ background: 'white', padding: '16px', fontFamily: '"Helvetica", "Arial", sans-serif',
                    textAlign: 'center',
                    verticalAlign: 'middle', borderRadius: '8px' }}>
                ^ Try hovering! ^
            </div>
        </div>
    )
};

export default {
    component: HoverAnimatedExample,
    title: 'Components/HoverAnimatedExample',
};

export const Primary: StoryFn<typeof HoverAnimatedExample> = () => <HoverAnimatedExample />;
