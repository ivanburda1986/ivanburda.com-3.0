import React from "react";
import styles from "./About.module.css";
import ivanBusiness from "../../media/ivan-business.jpg";
import ivanBusinessNoBg from "../../media/ivan-business-removebg.png";
import signature from "../../media/signature.png";
import { BiFile } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.secondaryColumn}>
        <img src={ivanBusinessNoBg} alt="Ivan Burda" className={styles.secondaryImg} />
        <p className={styles.secondaryStatement}>I help businesses understand their needs and translate those into valuable solutions.</p>
        <img src={signature} alt="Ivan Burda - Hand signature" className={styles.signature} />
      </div>
      <div className={styles.primaryColumn}>
        <p className={styles.primaryHeadline}>Welcome! I am Ivan Burda. An experienced IT/Business analyst in banking, and a self-taught frontend developer.</p>
        <ul className={styles.topSkills}>
          <li>Analysis and refinement of business needs</li>
          <li>Requirements engineering, Agile, Scrum, BDD</li>
          <li>Banking, Desktop, Mobile, IT systems integration, REST API</li>
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
      </div>
    </div>
  );
}
