import { Ref, useEffect, useRef, useState } from 'react';

function useIsHovering<E extends HTMLElement>(): readonly [boolean, Ref<E>] {
    const [value, setValue] = useState(false);
    const ref = useRef<E>(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(() => {
        const el = ref.current;
        if (el) {
            el.addEventListener('mouseover', handleMouseOver);
            el.addEventListener('mouseout', handleMouseOut);
            return () => {
                el.removeEventListener('mouseover', handleMouseOver);
                el.removeEventListener('mouseout', handleMouseOut);
            };
        }
        return undefined;
    }, [ref.current]); // Recall only if ref changes

    return [value, ref];
}

export default useIsHovering;
