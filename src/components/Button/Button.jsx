import React from "react";
import cx from "classnames";

import styles from "./Button.module.css";

const Button = (props) => {
  const isOperator = (val) => {
    return !isNaN(val) || val === "=" || val === ".";
  };
  return (
    <div
      className={
        isOperator(props.children)
          ? styles.buttonWrapper
          : cx(styles.buttonWrapper, styles.operator)
      }
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
