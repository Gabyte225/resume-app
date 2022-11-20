import "./App.css";
import "../reset.css";
import Header from "./Components/Header/Header";
import Hr from "./Components/Hr/Hr.js";
import Paragraph from "./Components/Paragraph/Paragraph";
import SectionLinks from "./Components/SectionLinks/SectionLinks";
import LinkBlock from "./Components/LinkBlock/LinkBlock";

function App() {
  return (
    <div className="App">
      <Header className="header-flex"></Header>
      <main>
        <SectionLinks></SectionLinks>
        <section className="education-skills">
          <LinkBlock type='education'>
            <Paragraph>SCHOOL NAME</Paragraph>
            <Paragraph>2011-2014</Paragraph>
            <Paragraph>Degree</Paragraph>
            <Paragraph>SCHOOL NAME</Paragraph>
            <Paragraph>2011-2014</Paragraph>
            <Paragraph>Degree</Paragraph>
          </LinkBlock>
          <div className="link-block">
            <p className="cv-title">personal skills</p>
            <Hr className="in-line-hr">
              <div className="grey-hr"></div>
            </Hr>
            <div>
              <Paragraph className="skills green">TEAMWORK</Paragraph>
              <Paragraph className="skills yellow">COMMUNICATION</Paragraph>
              <Paragraph className="skills orange">ORGANIZATION</Paragraph>
            </div>
          </div>
          <div className="link-block">
            <p className="cv-title">technical skills</p>
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
          <p className="cv-title">work experience</p>
          <Hr className="in-line-hr">
            <div className="grey-hr-long"></div>
          </Hr>
          <div className="experience-in-line">
            <div className="job-position">
              <Paragraph>JOB POSITION</Paragraph>
              <Paragraph className="block">Company</Paragraph>
              <Paragraph className="block">2018-present</Paragraph>
              <Paragraph className="block left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                recusandae voluptatum nihil voluptates soluta saepe quasi
                nostrum placeat corrupti facilis! corrupti facilis!
              </Paragraph>
            </div>
            <div className="job-position middle">
              <Paragraph>JOB POSITION</Paragraph>
              <Paragraph className="block">Company</Paragraph>
              <Paragraph className="block">2018-present</Paragraph>
              <Paragraph className="block left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                recusandae voluptatum nihil voluptates soluta saepe quasi
                nostrum placeat corrupti facilis! corrupti facilis!
              </Paragraph>
            </div>
            <div className="job-position">
              <Paragraph>JOB POSITION</Paragraph>
              <Paragraph className="block">Company</Paragraph>
              <Paragraph className="block">2018-present</Paragraph>
              <Paragraph className="block left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                recusandae voluptatum nihil voluptates soluta saepe quasi
                nostrum placeat corrupti facilis! corrupti facilis!
              </Paragraph>
            </div>
          </div>
          <div className="grey-hr-long-gap"></div>
        </div>
      </main>
      <footer>
        <div className="contacts-in-line">
          <div className="addres">
            <p className="education-title">location</p>
            <Paragraph className="links">Lithuania</Paragraph>
            <Paragraph className="links">Vilnius</Paragraph>
          </div>
          <div className="addres">
            <Paragraph className="education-title">contacts</Paragraph>
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
            <p className="education-title">social</p>
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
