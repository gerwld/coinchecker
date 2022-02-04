
import React from 'react';
import { useEffect } from 'react';

export default function useOutsideClickHide(ref, hideElement, changeClass) {
    useEffect(() => {
        // Alert if clicked on outside of element
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                hideElement(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, hideElement]);
}