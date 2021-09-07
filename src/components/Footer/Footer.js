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

        <a href="" className={styles.contactIcon}>
          <HiOutlineMail />
        </a>

        <a href="" className={styles.contactIcon}>
          <SiGithub />
        </a>

        <a href="" className={styles.contactIcon}>
          <GrLinkedin />
        </a>
      </div>
    </nav>
  );
}
