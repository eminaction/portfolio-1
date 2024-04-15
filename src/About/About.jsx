import "./About.css";

export default function About() {
  return (
    <>
      <div id="about" className="about">
        <h1>ABOUT</h1>
        <div className="about-section">
          <div className="about-info">
            <h2>
              HEY I&apos;M EMMA, <br />
              <span id="green">
                <b>designer & developer</b>
              </span>
            </h2>
            <p>
              As an enthusiastic Junior Full-Stack Developer with a keen eye for
              detail, I am thrilled to embark on crafting inventive, intuitive
              web applications. While I may be at the beginning of my career
              journey, I am earnestly committed to expanding my skills and
              evolving as a developer.
              <br />
              Previously I worked for an online nutritional supplement retailer,
              where I first expereinced working with websites - both back-end
              and front-end. This is where my passion for developing began, and
              I haven&apos;t looked back since! I began my journey by jumping
              into different online coding resources and self-taught myslef html
              and css. Following this, as I really enjoyed it, I decided to take
              the next step in my tech career and join an intensive full-stack
              bootcamp. Through this, I gained practical experience working on
              various projects and developing my skills in HTML, CSS,
              JavaScript, React, Node.js, Express and more.
            </p>
          </div>
          <div className="about-img">
            <img src="/AvatarMaker-3.png" />
          </div>
        </div>
      </div>
    </>
  );
}
