import React, { useRef, useState } from "react";
import useOutsideClickHide from "../hooks/useOutsideClick";

const withClickOutside = (Component) => {
  return (props) => {
    const [isShow, set] = useState(false);
    const e = useRef(null);
    useOutsideClickHide(e, set);

    return <Component {...props} refE={e} setShow={set} isShow={isShow} />
  }
}

export default withClickOutside;