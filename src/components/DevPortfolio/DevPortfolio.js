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
            <h3>React Native</h3>
            <SiReact className={styles.icon} style={{ color: "#1E90FF" }} />
            <SiTypescript className={styles.icon} style={{ color: "#1E90FF" }} />
        </div>
        <ul>
            <PortfolioItem
                inProgress
                title="Feelings Tracker (In progress)"
                description="A mobile app which allows the user to track their feelings during the day. The purpose is to get more connected to one's own feelings."
            />
        </ul>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>React/Redux/TypeScript</h3>
        <SiReact className={styles.icon} style={{ color: "#1E90FF" }} />
        <SiRedux className={styles.icon} style={{ color: "#483D8B" }} />
        <SiTypescript className={styles.icon} style={{ color: "#1E90FF" }} />
      </div>
      <ul>
          <PortfolioItem
              visitUrl="https://shogi.ivanburda.com/login"
              githubUrl="https://github.com/ivanburda1986/dobutsu-shogi"
              title="Dobutsu Shogi Online Game (06/2022)"
              description="An online version of the Japanese game Dobutsu Shogi. Built with React, TypeScript, Bootstrap. For authentication and data storing I have used Google Firestore. The realtime interaction is enabled by using WebSockets."
          />
        <PortfolioItem
          visitUrl="https://jolly-hoover-c59e25.netlify.app/"
          githubUrl="https://github.com/ivanburda1986/interview-fx-test-typescript"
          title="FX Pairs - Refactored with TypeScript (12/2021)"
          description="One of the hiring tasks of the frontend team in the company I work for. Built with React, tested with Jest, now refactored with TypeScript. The app gets data about conversion rate between individual world currencies and Euro. It is possible to search for a specific currency."
        />
        <PortfolioItem
          visitUrl="https://snippets.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/snippets"
          title="Snippets (12/2021)"
          description="An online storage for my own code snippets. Read access to most snippets is public. Some private snippets and all create, update, delete features are restricted to an authenticated user only. The authentication is done via the Firebase authentication service. Firebase realtime database also serves as a data storage."
        />

        <PortfolioItem
          visitUrl="https://silly-hodgkin-048af9.netlify.app/"
          githubUrl="https://github.com/ivanburda1986/StorePrototype"
          title="Store Prototype (08/2021)"
          description="A prototype for a product idea in the company I work for. I build a React frontend that displays items dynamically returned from the API."
        />
        <PortfolioItem
          visitUrl="https://fx.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/interview-fx-test"
          title="FX Pairs (07/2021)"
          description="One of the hiring tasks of the frontend team in the company I work for. The app gets data about conversion rate between individual world currencies and Euro. It is possible to search for a specific currency. Built with React. Unit tests in Jest."
        />
        <PortfolioItem
          visitUrl="https://memorygame.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/memoryGame"
          title="Memory Game (06/2021)"
          description="Exactly the thing you would expect. Find all matching pars. Enhanced with a leaderboard tracking scores with faster times and lowest count of needed card turns."
        />
        <PortfolioItem visitUrl="https://distracted-lovelace-83b375.netlify.app/" githubUrl="https://github.com/ivanburda1986/shoppingList" title="Shopping List (06/2021)" description="A shopping list. Google Firebase used as data storage." />
        <PortfolioItem
          visitUrl="https://determined-lamarr-8bc0a4.netlify.app/"
          githubUrl="https://github.com/ivanburda1986/hackerNews-clone-hooks"
          title="Hacker News Clone with Hooks (05/2021)"
          description="A copy of the basic features of the favourite Hackernews website. This time with functional components and hooks."
        />
        <PortfolioItem visitUrl="https://vibrant-euclid-c55785.netlify.app/" githubUrl="https://github.com/ivanburda1986/hackerNews-clone" title="Hacker News Clone (04/2021)" description="A copy of the basic features of the favourite Hackernews website." />
      </ul>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>JavaScript</h3>
        <SiJavascript className={styles.icon} style={{ color: "#DAA520" }} />
      </div>
      <ul>
        <PortfolioItem
          visitUrl="https://life.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/lifePerspective"
          title="Life Perspective (12/2020)"
          description="Based on user's input and average life expectancy (age, sex, country) the app visualizes all days in the life and supports adding notes."
        />

        <PortfolioItem
          visitUrl="https://kunst.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/kunstWien"
          title="Vienna Public Art with Google Maps (10/2020)"
          description="Benefiting the the publicly available data about art in the streets of Vienna, I visualised individual items in Google Maps and added real-time location tracking."
        />
        <PortfolioItem
          visitUrl="https://brunnen.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/wienBrunnen"
          title="Vienna Fountains with Google Maps (10/2020)"
          description="Benefiting the the publicly available data about art in the streets of Vienna, I visualised individual fountains in Google Maps and added real-time location tracking."
        />
        <PortfolioItem
          visitUrl="https://nextbim.ivanburda.com/"
          githubUrl="https://github.com/ivanburda1986/nextBim"
          title="Next Tram (08/2020)"
          description="The app uses live API with data about tram departures in Vienna and suggests to me the best time to go to the stop when going to work and back, in order to reduce waiting time."
        />
        <PortfolioItem visitUrl="https://chordcoach.ivanburda.com/" githubUrl="https://github.com/ivanburda1986/chordCoach" title="Guitar Coach (05/2020)" description="The application helps with guitar chord recognition and training chord changing speed." />
        <PortfolioItem visitUrl="https://infallible-knuth-8c6e3e.netlify.app/" githubUrl="https://github.com/ivanburda1986/ExchangeRates" title="FX Currency Convertor (02/2020)" description="Foreign-currency convertor." />
      </ul>
      <div className={styles.DevPortfolioSectionTitle}>
        <h3>HTML/CSS/Saas</h3>
        <SiHtml5 className={styles.icon} style={{ color: "#e34c26" }} />
        <SiCss3 className={styles.icon} style={{ color: "#8B008B" }} />
        <SiSass className={styles.icon} style={{ color: "#FF1493" }} />
      </div>
      <ul>
        <PortfolioItem
          visitUrl="https://distracted-nightingale-8626a9.netlify.app/"
          githubUrl="https://github.com/ivanburda1986/css-assignment"
          title="CSS Layout Exercise (07/2021)"
          description="A course assignment to build a rather complex, fully responsive layout with CSS. Check the sections: 'Portfolio' and 'About'."
        />
        <PortfolioItem visitUrl="https://www.jordanpetr.cz/" githubUrl="https://github.com/ivanburda1986/jordanpetr.cz" title="Small business website (07/2020)" description="A simple, presentation website for a real business. Built with HTML, CSS. Fully responsive." />
        <PortfolioItem visitUrl="https://cranky-babbage-0df30f.netlify.app/" githubUrl="https://github.com/ivanburda1986/ivanburda.com-2.0" title="My own website (05/2020)" description="An older version of my own website built fully with HTML, CSS, and a little bit of JS. Fully responsive." />
        <PortfolioItem visitUrl="https://heuristic-knuth-f61b81.netlify.app/" githubUrl="https://github.com/ivanburda1986/christinaDengg" title="A personal presentation (09/2019)" description="Presentational website for a pole-dance trainer from Vienna. Lots of CSS, including animations." />
      </ul>
    </div>
  );
}
