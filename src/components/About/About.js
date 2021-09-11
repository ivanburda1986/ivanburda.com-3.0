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

export default function About() {
  return (
    <div className={styles.About}>
      <SecondaryColumn>
        <img src={ivanBusinessNoBg} alt="Ivan Burda" className={styles.secondaryImg} />
        <p className={styles.secondaryStatement}>I help businesses understand their needs and translate those into valuable solutions.</p>
        <img src={signature} alt="Ivan Burda - Hand signature" className={styles.signature} />
      </SecondaryColumn>
      <PrimaryColumn>
        <p className={styles.primaryHeadline}>Welcome! I am Ivan Burda. An experienced IT/Business analyst in banking, and a self-taught frontend developer.</p>
        <ul className={styles.topSkills}>
          <li>Analysis and refinement of business needs</li>
          <li>Requirements engineering, Agile, Scrum, BDD</li>
          <li>Banking, Desktop, Mobile, IT-system integration, REST API</li>
          <li>React, Redux, Typescript, Javascript, HTML, CSS, Cypress.io</li>
          <li>Czech, English, German</li>
        </ul>
        <p className={styles.primaryCurrentlyInterested}>Currently interested in frontend-development opportunities in the banking/finance sector.</p>
        <ul className={styles.primaryContactIcons}>
          <li>
            <a href="#">
              <BiFile className={styles.primaryIcon} />
              <p>GET CV</p>
            </a>
          </li>
          <li>
            <a href="#">
              <SiGithub className={styles.primaryIcon} />
              <p>Github</p>
            </a>
          </li>
          <li>
            <a href="#">
              <GrLinkedin className={styles.primaryIcon} />
              <p>LinkedIn</p>
            </a>
          </li>
          <li>
            <a href="#">
              <HiOutlineMail className={styles.primaryIcon} />
              <p>E-mail</p>
            </a>
          </li>
        </ul>
      </PrimaryColumn>
    </div>
  );
}
