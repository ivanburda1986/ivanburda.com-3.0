import React from "react";
import styles from "./ExperienceItem.module.css";
export default function ExperienceItem({ children, headline, icon }) {
  return (
    <div className={styles.ExperienceItem}>
      <div className={styles.header}>
        {icon}
        <p>{headline}</p>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
