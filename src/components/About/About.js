import React from "react";
import styles from "./About.module.css";
import ivanBusinessNoBg from "../../media/ivan-business-removebg.png";
import signature from "../../media/signature.png";
import { BiFile } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import SecondaryColumn from "../SecondaryColumn/SecondaryColumn";
import PrimaryColumn from "../PrimaryColumn/PrimaryColumn";
import CV from "../../media/IVAN_BURDA-CV.pdf";

export default function About() {
  return (
    <div className={styles.About}>
      <SecondaryColumn>
        <img src={ivanBusinessNoBg} alt="Ivan Burda" className={styles.secondaryImg} />
        <div className={styles.statementSignatureContainer}>
          <p className={styles.secondaryStatement}>I help businesses understand their needs and translate those into valuable solutions.</p>
          <img src={signature} alt="Ivan Burda - Hand signature" className={styles.signature} />
        </div>
      </SecondaryColumn>
      <PrimaryColumn>
        <p className={styles.primaryHeadline}>Welcome! I am Ivan Burda. An experienced IT/Business analyst in banking, and a self-taught frontend developer.</p>
        <ul className={styles.topSkills}>
          <li>Analysis and refinement of business needs</li>
          <li>Requirements engineering, Agile, Scrum, BDD</li>
          <li>Banking, Desktop, Mobile, IT-system integration, REST API</li>
          <li>React, Redux, Typescript, Javascript, HTML, CSS, Cypress.io</li>
          <li>Czech, English, German</li>
          <li>Located in Austria, Vienna</li>
        </ul>
        <p className={styles.primaryCurrentlyInterested}>Currently interested in frontend-development opportunities in the banking/finance sector.</p>
        <ul className={styles.primaryContactIcons}>
          <li>
            <a href={CV} download="IVAN_BURDA-CV.pdf">
              <BiFile className={styles.primaryIcon} />
              <p>RESUMÉ</p>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ivan-burda-08337335" target="_blank" rel="noreferrer">
              <GrLinkedin className={styles.primaryIcon} />
              <p>LinkedIn</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/ivanburda1986" target="_blank" rel="noreferrer">
              <SiGithub className={styles.primaryIcon} />
              <p>Github</p>
            </a>
          </li>
          <li>
            <a href="mailto:burda.ivan@gmail.com" target="_blank" rel="noreferrer">
              <HiOutlineMail className={styles.primaryIcon} />
              <p>E-mail</p>
            </a>
          </li>
        </ul>
      </PrimaryColumn>
    </div>
  );
}
