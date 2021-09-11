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
          <p>After several failed attempts to learn programming earlier in my life when the Internet was still dial-up and coding was learnt from printed books, in January 2019 I decided to start again and this time succeed.</p>
          <p>
            I have always been excited about the ability to make a computer do things, not just use what others have created. Besides this, when I started in 2019, I was already working as an IT/Business analyst at a UI-heavy project, and learning to code was a way to have more educated discussions
            anybody around and be a better analyst as well.
          </p>
          <p>Since my private learning and my job complemented each other, things started to click and I have become passionate about programming. See below my learning curriculum and scroll down to check also my development portfolio to see how I have applied what I have learnt.</p>
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
