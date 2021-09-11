import React from "react";
import styles from "./PrimaryColumn.module.css";

export default function PrimaryColumn({ children }) {
  return <div className={styles.PrimaryColumn}>{children}</div>;
}
