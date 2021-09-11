import React from "react";
import styles from "./Experience.module.css";
import ivanOutdoor from "../../media/ivan-outdoor.jpg";
import SecondaryColumn from "../SecondaryColumn/SecondaryColumn";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import PrimaryColumn from "../PrimaryColumn/PrimaryColumn";
import { ImUserTie } from "react-icons/im";

export default function Experience() {
  return (
    <div className={styles.Experience}>
      <SecondaryColumn>
        <img src={ivanOutdoor} alt="Ivan Burda" className={styles.secondaryImg} />
      </SecondaryColumn>
      <PrimaryColumn>
        <ExperienceItem headline="Frontend Developer" icon={ImUserTie}>
          <ul>
            <li>ian</li>
            <li>ian</li>
            <li>ian</li>
            <li>ian</li>
          </ul>
        </ExperienceItem>
        <ExperienceItem headline="IT/Business Analyst, 2014 - present" icon={ImUserTie}>
          <ul>
            <li>ian</li>
            <li>ian</li>
            <li>ian</li>
            <li>ian</li>
          </ul>
        </ExperienceItem>
      </PrimaryColumn>
    </div>
  );
}
