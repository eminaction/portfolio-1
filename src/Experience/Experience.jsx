import "./Experience.css";

export default function Experience() {
  return (
    <>
      <div id="experience" className="experience">
        <h1>EXPERIENCE</h1>
        <div className="experience-sections">
          <div className="job-experience">
            <div className="job-header">Professional Experience</div>
          </div>
          <div className="tech-stack">
            <div className="tech-header">Tech Stack</div>
            <div className="columns">
              <div className="column1">
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div className="column2">
                <p>Javascript</p>
                <p>Express.js</p>
              </div>
            </div>
            {/* <p>
              ✔️ HTML
              <br />
              ✔️ CSS
              <br />
              ✔️ Javascript
              <br />
              ✔️ REACT
              <br />
              ✔️ Next.js
              <br />
              ✔️ Node.js
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
