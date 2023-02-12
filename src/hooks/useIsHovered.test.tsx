import {
    cleanup,
    fireEvent,
} from '@testing-library/react';

import useIsHovered from './useIsHovered';
import React from 'react';
import { isolatedCleanup, isolatedRender } from '../testUtils';

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

test('mouseover results in true', () => {
    const { getByTestId } = isolatedRender(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseOver(capture);

    expect(capture.innerHTML).toBe('true');
});


test('mouseover mouseout results in false', () => {
    const { getByTestId } = isolatedRender(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseOver(capture);
    fireEvent.mouseOut(capture);

    expect(capture.innerHTML).toBe('false');
});

test('mouseover mouseout mouseover results in true', () => {
    const { getByTestId } = isolatedRender(<HoverCapture />);

    const capture = getByTestId('hoverCapture');
    fireEvent.mouseOver(capture);
    fireEvent.mouseOut(capture);
    fireEvent.mouseOver(capture);

    expect(capture.innerHTML).toBe('true');
});
