import "./About.css";

export default function About() {
  return (
    <>
      <div id="about" className="about">
        <h1>ABOUT</h1>
        <div className="about-section">
          <div className="about-info">
            <div className="about-text">
              <h2>
                HEY I&apos;M EMMA, <br />
                <span className="green">
                  <b>designer & developer</b>
                </span>
              </h2>
              <p>
                I am originally from Ireland, where I grew up on a small farm.
                Previously I worked for an online nutritional supplement
                retailer, where I first experienced working with websites - both
                back-end and front-end. This is where my passion for developing
                all started. I began my journey by jumping into different online
                coding resources and self-taught myself html and css. Following
                this I decided to take the next step in my tech career and join
                an intensive full-stack bootcamp, and I haven&apos;t looked back
                since!
              </p>
            </div>
            <div className="about-img">
              <img src="/AvatarMaker-3.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
