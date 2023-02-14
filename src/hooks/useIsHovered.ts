import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hook to capture the hovering state of a ref'd HTMLElement
 *
 * Caveat: if ref is pointed at a new element, isHovered will be the last hoverState of the previous element until a mouseOver/Out event happens on the new element
 *
 * @returns [isHovered, elementRef]
 */
function useIsHovered<E extends HTMLElement = HTMLElement>(): readonly [boolean | undefined, RefObject<E>] {
    const [isHovered, setIsHovered] = useState<boolean | undefined>(undefined);
    const ref = useRef<E>(null);
    const hovered = useCallback(() => setIsHovered(true), []);
    const notHovered = useCallback(() => setIsHovered(false), []);

    useEffect(() => {
        const el = ref.current;
        if (el) {
            el.addEventListener('mouseover', hovered);
            el.addEventListener('mouseout', notHovered);
            return () => {
                el.removeEventListener('mouseover', hovered);
                el.removeEventListener('mouseout', notHovered);
            };
        }
    }, [ref.current]); // Recall only if ref changes

    return [isHovered, ref];
}

export default useIsHovered;
