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
        <h3>React/Redux/TS</h3>
        <SiReact className={styles.icon} style={{ color: "#1E90FF" }} />
        <SiRedux className={styles.icon} style={{ color: "#483D8B" }} />
        <SiTypescript className={styles.icon} style={{ color: "#1E90FF" }} />
      </div>
      <ul>
        <PortfolioItem visitUrl="#" githubUrl="#" title="Store Prototype" description="A prototype for a product idea in the company I work for. I build a React frontend that displays items dynamically returned from the API." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Memory Game" description="Exactly the thing you would expect. Find all matching pars. Enhanced with a leaderboard tracking scores with faster times and lowest count of needed card turns." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="FX Convertor" description="One of the hiring tasks of the frontend team in the company I work for." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Hacker News Clone with Hooks" description="A copy of the basic features of the favourite Hackernews website. This time with functional components and hooks." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Hacker News Clone" description="A copy of the basic features of the favourite Hackernews website." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Shopping List" description="A shopping list. Google Firebase used as data storage." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Habit Master" description="The app enables defining habbits and making sure one sticks to them every day. Google Firebase used as data storage." />
      </ul>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>JavaScript</h3>
        <SiJavascript className={styles.icon} style={{ color: "#DAA520" }} />
      </div>
      <ul>
        <PortfolioItem visitUrl="#" githubUrl="#" title="Next Tram" description="The app uses live API with data about tram departures in Vienna and suggests to me the best time to go to the stop when going to work and back, in order to reduce waiting time." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Vienna Public Art with Google Maps" description="Benefiting the the publicly available data about art in the streets of Vienna, I visualised individual items in Google Maps and added real-time location tracking." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Life Perspective" description="Based on user's input and average life expectancy (age, sex, country) the app visualizes all days in the life and supports adding notes." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Guitar Coach" description="The application helps with guitar chord recognition and training chord changing speed." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="FX Currency Convertor" description="Foreign-currency convertor." />
      </ul>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>HTML/CSS/Saas</h3>
        <SiHtml5 className={styles.icon} style={{ color: "#e34c26" }} />
        <SiCss3 className={styles.icon} style={{ color: "#8B008B" }} />
        <SiSass className={styles.icon} style={{ color: "#FF1493" }} />
      </div>
      <ul>
        <PortfolioItem visitUrl="#" githubUrl="#" title="CSS layout" description="A course assignment to build a sophisticated, fully responsive layout with CSS." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="A personal presentation" description="Presentational website for a pole-dance trainer from Vienna. Lots of CSS, including animations." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="My own website" description="An older version of my own website built fully with HTML, CSS, and a little bit of JS. Fully responsive." />
        <PortfolioItem visitUrl="#" githubUrl="#" title="Small business website" description="A simple, presentation website for a real business. Built with HTML, CSS. Fully responsive." />
      </ul>
    </div>
  );
}
