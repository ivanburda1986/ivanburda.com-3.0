import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import styles from "./PortfolioItem.module.css";

export default function PortfolioItem({ visitUrl, githubUrl, title, description }) {
  return (
    <li>
      <div className={styles.project}>
        <div className={styles.projectBody}>
          <h4>{title}</h4>
          <div className={styles.icons}>
            <a href={visitUrl}>Visit</a>
            <a href={githubUrl}>Github</a>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </li>
  );
}
