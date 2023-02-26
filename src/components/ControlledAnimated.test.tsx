import React from "react";
import { expectMatchingKeyframes, isolatedRender } from '../testUtils.js';
import ControlledAnimated from './ControlledAnimated.js';


// much of the behavior of ControlledAnimated is dicated by useAnimatedRef and is covered in the hook tests
test('renders as the passed tag with passed tag props', () => {
    const { getByTestId } = isolatedRender(
        <ControlledAnimated<string, 'img'>
            as="img"
            data-testid="element"
            src="https://url.com/img.png"
            alt="animated image" 
            currentAnimation={null}
            animations={{}}
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
            animations={{}}
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
            animations={{}}
        />
    );

    const element = getByTestId('element');

    expect(ref).toHaveBeenCalledWith(element);
});

test('animates without forwarded ref', async () => {
    const keyframes = [{ rotate: 0 }, { rotate: '360deg' }];
    const { getByTestId } = isolatedRender(
        <ControlledAnimated<'on'>
            data-testid="element"
            title="animated div"
            currentAnimation="on"
            animations={{
                on: keyframes
            }}
        />
    );

    const element = getByTestId('element');
    
    const webAnimation = element.getAnimations()[0];
    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, keyframes);
});

test('animates with forwarded ref', async () => {
    const ref = jest.fn();

    const keyframes = [{ rotate: 0 }, { rotate: '360deg' }];
    const { getByTestId } = isolatedRender(
        <ControlledAnimated<'on'>
            data-testid="element"
            title="animated div"
            currentAnimation="on"
            animations={{
                on: keyframes
            }}
            ref={ref}
        />
    );

    const element = getByTestId('element');
    
    const webAnimation = element.getAnimations()[0];
    await webAnimation.ready;

    expect(ref).toHaveBeenCalledWith(element);
    expectMatchingKeyframes(webAnimation, keyframes);
});

test('cancel and no finish when interrupted', async () => {
    const keyframes = [{ rotate: 0 }, { rotate: '360deg' }];
    const { getByTestId, rerender } = isolatedRender(
        <ControlledAnimated<'on'>
            currentAnimation="on"
            data-testid="element"
            title="animated div"
            animations={{
                on: keyframes
            }}
            animationOptions={{duration: 1000}}
        />
    );

    const element = getByTestId('element');
    
    const webAnimation = element.getAnimations()[0];
    const finishSpy = jest.spyOn(webAnimation, 'finish');
    const cancelSpy = jest.spyOn(webAnimation, 'cancel');

    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, keyframes);

    rerender(
        <ControlledAnimated<'on'>
            currentAnimation={null}
            data-testid="element"
            title="animated div"
            animations={{
                on: keyframes
            }}
            animationOptions={{duration: 1000}}
        />
    );

    expect(finishSpy).not.toHaveBeenCalled();
    expect(cancelSpy).toHaveBeenCalled();
});

test('calls finish when interrupted and finishOnInterrupt=true', async () => {
    const keyframes = [{ rotate: 0 }, { rotate: '360deg' }];
    const { getByTestId, rerender } = isolatedRender(
        <ControlledAnimated<'on'>
            currentAnimation="on"
            data-testid="element"
            title="animated div"
            animations={{
                on: keyframes
            }}
            animationOptions={{duration: 1000}}
            finishOnInterrupt
        />
    );

    const element = getByTestId('element');
    
    const webAnimation = element.getAnimations()[0];
    const finishSpy = jest.spyOn(webAnimation, 'finish');
    const cancelSpy = jest.spyOn(webAnimation, 'cancel');

    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, keyframes);

    rerender(
        <ControlledAnimated<'on'>
            currentAnimation={null}
            data-testid="element"
            title="animated div"
            animations={{
                on: keyframes
            }}
            animationOptions={{duration: 1000}}
            finishOnInterrupt
        />
    );
    
    expect(finishSpy).toHaveBeenCalled();
    expect(cancelSpy).not.toHaveBeenCalled();
});

test('calls commitStyles on finish', async () => {
    const keyframes = [{ rotate: 0 }, { rotate: '360deg' }];
    const { getByTestId } = isolatedRender(
        <ControlledAnimated<'on'>
            currentAnimation="on"
            data-testid="element"
            title="animated div"
            animations={{
                on: keyframes
            }}
            animationOptions={{duration: 1000}}
        />
    );

    const element = getByTestId('element');
    
    const webAnimation = element.getAnimations()[0];
    const commitStylesSpy = jest.spyOn(webAnimation, 'commitStyles');

    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, keyframes);

    await webAnimation.finished;

    expect(commitStylesSpy).toHaveBeenCalled();
});

test('calls commitStyles when interrupted', async () => {
    const keyframes = [{ rotate: 0 }, { rotate: '360deg' }];
    const { getByTestId, rerender } = isolatedRender(
        <ControlledAnimated<'on'>
            currentAnimation="on"
            data-testid="element"
            title="animated div"
            animations={{
                on: keyframes
            }}
            animationOptions={{duration: 1000}}
        />
    );

    const element = getByTestId('element');
    
    const webAnimation = element.getAnimations()[0];
    const commitStylesSpy = jest.spyOn(webAnimation, 'commitStyles');

    await webAnimation.ready;

    expectMatchingKeyframes(webAnimation, keyframes);

    rerender(
        <ControlledAnimated<'on'>
            currentAnimation={null}
            data-testid="element"
            title="animated div"
            animations={{
                on: keyframes
            }}
        />
    );
    expect(commitStylesSpy).toHaveBeenCalled();
});

// no good way to test no commit styles when flag is false due to jsdom-testing-mocks behavior
