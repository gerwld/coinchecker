import React, { useEffect } from "react";

export default function useOutsideClickHide(ref, hideElement, ignoreRef) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (ignoreRef && ignoreRef.current) {
          !ignoreRef.current.contains(event.target) && hideElement(false);
        } else {
          hideElement(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, hideElement]);
}
