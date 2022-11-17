/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import "../reset.css";
import Header from "./Header/Header";
import HeaderBox from "./Header/Header-box";
import HeaderGreenBox from "./Header/Header-green-box";
import Hr from "./Hr/Hr.js";
import Paragraph from "./Paragraph/Paragraph";
import LinkedIn from "./icon/Linked-in.png";
import Twitter from "./icon/Twitter.png";
import Github from "./icon/Github.png";
import Dev from "./icon/DEV.png";

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderGreenBox className="green-header-box">
          <option value="LT">Lietuviškai</option>
          <option value="EN">English</option>
        </HeaderGreenBox>
        <HeaderBox className="header-box">
          <p className="name-in-cv">Gabriele</p>
          <p className="education-title">programmer</p>
        </HeaderBox>
      </Header>
      <main>
        <section className="links-about">
          <div className="link-block">
            <p className="cv-title">links</p>
            <Hr className="in-line-hr">
              <div className="grey-hr"></div>
            </Hr>
            <div className="inline-icon-block">
              <div className="in-line-icon">
                <img className="icon" src={LinkedIn} />
                <p className="paragraph inline">LINKEDIN/username</p>
              </div>
              <div className="in-line-icon">
                <img className="icon" src={Twitter} />
                <p className="paragraph inline">TWITTER/username</p>
              </div>
              <div className="in-line-icon">
                <img className="icon" src={Github} />
                <p className="paragraph inline">GITHUB/username</p>
              </div>
              <div className="in-line-icon">
                <img className="icon" src={Dev} />
                <p className="paragraph inline">DEV/username</p>
              </div>
            </div>
          </div>
          <div className="link-block">
            <p className="cv-title">about me</p>
            <Hr className="in-line-hr">
              <div className="grey-hr-long"></div>
            </Hr>
            <p className="about-me">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              culpa praesentium quam sed dolorem laborum dolor tempore? Cum,
              ducimus autem, saepe est obcaecati ratione optio placeat
              voluptatibus, distinctio quia animi error harum. Tempora id hic
              natus exercitationem dolore molestiae adipisci, veritatis aperiam
              sint eius. Modi voluptatum tenetur, officia repudiandae ullam non
              vitae illum delectus dolor laboriosam id omnis dicta dolores in,
              fuga deserunt libero ducimus eos fugiat, quaerat nam. Facere
              libero neque, dolorum quidem eum est ad accusamus suscipit
              molestias impedit, provident dolore accusantium ipsum ipsa
              incidunt voluptatibus sed earum. Aut in vel ea voluptatibus
              tempora? Id odit minus rem ipsam illum laboriosam, voluptas harum
              iste ratione velit iusto, sapiente praesentium fuga suscipit
              incidunt!
            </p>
          </div>
        </section>
        <section className="education-skills">
          <div className="link-block">
            <p className="cv-title">education</p>
            <Hr className="in-line-hr">
              <div className="grey-hr"></div>
            </Hr>
            <div>
              <Paragraph>SCHOOL NAME</Paragraph>
              <Paragraph>2011-2014</Paragraph>
              <Paragraph>Degree</Paragraph>
            </div>
            <div className="grey-hr-short"></div>
            <div>
              <Paragraph>SCHOOL NAME</Paragraph>
              <Paragraph>2011-2014</Paragraph>
              <Paragraph>Degree</Paragraph>
            </div>
          </div>
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
