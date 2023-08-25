
export function useUtil() {
    function scrollToEnd(elementRef) {
        if (elementRef) {
            elementRef.scrollTop = elementRef.scrollHeight;
        }
    }

    return { scrollToEnd }
}
