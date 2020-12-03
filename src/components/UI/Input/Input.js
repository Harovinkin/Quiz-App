import React from "react";
import classes from "./Input.module.css";

function isValid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

function Input(props) {
  const inputType = props.type || "text";
  const htmlFor = `${props.type}-${Math.random()}`;
  const cls = [classes.Input];

  if (isValid(props)) {
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
      {
        isValid(props)
          ? <span>{props.errorMessage || "Input valid value"}</span>
          : null
      }
    </div>
  );
}

export default Input;