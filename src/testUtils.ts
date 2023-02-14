import { render, RenderResult } from "@testing-library/react";
<<<<<<< HEAD

export const isolatedRender = (el: React.ReactElement<any, any>): RenderResult => {
    const container = document.createElement('div');
    container.id = expect.getState().currentTestName;
=======
import { ExecutionContext } from "ava";

export interface Renderer {
    render: (el: React.ReactElement<any, any>) => RenderResult;
}

const isolatedRender = (document: Document, t: ExecutionContext, el: React.ReactElement<any, any>): RenderResult => {
    const container = document.createElement('div');
    container.id = t.title;
>>>>>>> 9a1e3ae (New config and test utils)

    return render(el, { container });
}

<<<<<<< HEAD
// test.afterEach
export const isolatedCleanup = () => {
    const container = document.getElementById(expect.getState().currentTestName);
=======
// test.beforeEach
export const configureRenderContext = (document: Document) => (t: ExecutionContext<Renderer>) => 
    t.context.render = (el: React.ReactElement<any, any>) => isolatedRender(document, t, el);

// test.afterEach
export const isolatedCleanup = (document: Document) => (t: ExecutionContext) => {
    const container = document.getElementById(t.title);
>>>>>>> 9a1e3ae (New config and test utils)
    if (container) {
        document.removeChild(container);
    }
}
