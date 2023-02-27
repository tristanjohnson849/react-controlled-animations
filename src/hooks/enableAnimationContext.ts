import React from 'react';

export interface EnableAnimationContext {
    enabled: boolean;
    setEnabled?: (enabled: boolean) => void;
}

/**
 * React.Context to enable or disable all animations under the Provider.
 *
 * The context is used by {@link  hooks.useAnimatedRef} to immediately end an animation after starting
 */
export const EnableAnimationContext = React.createContext<EnableAnimationContext>({
    enabled: true,
});
