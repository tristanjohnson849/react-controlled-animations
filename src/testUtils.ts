import { render, RenderResult } from "@testing-library/react";
import React from "react";

export const isolatedRender = (el: React.ReactElement<any, any>): RenderResult => {
    const { container } = render(React.createElement(
        "div", 
        { id: expect.getState().currentTestName }
    ));
    return render(el, { container });
}

// test.afterEach
export const isolatedCleanup = () => {
    const container = document.getElementById(expect.getState().currentTestName);
    if (container) {
        document.removeChild(container);
    }
}
