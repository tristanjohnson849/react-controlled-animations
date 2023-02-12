import test, { ExecutionContext } from 'ava';

import {
    cleanup,
    fireEvent,
} from '@testing-library/react';

import useIsHovered from './useIsHovered';
import React from 'react';
import { configureRenderContext, isolatedCleanup, Renderer } from '../testUtils';

import "global-jsdom/register";

test.beforeEach(configureRenderContext(document));
test.afterEach(isolatedCleanup(document));
test.after(cleanup);

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
});

test('mouseover results in true', (t: ExecutionContext<Renderer>) => {
    const { getByTestId } = t.context.render(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseOver(capture);

    t.is(capture.innerHTML, 'true');
});


test('mouseover mouseout results in false', (t: ExecutionContext<Renderer>) => {
    const { getByTestId } = t.context.render(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseOver(capture);
    fireEvent.mouseOut(capture);

    t.is(capture.innerHTML, 'false');
});

test('mouseover mouseout mouseover results in true', (t: ExecutionContext<Renderer>) => {
    const { getByTestId } = t.context.render(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseOver(capture);
    fireEvent.mouseOut(capture);
    fireEvent.mouseOver(capture);

    t.is(capture.innerHTML, 'true');
});
