import React, { useEffect, useState } from "react";
import { Field } from "react-final-form";
import s from "./Trans.module.css";

const FeeNotes = ({ isFee, setFee, setAnim }) => {
  const [isAnim, setIsAnim] = useState(false);
  useEffect(() => {
    setIsAnim(true);
    setTimeout(() => setIsAnim(false), 300);
  }, [setAnim]);

  return (
    <div className={`${s.feenotes} ${isAnim ? s.set_anim : ""}`}>
      <div className={`${s.content} ${isFee ? s.open : ""}`} aria-expanded={isFee}>
        <div>
          <label>Fees</label>
          <div className={s.price_field}>
            <Field name="fees" component="input" autoComplete="new-password" autoComplete="off" placeholder="0" />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <Field name="notes" component="input" autoComplete="new-password" autoComplete="off" placeholder="" />
        </div>
      </div>
      <button onClick={setFee} type="button">
        {isFee ? "-" : "+"} Fee & Notes <span>(Optional)</span>
      </button>
    </div>
  );
};

export default FeeNotes;
