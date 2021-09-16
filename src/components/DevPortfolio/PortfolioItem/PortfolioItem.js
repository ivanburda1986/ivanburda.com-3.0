import React from "react";
import styles from "./PortfolioItem.module.css";

export default function PortfolioItem({ inProgress, visitUrl, githubUrl, title, description }) {
  return (
    <li>
      <div className={styles.project}>
        <div className={styles.projectBody}>
          <h4>{title}</h4>
          <div className={styles.icons}>
            {inProgress ? (
              ""
            ) : (
              <a href={visitUrl} target="_blank" rel="noreferrer">
                Visit
              </a>
            )}
            {inProgress ? (
              ""
            ) : (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                Github
              </a>
            )}
          </div>
        </div>
        <p>{description}</p>
      </div>
    </li>
  );
}
