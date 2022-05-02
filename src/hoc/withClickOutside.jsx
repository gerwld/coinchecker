import React, { useRef, useState } from "react";
import useOutsideClickHide from "../hooks/useOutsideClick";

const withClickOutside = (Component) => {
  return (props) => {
    const [isShow, set] = useState(false);
    const e = useRef(null);
    const i = useRef(null);
    useOutsideClickHide(e, set, i);

    return <Component {...props} refE={e} ignore={i} setShow={set} isShow={isShow} />;
  };
};

export default withClickOutside;
