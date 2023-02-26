import React from 'react';

interface EnableAnimationContext {
    enabled: boolean;
    setEnabled?: (enabled: boolean) => void;
}

export const EnableAnimationContext = React.createContext<EnableAnimationContext>({
    enabled: true,
});
