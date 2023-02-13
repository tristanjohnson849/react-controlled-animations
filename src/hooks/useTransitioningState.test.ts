import { act, renderHook } from '@testing-library/react-hooks';

import useTransitioningState from './useTransitioningState';

// import useTransitioningState from './useTransitioningState';

// initial state
test('initialState=undefined initialTransition=undefined => get undefined state, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState());
    const [state, , , currentTransition] = result.current;

    expect(state).toBeUndefined();
    expect(currentTransition).toBeNull();
});

test('initialState=defined initialTransition=undefined => get defined state, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState('initial'));
    const [state, , , currentTransition] = result.current;

    expect(state).toBe('initial');
    expect(currentTransition).toBeNull();
});

test('initialState=undefined initialTransition=defined => get undefined state, transition=defined', () => {
    const { result } = renderHook(() => useTransitioningState(undefined, 'initialTransition'));
    const [state, , , currentTransition] = result.current;

    expect(state).toBeUndefined();
    expect(currentTransition).toBe('initialTransition');
});

test('initialState=defined initialTransition=defined => get defined state, transition=defined', () => {
    const { result } = renderHook(() => useTransitioningState('initial', 'initialTransition'));
    const [state, , , currentTransition] = result.current;

    expect(state).toBe('initial');
    expect(currentTransition).toBe('initialTransition');
});

test('initialTransition=defined endTransition => get initial state, transition=null', () => {
    const { result } = renderHook(() => useTransitioningState('initial', 'initialTransition'));

    const [startingState, , endStartingTransition, startingTransition] = result.current;

    expect(startingState).toBe('initial');
    expect(startingTransition).toBe('initialTransition');

    act(() => endStartingTransition());

    const [endingState, , , endingTransition] = result.current;

    expect(endingState).toBe('initial');
    expect(endingTransition).toBeNull();
});

// // active state
// test('transition=null startTransition on null => state=new, transition=null', () => {});

// test('transition=null startTransition on new => state unchanged, transition=new', () => {});

// test('transition=null startTransition on new endTransition => state=new, transition=null', () => {});

// test('transition=null endTransition => no changes', () => {});

// test('transition=defined startTransition on null => state=new, transition=null', () => {});

// test('transition=defined startTransition on new => no changes', () => {});

// test('transition=defined startTransition on same transition diff state => no changes', () => {});

// test('transition=defined startTransition on same transition diff state type=value endTransition => state=last', () => {});

// test('transition=defined startTransition on same transition diff state type=callback endTransition => state=aggregate', () => {});
