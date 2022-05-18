import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import s from "./Ld.module.css";

const LoaderPending = () => {
  const { isPending } = useSelector(({ app }) => ({
    isPending: app.isGlobalPending,
  }));
  useEffect(() => {
    if (isPending) {
      document.body.classList.add("no-scroll");
    } else document.body.classList.remove("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isPending]);

  return (
    <div className={`${s.pending_block} ${isPending ? s.show_pending : ""}`} id="loader_pending">
      <Loader />
    </div>
  );
};

export default LoaderPending;
