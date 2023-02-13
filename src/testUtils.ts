import { act, render, RenderResult } from '@testing-library/react';
import React from 'react';

export const isolatedRender = (el: React.ReactElement): RenderResult => {
    const { container } = render(React.createElement('div', { id: expect.getState().currentTestName }));
    return render(el, { container });
};

// test.afterEach
export const isolatedCleanup = () => {
    const container = document.getElementById(expect.getState().currentTestName);
    if (container) {
        document.removeChild(container);
    }
};

export interface CurrentPointer<T> {
    current: T;
}

/**
 * Helper to run testing-library-react's `act` and work with the result
 */
export function actAndThen<T>(
    currentPointer: CurrentPointer<T>,
    actBody: ((current: T) => void) | Array<(current: T) => void>,
    then: (updated: T) => void
) {
    if (typeof actBody === 'function') {
        act(() => actBody(currentPointer.current));
    } else {
        for (let frame of actBody) {
            act(() => frame(currentPointer.current));
        }
    }
    then(currentPointer.current);
}
export async function actAndThenAsync<T>(
    currentPointer: CurrentPointer<T>,
    actBody: ((current: T) => Promise<void>) | Array<(current: T) => Promise<void>>,
    then: (updated: T) => Promise<void>
) {
    if (typeof actBody === 'function') {
        await act(async () => await actBody(currentPointer.current));
    } else {
        for (let frame of actBody) {
            await act(async () => await frame(currentPointer.current));
        }
    }
    await then(currentPointer.current);
}
