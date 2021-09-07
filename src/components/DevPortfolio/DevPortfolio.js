import React from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import styles from "./DevPortfolio.module.css";

import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export default function DevPortfolio() {
  return (
    <div className={styles.DevPortfolio}>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>React/Redux/Typescript</h3>
        <SiReact className={styles.icon} style={{ color: "#1E90FF" }} />
        <SiRedux className={styles.icon} style={{ color: "#483D8B" }} />
        <SiTypescript className={styles.icon} style={{ color: "#1E90FF" }} />
      </div>
      <ul>
        <PortfolioItem visitUrl="#" githubUrl="#" title="A personal presentation" description="Presentational website for a pole-dance trainer from Vienna. Lots of CSS, including animations." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="My own website" description="An older version of my own website built fully with HTML, CSS, and a little bit of JS. Fully responsive." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Small business website" description="A simple, presentation website for a real business. Built with HTML, CSS. Fully responsive." />
      </ul>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>Javascript</h3>
        <SiJavascript className={styles.icon} style={{ color: "#DAA520" }} />
      </div>
      <ul>
        <PortfolioItem visitUrl="#" githubUrl="#" title="A personal presentation" description="Presentational website for a pole-dance trainer from Vienna. Lots of CSS, including animations." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="My own website" description="An older version of my own website built fully with HTML, CSS, and a little bit of JS. Fully responsive." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Small business website" description="A simple, presentation website for a real business. Built with HTML, CSS. Fully responsive." />
      </ul>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>HTML/CSS/Saas</h3>
        <SiHtml5 className={styles.icon} style={{ color: "#e34c26" }} />
        <SiCss3 className={styles.icon} style={{ color: "#8B008B" }} />
        <SiSass className={styles.icon} style={{ color: "#FF1493" }} />
      </div>
      <ul>
        <PortfolioItem visitUrl="#" githubUrl="#" title="A personal presentation" description="Presentational website for a pole-dance trainer from Vienna. Lots of CSS, including animations." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="My own website" description="An older version of my own website built fully with HTML, CSS, and a little bit of JS. Fully responsive." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Small business website" description="A simple, presentation website for a real business. Built with HTML, CSS. Fully responsive." />
      </ul>
    </div>
  );
}
