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
      <div className={styles.DevPortfolioIntro}>
        <p>Below you can see my projects. The newer a project is, the better code quality, of course.</p>
      </div>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>React/Redux/TS</h3>
        <SiReact className={styles.icon} style={{ color: "#1E90FF" }} />
        <SiRedux className={styles.icon} style={{ color: "#483D8B" }} />
        <SiTypescript className={styles.icon} style={{ color: "#1E90FF" }} />
      </div>
      <ul>
        <PortfolioItem
          visitUrl="https://silly-hodgkin-048af9.netlify.app/"
          githubUrl="https://github.com/ivanburda1986/StorePrototype"
          title="Store Prototype"
          description="A prototype for a product idea in the company I work for. I build a React frontend that displays items dynamically returned from the API."
        />
        <PortfolioItem
          visitUrl="https://memorygame.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/memoryGame"
          title="Memory Game"
          description="Exactly the thing you would expect. Find all matching pars. Enhanced with a leaderboard tracking scores with faster times and lowest count of needed card turns."
        />
        <PortfolioItem visitUrl="https://fx.ivanburda.com/" githubUrl="https://github.com/ivanburda1986/interview-fx-test" title="FX Convertor" description="One of the hiring tasks of the frontend team in the company I work for." />
        <PortfolioItem
          visitUrl="https://determined-lamarr-8bc0a4.netlify.app/"
          githubUrl="https://github.com/ivanburda1986/hackerNews-clone-hooks"
          title="Hacker News Clone with Hooks"
          description="A copy of the basic features of the favourite Hackernews website. This time with functional components and hooks."
        />
        <PortfolioItem visitUrl="https://vibrant-euclid-c55785.netlify.app/" githubUrl="https://github.com/ivanburda1986/hackerNews-clone" title="Hacker News Clone" description="A copy of the basic features of the favourite Hackernews website." />
        <PortfolioItem visitUrl="https://distracted-lovelace-83b375.netlify.app/" githubUrl="https://github.com/ivanburda1986/shoppingList" title="Shopping List" description="A shopping list. Google Firebase used as data storage." />
      </ul>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>JavaScript</h3>
        <SiJavascript className={styles.icon} style={{ color: "#DAA520" }} />
      </div>
      <ul>
        <PortfolioItem
          visitUrl="https://nextbim.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/nextBim"
          title="Next Tram"
          description="The app uses live API with data about tram departures in Vienna and suggests to me the best time to go to the stop when going to work and back, in order to reduce waiting time."
        />
        <PortfolioItem
          visitUrl="https://kunst.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/kunstWien"
          title="Vienna Public Art with Google Maps"
          description="Benefiting the the publicly available data about art in the streets of Vienna, I visualised individual items in Google Maps and added real-time location tracking."
        />
        <PortfolioItem
          visitUrl="https://brunnen.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/wienBrunnen"
          title="Vienna Fountains with Google Maps"
          description="Benefiting the the publicly available data about art in the streets of Vienna, I visualised individual fountains in Google Maps and added real-time location tracking."
        />
        <PortfolioItem
          visitUrl="https://life.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/lifePerspective"
          title="Life Perspective"
          description="Based on user's input and average life expectancy (age, sex, country) the app visualizes all days in the life and supports adding notes."
        />
        <PortfolioItem visitUrl="https://chordcoach.ivanburda.com/" githubUrl="https://github.com/ivanburda1986/chordCoach" title="Guitar Coach" description="The application helps with guitar chord recognition and training chord changing speed." />
        <PortfolioItem visitUrl="https://infallible-knuth-8c6e3e.netlify.app/" githubUrl="https://github.com/ivanburda1986/ExchangeRates" title="FX Currency Convertor" description="Foreign-currency convertor." />
      </ul>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>HTML/CSS/Saas</h3>
        <SiHtml5 className={styles.icon} style={{ color: "#e34c26" }} />
        <SiCss3 className={styles.icon} style={{ color: "#8B008B" }} />
        <SiSass className={styles.icon} style={{ color: "#FF1493" }} />
      </div>
      <ul>
        <PortfolioItem visitUrl="#" githubUrl="#" title="CSS layout" description="A course assignment to build a sophisticated, fully responsive layout with CSS." />
        <PortfolioItem visitUrl="https://heuristic-knuth-f61b81.netlify.app/" githubUrl="https://github.com/ivanburda1986/christinaDengg" title="A personal presentation" description="Presentational website for a pole-dance trainer from Vienna. Lots of CSS, including animations." />
        <PortfolioItem visitUrl="https://cranky-babbage-0df30f.netlify.app/" githubUrl="https://github.com/ivanburda1986/ivanburda.com-2.0" title="My own website" description="An older version of my own website built fully with HTML, CSS, and a little bit of JS. Fully responsive." />
        <PortfolioItem visitUrl="https://www.jordanpetr.cz/" githubUrl="https://github.com/ivanburda1986/jordanpetr.cz" title="Small business website" description="A simple, presentation website for a real business. Built with HTML, CSS. Fully responsive." />
      </ul>
    </div>
  );
}
