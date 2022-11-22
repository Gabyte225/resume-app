import "./App.css";
import "../reset.css";
import Header from "./Components/Header/Header";
import Hr from "./Components/Hr/Hr.js";
import Paragraph from "./Components/Paragraph/Paragraph";
import SectionLinks from "./Components/SectionLinks/SectionLinks";
import LinkBlock from "./Components/LinkBlock/LinkBlock";
import { useState } from "react";
import languages from "./languages.json";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <div className="App">
      <Header
        className="header-flex"
        language={language}
        onChange={setLanguage}
      ></Header>
      <main>
        <SectionLinks></SectionLinks>
        <section className="education-skills">
          <LinkBlock type="education">
            <Paragraph>{languages[language].main.education.name}</Paragraph>
            <Paragraph>2011-2014</Paragraph>
            <Paragraph>{languages[language].main.education.degree}</Paragraph>
            <div className="grey-hr-short"></div>
            <Paragraph>{languages[language].main.education.name}</Paragraph>
            <Paragraph>2011-2014</Paragraph>
            <Paragraph>{languages[language].main.education.degree}</Paragraph>
          </LinkBlock>
          <div className="link-block">
            <p className="cv-title">
              {languages[language].main.personalSkills.personalSkills}
            </p>
            <Hr className="in-line-hr">
              <div className="grey-hr"></div>
            </Hr>
            <div>
              <Paragraph className="skills green">
                {languages[language].main.personalSkills.teamwork}
              </Paragraph>
              <Paragraph className="skills yellow">
                {languages[language].main.personalSkills.communication}
              </Paragraph>
              <Paragraph className="skills orange">
                {languages[language].main.personalSkills.organization}
              </Paragraph>
            </div>
          </div>
          <div className="link-block">
            <p className="cv-title">
              {languages[language].main.technicalSkills}
            </p>
            <Hr className="in-line-hr">
              <div className="grey-hr"></div>
            </Hr>
            <div>
              <Paragraph className="skills green">HTML</Paragraph>
              <Paragraph className="skills green">CSS/SCSS</Paragraph>
              <Paragraph className="skills yellow">JAVASCRIPT</Paragraph>
              <Paragraph className="skills yellow">REACT.JS</Paragraph>
            </div>
          </div>
        </section>
        <div className="link-block">
          <p className="cv-title">
            {languages[language].main.experience.experience}
          </p>
          <Hr className="in-line-hr">
            <div className="grey-hr-long"></div>
          </Hr>
          <div className="experience-in-line">
            <div className="job-position">
              <Paragraph>
                {languages[language].main.experience.position.title}
              </Paragraph>
              <Paragraph className="block">
                {languages[language].main.experience.position.company}
              </Paragraph>
              <Paragraph className="block">
                {languages[language].main.experience.position.year}
              </Paragraph>
              <Paragraph className="block left">
                {languages[language].main.experience.position.about}
              </Paragraph>
            </div>
            <div className="job-position middle">
              <Paragraph>
                {languages[language].main.experience.position.title}
              </Paragraph>
              <Paragraph className="block">
                {languages[language].main.experience.position.company}
              </Paragraph>
              <Paragraph className="block">
                {languages[language].main.experience.position.year}
              </Paragraph>
              <Paragraph className="block left">
                {languages[language].main.experience.position.about}
              </Paragraph>
            </div>
            <div className="job-position">
              <Paragraph>
                {languages[language].main.experience.position.title}
              </Paragraph>
              <Paragraph className="block">
                {languages[language].main.experience.position.company}
              </Paragraph>
              <Paragraph className="block">
                {languages[language].main.experience.position.year}
              </Paragraph>
              <Paragraph className="block left">
                {languages[language].main.experience.position.about}
              </Paragraph>
            </div>
          </div>
          <div className="grey-hr-long-gap"></div>
        </div>
      </main>
      <footer>
        <div className="contacts-in-line">
          <div className="addres">
            <p className="education-title">
              {languages[language].footer.location.location}
            </p>
            <Paragraph className="links">
              {languages[language].footer.location.contry}
            </Paragraph>
            <Paragraph className="links">Vilnius</Paragraph>
          </div>
          <div className="addres">
            <p className="education-title">
              {languages[language].footer.contacts}
            </p>
            <Paragraph className="links">
              <a href="tel:+37062419707">+370XXXXXXXX</a>
            </Paragraph>
            <Paragraph className="links">
              <a href="mailto:gabe300@gmail.com?subject=subject text">
                Gabriele@gmail.com
              </a>
            </Paragraph>
          </div>
          <div className="addres">
            <p className="education-title">
              {languages[language].footer.social}
            </p>
            <Paragraph className="links">
              <a target="_blank" href="https://linkedin.com/" rel="noreferrer">
                LinkedIn
              </a>
            </Paragraph>
            <Paragraph className="links">
              <a target="_blank" href="https://facebook.com/" rel="noreferrer">
                Facebook
              </a>
            </Paragraph>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
