import React from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import styles from "./MobileNavigation.module.css";

export default function MobileNavigation() {
  const [showNavigation, setShowNavigation] = React.useState(true);

  return (
    <div className={styles.MobileNavigation}>
      <div className={styles.container}>
        <div className={styles.MobileNavigationHeader}>
          <h1>Ivan Burda</h1>
          <button className={styles.hamburger} onClick={() => setShowNavigation(!showNavigation)}>
            <FiMenu />
          </button>
        </div>
        <div className={styles.MobileNavigationList} style={{ display: `${showNavigation === true ? "none" : "flex"}` }}>
          <ul>
            <li className={styles.menuOption}>
              <Link to="about" smooth={true} spy={true} activeClass={styles.active} onClick={() => setShowNavigation(!showNavigation)}>
                About
              </Link>
            </li>
            <li className={styles.menuOption}>
              <Link to="experience" smooth={true} spy={true} activeClass={styles.active} onClick={() => setShowNavigation(!showNavigation)}>
                Experience
              </Link>
            </li>
            <li className={styles.menuOption}>
              <Link to="devportfolio" smooth={true} spy={true} activeClass={styles.active} onClick={() => setShowNavigation(!showNavigation)}>
                Dev portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
