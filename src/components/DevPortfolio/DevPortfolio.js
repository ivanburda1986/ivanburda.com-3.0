import React from "react";
import styles from "./DevPortfolio.module.css";

export default function DevPortfolio() {
  return (
    <div className={styles.DevPortfolio}>
      <h3>HTML/CSS/SAAS</h3>
      <ul>
        <li>
          <div className={styles.project}>
            <p>Small business website</p>
            <a href="#">Github</a>
          </div>
        </li>
        <li>
          <div className={styles.project}>
            <p>Small business website</p>
            <a href="#">Github</a>
          </div>
        </li>
        <li>
          <div className={styles.project}>
            <p>Small business website</p>
            <a href="#">Github</a>
          </div>
        </li>
      </ul>
    </div>
  );
}
