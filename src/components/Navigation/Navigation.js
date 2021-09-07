import React from "react";
import { Link } from "react-scroll";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.container}>
        <h1>Ivan Burda</h1>
        <ul>
          <li>
            <Link to="about" smooth={true} spy={true} activeClass={styles.active}>
              About
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} spy={true} activeClass={styles.active}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="devportfolio" smooth={true} spy={true} activeClass={styles.active}>
              Dev portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
