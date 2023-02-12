import test from 'ava';

import * as index from './index';

test('all modules exported', (t) => {
    t.truthy(index.hooks);
    t.truthy(index.components);
    t.truthy(index.AnimationInput);
    t.truthy(index.animationInputMappers);
});
