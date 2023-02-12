import { render, RenderResult } from "@testing-library/react";
import { ExecutionContext } from "ava";

export interface Renderer {
    render: (el: React.ReactElement<any, any>) => RenderResult;
}

const isolatedRender = (document: Document, t: ExecutionContext, el: React.ReactElement<any, any>): RenderResult => {
    const container = document.createElement('div');
    container.id = t.title;

    return render(el, { container });
}

// test.beforeEach
export const configureRenderContext = (document: Document) => (t: ExecutionContext<Renderer>) => 
    t.context.render = (el: React.ReactElement<any, any>) => isolatedRender(document, t, el);

// test.afterEach
export const isolatedCleanup = (document: Document) => (t: ExecutionContext) => {
    const container = document.getElementById(t.title);
    if (container) {
        document.removeChild(container);
    }
}
