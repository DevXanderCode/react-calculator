import React from "react";

import styles from "./Input.module.css";

const Input = (props) => <div className={styles.input}>{props.children}</div>;

export default Input;
