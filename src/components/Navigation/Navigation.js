import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.container}>
        <h1>Ivan Burda</h1>
        <ul>
          <li>
            <Link to="#">Profile</Link>
          </li>
          <li>
            <Link to="#">Experience</Link>
          </li>
          <li>
            <Link to="#">Portfolio</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
