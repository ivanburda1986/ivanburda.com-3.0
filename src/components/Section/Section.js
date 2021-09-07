import React from "react";
import styles from "./Section.module.css";

export default function Section({ children, id, title, odd }) {
  return (
    <section id={id} className={styles.Section} style={{ backgroundColor: odd ? "var(--lightBg)" : "var(--darkBg)" }}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
