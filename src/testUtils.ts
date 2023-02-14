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
 * Assumes a mutable "current" pointer will be updated by each act() (e.g. RenderHookResult)
 */
export function actAndThen<T>(
    renderResult: CurrentPointer<T>,
    actBody: ((current: T) => void) | Array<(current: T) => void>,
    expectBody: (updated: T) => void
) {
    if (typeof actBody === 'function') {
        act(() => actBody(renderResult.current));
    } else {
        for (const frame of actBody) {
            act(() => frame(renderResult.current));
        }
    }
    expectBody(renderResult.current);
}
export async function actAndThenAsync<T>(
    renderResult: CurrentPointer<T>,
    actBody: ((current: T) => Promise<void>) | Array<(current: T) => Promise<void>>,
    expectBody: (updated: T) => Promise<void>
) {
    if (typeof actBody === 'function') {
        await act(async () => await actBody(renderResult.current));
    } else {
        for (const frame of actBody) {
            await act(async () => await frame(renderResult.current));
        }
    }
    await expectBody(renderResult.current);
}

export function expectEachExtends<T>(actual: T[], expected: Partial<T>[]) {
    expected.forEach((maybeSubset, i) => {
        const maybeSuperset = actual[i];
        expect(maybeSuperset).toMatchObject(maybeSubset);
    });
}

export function expectMatchingKeyframes(webAnimation: Animation, expected: Keyframe[]) {
    expectEachExtends((webAnimation.effect as KeyframeEffect).getKeyframes(), expected);
}
