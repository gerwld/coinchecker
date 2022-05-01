
import { useEffect } from 'react';

export default function useOutsideClickHide(ref, hideElement) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                hideElement(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, hideElement]);
}