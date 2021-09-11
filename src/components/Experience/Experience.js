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
          <p>After several attempts to learn programming earlier in my life when the Internet was still dial-up and coding was learnt from printed books, in January 2019 I decided to start again and this time succeed.</p>
          <p>
            I have always been excited about the ability to make a computer do things, not just use what others have created. Besides this, when I started in 2019, I was already working as an IT/Business analyst at a UI-heavy project, and learning to code was a way to have more educated discussions
            with anybody around and be a better analyst as well.
          </p>
          <p>Since my private learning and my job complemented each other, things started to click and I have realized I love programming. See below my learning curriculum and scroll down to check also my development portfolio to see how I have applied what I have learnt.</p>
          <h5>React, Redux, Typescript</h5>

          <h5>Javascript, Jest, Cypress.io</h5>
          <ul>
            <li>
              <a href="https://www.manning.com/books/css-in-depth" target="_blank" rel="noreferrer">
                CSS in Depth (Keith J. Grant, Manning 2018)
              </a>
            </li>
          </ul>

          <h5>HTML, CSS, Saas, Bootstrap</h5>
          <ul>
            <li>
              <a href="https://www.manning.com/books/css-in-depth" target="_blank" rel="noreferrer">
                CSS in Depth (Keith J. Grant, Manning 2018)
              </a>
            </li>

            <li>
              <a href="https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/" target="_blank" rel="noreferrer">
                Bootstrap 4 From Scratch
              </a>
            </li>

            <li>
              <a href="https://www.udemy.com/course/modern-html-css-from-the-beginning/" target="_blank" rel="noreferrer">
                HTML and CSS from the Beginning
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/learn/responsive-web-design/" target="_blank" rel="noreferrer">
                FreeCodeCamp - Responsive Webdesign
              </a>
            </li>
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

        <ExperienceItem headline="Other" icon={ImUserTie}>
          <h5>Unix</h5>
          <ul>
            <li>
              <a href="https://www.udemy.com/course/linux-mastery/" target="_blank" rel="noreferrer">
                Master the Linux Command Line
              </a>
            </li>
          </ul>
          <h5>Languages</h5>
          <ul>
            <li>Czech - C2: Native speaker</li>
            <li>English - C1: Full working profficiency</li>
            <li>German - B2/C1: Limited working profficiency</li>
          </ul>
        </ExperienceItem>
      </PrimaryColumn>
    </div>
  );
}
