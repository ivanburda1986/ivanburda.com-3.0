import React from "react";
import styles from "./SecondaryColumn.module.css";
export default function SecondaryColumn({ children }) {
  return <div className={styles.SecondaryColumn}>{children}</div>;
}
