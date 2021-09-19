import React from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import styles from "./Navigation.module.css";

const classes = [styles.Navigation, styles.MobileNavigation].join(" ");

export default function MobileNavigation() {
  return (
    <div className={classes}>
      <div className={styles.container}>
        <h1>Ivan Burda</h1>
        <ul>
          <li className={styles.menuOption}>
            <Link to="about" smooth={true} spy={true} activeClass={styles.active}>
              About
            </Link>
          </li>
          <li className={styles.menuOption}>
            <Link to="experience" smooth={true} spy={true} activeClass={styles.active}>
              Experience
            </Link>
          </li>
          <li className={styles.menuOption}>
            <Link to="devportfolio" smooth={true} spy={true} activeClass={styles.active}>
              Dev portfolio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
