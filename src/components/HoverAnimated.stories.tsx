import React from "react";
import { toPersistedAnimation } from "../animationInputMappers";
import HoverAnimated from "./HoverAnimated";


const HoveringExample = () => {
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
                        options: { iterations: 'Infinity', direction: 'alternate', duration: 1000 }
                    },
                    notHovering: toPersistedAnimation({
                        keyframes: [
                            { scale: 1 }
                        ], 
                        options: { duration: 1000} 
                    })
                    
                }}
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
    component: HoveringExample,
    title: 'Components/HoveringExample',
    parameters: {
        componentSource: {
          url: 'https://raw.githubusercontent.com/tristanjohnson849/react-controlled-animations/main/src/components/HoverAnimated.stories.tsx',
          language: 'typescript',
        }
    },
};

export const Primary: React.FC<{}> = () => <HoveringExample />;
