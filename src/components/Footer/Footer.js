import React from "react";
import styles from "./Footer.module.css";
import { GrDocumentPdf } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";

export default function Footer() {
  const getYear = () => {
    const fullYear = new Date().getFullYear();
    return fullYear;
  };

  return (
    <nav className={styles.Footer}>
      <div className={styles.container}>
        <p>
          Ivan Burda &copy; <span>{getYear()}</span>
        </p>
        <a href="https://www.linkedin.com/in/ivan-burda-08337335" className={styles.contactIcon} target="_blank" rel="noreferrer">
          <GrLinkedin />
        </a>
        <a href="https://github.com/ivanburda1986" className={styles.contactIcon} target="_blank" rel="noreferrer">
          <SiGithub />
        </a>
        <a href="mailto:burda.ivan@gmail.com" className={styles.contactIcon} target="_blank" rel="noreferrer">
          <HiOutlineMail />
        </a>
      </div>
    </nav>
  );
}
