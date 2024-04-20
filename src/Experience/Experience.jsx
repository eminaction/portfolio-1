import "./Experience.css";

export default function Experience() {
  return (
    <>
      <div id="experience" className="experience">
        <h1>EXPERIENCE</h1>
        <div className="cv">
          <a
            href="https://drive.google.com/file/d/16dD64fhPQtFD08ojThljao7nDVt9Ez8V/view?usp=sharing"
            target="_blank"
          >
            <button className="cv-button">SEE CV</button>
          </a>
        </div>
        <div className="experience-sections">
          <div className="job-experience">
            <div className="job-header">Professional Experience</div>
            <div className="columns">
              <div className="column1">
                <p className="year">
                  Feb 2024 -<br /> May 2024
                </p>
                <div className="experience-heading">
                  <b>School of Code 💻</b>
                  <ul>
                    <li>Intensive full stack software developer course</li>
                    <li>
                      Learning programming core skills such as React & much more
                    </li>
                    <li>Problem solving & agile methodologies</li>
                  </ul>
                </div>
              </div>
              <div className="column2">
                <p className="year">
                  Mar 2020 -<br />
                  Jan 2024
                </p>
                <div>
                  <b>Evolution Organics 🌱</b>
                  <ul>
                    <li>Customer services</li>
                    <li>Content creation e.g. blogs</li>
                    <li>
                      Online shop maintenance e.g. adding/updating products{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-stack">
            <div className="tech-header">Tech Stack</div>
            <div className="tech-section">
              <div className="tech-bubbles">
                <span>HTML</span>
                <span>Javascript</span>
                <br />
                <br />
                <br />
                <span>CSS</span>
                <span>REACT</span>
                <span>Express.js</span>
                <br />
                <br />
                <br />
                <div className="container-3">
                  <span>Git</span>
                  <span>Node.js</span>
                  <span>SQL</span>
                  <span>Typescript</span>
                </div>
                {/* <p>HTML</p>
                <p>CSS</p>
                <p>Next.js</p> */}
              </div>
              {/* <div className="column2">
                <p>Javascript</p>
                <p>Express.js</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
