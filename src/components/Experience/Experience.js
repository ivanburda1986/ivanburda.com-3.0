import React from "react";
import styles from "./Experience.module.css";
import ivanOutdoor from "../../media/ivan-outdoor.jpg";
import SecondaryColumn from "../SecondaryColumn/SecondaryColumn";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import PrimaryColumn from "../PrimaryColumn/PrimaryColumn";
import { ImUserTie } from "react-icons/im";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Experience() {
  return (
    <div className={styles.Experience}>
      <SecondaryColumn>
        <img src={ivanOutdoor} alt="Ivan Burda" className={styles.secondaryImg} />
        <div className={styles.secondaryTexts}>
          <p>
            As an <strong>IT/Business analyst</strong> I help companies understand their needs, refine them and specify steps to fulfill them.
          </p>
          <p>
            Driven by a desire to get deeper technical understanding, <strong>in 2019 I set on the journey of becoming a self-taught developer</strong>.
          </p>
          <p>Thanks to the combination of analytical and developer skills I have better understanding of the systems as well as of the people at the workplace, regardless their professional background.</p>
        </div>
      </SecondaryColumn>
      <PrimaryColumn>
        <ExperienceItem headline="Frontend Developer" icon={ImUserTie}>
          <p>
            The decision to learn programming came in 2019. As an IT/business analyst I wanted to have more educated conversations with developers and I wanted computers do things, not only to use what others have created. I enjoy programming and want to get a full-time programming experince. See
            below my learning curriculum and scroll down to check my portfolio.
          </p>
          <h5>React, Redux, TypeScript</h5>
          <ul>
            <li>
              <a href="https://ui.dev/react-typescript/" target="_blank" rel="noreferrer">
                React with TypeScript (ui.dev) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://ui.dev/typescript/" target="_blank" rel="noreferrer">
                TypeScript (ui.dev) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://ui.dev/react-router/" target="_blank" rel="noreferrer">
                React Router (ui.dev) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://ui.dev/redux/" target="_blank" rel="noreferrer">
                React Redux (ui.dev) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://ui.dev/react-hooks/" target="_blank" rel="noreferrer">
                React Hooks (ui.dev) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://ui.dev/react/" target="_blank" rel="noreferrer">
                Learn React (ui.dev) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank" rel="noreferrer">
                React - The Complete Guide (Udemy) <BsBoxArrowUpRight />
              </a>
            </li>
          </ul>

          <h5>JavaScript</h5>
          <ul>
            <li>
              <a href="https://ui.dev/advanced-javascript/" target="_blank" rel="noreferrer">
                Learn Advanced JavaScript (ui.dev) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://ui.dev/modern-javascript/" target="_blank" rel="noreferrer">
                Learn Modern JavaScript (ui.dev) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition" target="_blank" rel="noreferrer">
                Secrets of the JavaScript Ninja, 2nd ed. (J. Resig, B. Bibeault, Manning 2016) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://leanpub.com/ydkjsy-get-started" target="_blank" rel="noreferrer">
                You Don't Know JS Yet (Kyle Simpson, 2020) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/web-projects-with-vanilla-javascript/" target="_blank" rel="noreferrer">
                20 Web Projects With Vanilla JavaScript (Udemy) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/understand-javascript/" target="_blank" rel="noreferrer">
                JavaScript: Understanding the Weird Parts (Udemy) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank" rel="noreferrer">
                JavaScript Algorithms and Data Structures (freeCodeCamp) <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/modern-javascript-from-the-beginning/" target="_blank" rel="noreferrer">
                Modern JavaScript From The Beginning (Udemy) <BsBoxArrowUpRight />
              </a>
            </li>
          </ul>

          <h5>HTML, CSS, Saas, Bootstrap</h5>
          <ul>
            <li>
              <a href="https://www.manning.com/books/css-in-depth" target="_blank" rel="noreferrer">
                CSS in Depth (Keith J. Grant, Manning 2018) <BsBoxArrowUpRight />
              </a>
            </li>

            <li>
              <a href="https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/" target="_blank" rel="noreferrer">
                Bootstrap 4 From Scratch <BsBoxArrowUpRight />
              </a>
            </li>

            <li>
              <a href="https://www.udemy.com/course/modern-html-css-from-the-beginning/" target="_blank" rel="noreferrer">
                HTML and CSS from the Beginning <BsBoxArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/learn/responsive-web-design/" target="_blank" rel="noreferrer">
                Responsive Webdesign (freeCodeCamp) <BsBoxArrowUpRight />
              </a>
            </li>
          </ul>
        </ExperienceItem>

        <ExperienceItem headline="IT/Business Analyst, 2014 - present" icon={ImUserTie}>
          <p>I started working as an IT/Business Analyst in banking in 2014. As an analyst I see myself responsible for helping companies understand their requirements and refine those in order to deliver valuable solutions.</p>
          <p>I am experienced with working in agile, scrum-based, cross-functional teams. As an analyst I bring team members together to understand what we want to build and why. Collaboration increases engagement, ownership, knowledge sharing, and ultimately leads to better culture. </p>
          <h5>Key Activities</h5>
          <ul>
            <li>IT/Business analysis for delivering George Online Banking to 6 countries of Erste Group</li>
            <li>Design and alignment of group APIs (REST, JSON)</li>
            <li>Backend integration including 3rd-party companies (Dateio: "Moneyback")</li>
            <li>Designing microservices</li>
            <li>Card digitization and NFC payments for mobile devices</li>
            <li>Specification of requirements, documentation, automated testing (Cypress.io)</li>
            <li>Workshops, talks, Behaviour-Driven-Development trainings</li>
            <li>Hiring, interviewing, onboarding, knowledge transfer</li>
          </ul>

          <h5>Working History</h5>
          <ul>
            <li>Erste Group IT, George Online Banking (2016 - present)</li>
            <li>Greyson Consulting - Erste Group IT, George Online Banking (2016)</li>
            <li>Greyson Consulting - Raiffeisenbank, Multichannel system integration (2015) </li>
            <li>Greyson Consulting - Česká spořitelna, Management consulting support (2014)</li>
          </ul>
        </ExperienceItem>

        <ExperienceItem headline="More skills and experience" icon={ImUserTie}>
          <h5>IT Skills</h5>
          <ul>
            <li>
              <a href="https://www.udemy.com/course/linux-mastery/" target="_blank" rel="noreferrer">
                Master the Linux Command Line <BsBoxArrowUpRight />
              </a>
            </li>
            <li>Github, Postman, Cypress, Jira, Confluence</li>
          </ul>
          <h5>Languages</h5>
          <ul>
            <li>Czech - C2: Native speaker</li>
            <li>English - C1: Full working proficiency</li>
            <li>German - B2/C1: Limited working proficiency</li>
          </ul>
        </ExperienceItem>
      </PrimaryColumn>
    </div>
  );
}
