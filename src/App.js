import "./App.css";
import "./reset.css";
import LinkedIn from "./icon/Linked-in.png";
import Twitter from "./icon/Twitter.png";
import Github from "./icon/Github.png";
import Dev from "./icon/DEV.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-flex">
          <div className="green-header-box"></div>
          <div className="header-box">
            <p className="name-in-cv">Gabriele</p>
            <p className="education-title">programmer</p>
          </div>
        </div>
      </header>
      <main>
        <section className="links-about">
          <div className="link-block">
            <p className="cv-title">links</p>
            <div className="in-line-hr">
              <div className="green-hr"></div>
              <div className="grey-hr"></div>
            </div>
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
            <div className="in-line-hr">
              <div className="green-hr"></div>
              <div className="grey-hr-long"></div>
            </div>
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
            <div className="in-line-hr">
              <div className="green-hr"></div>
              <div className="grey-hr"></div>
            </div>
            <div>
              <p className="paragraph">SCHOOL NAME</p>
              <p className="paragraph">2011-2014</p>
              <p className="paragraph">Degree</p>
            </div>
            <div className="grey-hr-short"></div>
            <div>
              <p className="paragraph">SCHOOL NAME</p>
              <p className="paragraph">2011-2014</p>
              <p className="paragraph">Degree</p>
            </div>
          </div>
          <div className="link-block">
            <p className="cv-title">personal skills</p>
            <div className="in-line-hr">
              <div className="green-hr"></div>
              <div className="grey-hr"></div>
            </div>
            <div>
              <p className="paragraph skills green">TEAMWORK</p>
              <p className="paragraph skills yellow">COMMUNICATION</p>
              <p className="paragraph skills orange">ORGANIZATION</p>
            </div>
          </div>
          <div className="link-block">
            <p className="cv-title">technical skills</p>
            <div className="in-line-hr">
              <div className="green-hr"></div>
              <div className="grey-hr"></div>
            </div>
            <div>
              <p className="paragraph skills green">HTML</p>
              <p className="paragraph skills green">CSS/SCSS</p>
              <p className="paragraph skills yellow">JAVASCRIPT</p>
              <p className="paragraph skills yellow">REACT.JS</p>
            </div>
          </div>
        </section>
        <div className="link-block">
          <p className="cv-title">work experience</p>
          <div className="in-line-hr">
            <div className="green-hr"></div>
            <div className="grey-hr-long"></div>
          </div>
          <div className="experience-in-line">
            <div className="job-position">
              <p className="paragraph">JOB POSITION</p>
              <p className="paragraph block">Company</p>
              <p className="paragraph block">2018-present</p>
              <p className="paragraph block left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                recusandae voluptatum nihil voluptates soluta saepe quasi
                nostrum placeat corrupti facilis! corrupti facilis!
              </p>
            </div>
            <div className="job-position middle">
              <p className="paragraph">JOB POSITION</p>
              <p className="paragraph block">Company</p>
              <p className="paragraph block">2018-present</p>
              <p className="paragraph block left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                recusandae voluptatum nihil voluptates soluta saepe quasi
                nostrum placeat corrupti facilis! corrupti facilis!
              </p>
            </div>
            <div className="job-position">
              <p className="paragraph">JOB POSITION</p>
              <p className="paragraph block">Company</p>
              <p className="paragraph block">2018-present</p>
              <p className="paragraph block left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                recusandae voluptatum nihil voluptates soluta saepe quasi
                nostrum placeat corrupti facilis! corrupti facilis!
              </p>
            </div>
          </div>
          <div className="grey-hr-long-gap"></div>
        </div>
      </main>
      <footer>
        <div className="contacts-in-line">
          <div className="addres">
            <p className="education-title">location</p>
            <p className="paragraph links">Lithuania</p>
            <p className="paragraph links">Vilnius</p>
          </div>
          <div className="addres">
            <p className="education-title">contacts</p>
            <p className="paragraph links">
              <a href="tel:+37062419707">+370XXXXXXXX</a>
            </p>
            <p className="paragraph links">
              <a href="mailto:gabe300@gmail.com?subject=subject text">
                Gabriele@gmail.com
              </a>
            </p>
          </div>
          <div className="addres">
            <p className="education-title">social</p>
            <p className="paragraph links">
              <a target="_blank" href="https://linkedin.com/" rel="noreferrer">
                LinkedIn
              </a>
            </p>
            <p className="paragraph links">
              <a target="_blank" href="https://facebook.com/" rel="noreferrer">
                Facebook
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
