import test, { ExecutionContext } from 'ava';

import 'global-jsdom/register';

import {
    render,
    fireEvent,
    cleanup,
    RenderResult
} from '@testing-library/react';

import useIsHovered from './useIsHovered';
import React from 'react';


const isolatedRender = (t: ExecutionContext, el: React.ReactElement<any, any>): RenderResult => {
    const container = document.createElement('div');
    container.id = t.title;

    return render(el, { container });
}

const isolatedCleanup = (t: ExecutionContext) => {
    cleanup();

    const container = document.getElementById(t.title);
    if (container) {
        document.removeChild(container);
    }
}

interface Renderer {
    render: (el: React.ReactElement<any, any>) => RenderResult;
}

test.beforeEach((t: ExecutionContext<Renderer>) => 
    t.context.render = (el: React.ReactElement<any, any>) => isolatedRender(t, el)
);
test.afterEach(isolatedCleanup);

const HoverCapture = () => {
    const [isHovered, ref] = useIsHovered<HTMLDivElement>();
    return (
        <div
            data-testid="hoverCapture"
            ref={ref}
        >
            {isHovered === undefined ? "undefined" : isHovered.toString()}
        </div>
    );
}

test('initial state is undefined', (t: ExecutionContext<Renderer>) => {
    const { getByTestId } = t.context.render(<HoverCapture />);

    const capture = getByTestId('hoverCapture');

    t.is(capture.innerHTML, 'undefined');
    cleanup();
});

test('mouseover results in true', (t: ExecutionContext<Renderer>) => {
    const { getByTestId } = t.context.render(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseOver(capture);

    t.is(capture.innerHTML, 'true');
    cleanup();

});


test('mouseover mouseout results in false', (t: ExecutionContext<Renderer>) => {
    const { getByTestId } = t.context.render(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseOver(capture);
    fireEvent.mouseOut(capture);

    t.is(capture.innerHTML, 'false');
    cleanup();

});

test('mouseover mouseout mouseover results in true', (t: ExecutionContext<Renderer>) => {
    const { getByTestId } = t.context.render(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseOver(capture);
    fireEvent.mouseOut(capture);
    fireEvent.mouseOver(capture);

    t.is(capture.innerHTML, 'true');
    cleanup();

});
