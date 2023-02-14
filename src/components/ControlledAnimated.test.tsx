import React from "react";
import { expectMatchingKeyframes, isolatedRender } from "../testUtils";
import ControlledAnimated from "./ControlledAnimated";
import userEvent from '@testing-library/user-event';


// much of the behavior of ControlledAnimated is dicated by useAnimatedRef and is covered in the hook tests
test('renders as the passed tag with passed tag props', () => {
    const { getByTestId } = isolatedRender(
        <ControlledAnimated<string, 'img'>
            as="img"
            data-testid="element"
            src="https://url.com/img.png"
            alt="animated image" 
            currentAnimation={null}        
        />
    );

    const element = getByTestId('element') as HTMLImageElement;
    expect(element.tagName).toBe('IMG');
    expect(element.src).toBe('https://url.com/img.png');
    expect(element.alt).toBe('animated image');
});

test('if no tag passed, renders as div with passed tag props', () => {
    const { getByTestId } = isolatedRender(
        <ControlledAnimated
            data-testid="element"
            title="animated div"
            currentAnimation={null}
        />
    );

    const element = getByTestId('element') as HTMLDivElement;
    expect(element.tagName).toBe('DIV');
    expect(element.title).toBe('animated div');
});

test('correctly forwards ref', () => {
    const ref = jest.fn()

    const { getByTestId } = isolatedRender(
        <ControlledAnimated
            data-testid="element"
            ref={ref}
            currentAnimation={null}
        />
    );

    const element = getByTestId('element');

    expect(ref).toHaveBeenCalledWith(element);
});

test('animates without forwarded ref', async () => {
    const keyframes = [{ rotate: 0 }, { rotate: '360deg' }];
    const { getByTestId } = isolatedRender(
        <ControlledAnimated<'primary'>
            data-testid="element"
            title="animated div"
            currentAnimation={'primary'}
            animations={{
                primary: keyframes
            }}
        />
    );

    const element = getByTestId('element');
    
    userEvent.hover(element);
    const webAnimation = element.getAnimations()[0];
    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, keyframes);
});

test('animates with forwarded ref', async () => {
    const ref = jest.fn()

    const keyframes = [{ rotate: 0 }, { rotate: '360deg' }];
    const { getByTestId } = isolatedRender(
        <ControlledAnimated<'primary'>
            data-testid="element"
            title="animated div"
            currentAnimation={'primary'}
            animations={{
                primary: keyframes
            }}
            ref={ref}
        />
    );

    const element = getByTestId('element');
    
    userEvent.hover(element);
    const webAnimation = element.getAnimations()[0];
    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, keyframes);

});
