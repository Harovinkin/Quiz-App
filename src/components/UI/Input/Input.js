import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  const inputType = props.type || "text";
  const htmlFor = `${props.type}-${Math.random()}`;
  const cls = [classes.Input];

  if (true) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      <span>{props.errorMessage}</span>
    </div>
  );
}

export default Input;
