import { render, RenderResult } from "@testing-library/react";

export const isolatedRender = (el: React.ReactElement<any, any>): RenderResult => {
    const container = document.createElement('div');
    container.id = expect.getState().currentTestName;

    return render(el, { container });
}

// test.afterEach
export const isolatedCleanup = () => {
    const container = document.getElementById(expect.getState().currentTestName);
    if (container) {
        document.removeChild(container);
    }
}
