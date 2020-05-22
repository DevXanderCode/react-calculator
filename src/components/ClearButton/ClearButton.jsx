import React from "react";

import styles from "./ClearButton.module.css";

const ClearButton = (props) => (
  <div className={styles.clearBtn} onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearButton;
