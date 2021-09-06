import React from "react";
import styles from "./Section.module.css";

export default function Section() {
  return (
    <section className={styles.Section}>
      <div className={styles.container}>
        <h2>section</h2>
        <div className={styles.sectionColumns}>
          <div className={styles.columnOne}>one</div>
          <div className={styles.columnTwo}>two</div>
        </div>
      </div>
    </section>
  );
}
