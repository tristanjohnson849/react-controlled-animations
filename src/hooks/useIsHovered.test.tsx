import {
    cleanup,
    fireEvent,
} from '@testing-library/react';

import useIsHovered from './useIsHovered.js';
import React from 'react';
import { isolatedCleanup, isolatedRender } from '../testUtils.js';

afterEach(isolatedCleanup);
afterAll(cleanup);

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

test('initial state is undefined', () => {
    const { getByTestId } = isolatedRender(<HoverCapture />);

    const capture = getByTestId('hoverCapture');

    expect(capture.innerHTML).toBe('undefined');
});

test('mouseenter results in true', () => {
    const { getByTestId } = isolatedRender(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseEnter(capture);

    expect(capture.innerHTML).toBe('true');
});


test('mouseenter mouseleave results in false', () => {
    const { getByTestId } = isolatedRender(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseEnter(capture);
    fireEvent.mouseLeave(capture);

    expect(capture.innerHTML).toBe('false');
});

test('mouseenter mouseleave mouseenter results in true', () => {
    const { getByTestId } = isolatedRender(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseEnter(capture);
    fireEvent.mouseLeave(capture);
    fireEvent.mouseEnter(capture);

    expect(capture.innerHTML).toBe('true');
});
