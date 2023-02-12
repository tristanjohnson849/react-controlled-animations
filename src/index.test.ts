import * as index from './index';

test('all modules exported', () => {
    expect(index.hooks).toBeTruthy();
    expect(index.components).toBeTruthy();
    expect(index.AnimationInput).toBeTruthy();
    expect(index.animationInputMappers).toBeTruthy();
});
