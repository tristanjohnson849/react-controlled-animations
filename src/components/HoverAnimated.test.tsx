import { fireEvent } from "@testing-library/react";
import React from "react";
import { expectMatchingKeyframes, isolatedRender } from "../testUtils";
import HoverAnimated from "./HoverAnimated";


test('renders as the passed tag with passed tag props', () => {
    const { getByTestId } = isolatedRender(
        <HoverAnimated<string, 'img'>
            as="img"
            src="https://url.com/img.png"
            alt="animated image"
            data-testid="element"
        />
    );

    const element = getByTestId('element') as HTMLImageElement;
    expect(element.tagName).toBe('IMG');
    expect(element.src).toBe('https://url.com/img.png');
    expect(element.alt).toBe('animated image');
});

test('if no tag passed, renders as div with passed tag props', () => {
    const { getByTestId } = isolatedRender(
        <HoverAnimated
            title="animated div"
            data-testid="element"
        />
    );

    const element = getByTestId('element') as HTMLDivElement;
    expect(element.tagName).toBe('DIV');
    expect(element.title).toBe('animated div');
});

test('correctly forwards ref', () => {
    const ref = jest.fn()

    const { getByTestId } = isolatedRender(
        <HoverAnimated
            ref={ref}
            data-testid="element"
        />
    );

    const element = getByTestId('element');

    expect(ref).toHaveBeenCalledWith(element);
});

test('animates hovering', async () => {
    const hoveringKeyframes = [{ rotate: 0 }, { rotate: '360deg' }];
    const { getByTestId } = isolatedRender(
        <HoverAnimated
            data-testid="element"
            animations={{
                hovering: hoveringKeyframes,
                notHovering: [{ rotate: 0 }]
            }}
        />
    );

    const element = getByTestId('element');
    
    fireEvent.mouseOver(element);
    const webAnimation = element.getAnimations()[1];
    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, hoveringKeyframes);
});

test('animates notHovering by default', async () => {
    const notHoveringKeyframes = [{ rotate: '360deg' }, { rotate: 0 }];
    const { getByTestId } = isolatedRender(
        <HoverAnimated
            data-testid="element"
            animations={{
                hovering: [{ rotate: 0 }, { rotate: '360deg' }],
                notHovering: notHoveringKeyframes
            }}
        />
    );
    const element = getByTestId('element');
    
    const webAnimation = element.getAnimations()[0];
    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, notHoveringKeyframes);
});

test('animates notHovering when unhovered', async () => {
    const notHoveringKeyframes = [{ rotate: '360deg' }, { rotate: 0 }];
    const { getByTestId } = isolatedRender(
        <HoverAnimated
            data-testid="element"
            animations={{
                hovering: [{ rotate: 0 }, { rotate: '360deg' }],
                notHovering: notHoveringKeyframes
            }}
        />
    );
    const element = getByTestId('element');
    fireEvent.mouseOver(element);
    fireEvent.mouseOut(element);

    const webAnimation = element.getAnimations()[0];
    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, notHoveringKeyframes);
});

test('currentAnimation overrides hover animation', async () => {
    const overrideKeyframes = [{ translate: 0 },{ translate: '0 50%' },{ translate: '50% 50%' },];
    const { getByTestId } = isolatedRender(
        <HoverAnimated<'override'>
            currentAnimation="override"
            data-testid="element"
            animations={{
                hovering: [{ rotate: 0 }, { rotate: '360deg' }],
                notHovering: [{ rotate: '360deg' }, { rotate: 0 }],
                override: overrideKeyframes
            }}
        />
    );
    const element = getByTestId('element');

    const webAnimation = element.getAnimations()[0];
    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, overrideKeyframes);
});
