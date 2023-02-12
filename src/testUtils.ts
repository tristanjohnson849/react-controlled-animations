import { render, RenderResult } from '@testing-library/react';
<<<<<<< Updated upstream
import React from 'react';
=======

export const isolatedRender = (el: React.ReactElement<any, any>): RenderResult => {
    const container = document.createElement('div');
    container.id = expect.getState().currentTestName;
>>>>>>> Stashed changes

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
