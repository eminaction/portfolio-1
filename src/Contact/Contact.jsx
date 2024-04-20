import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div id="contact" className="contact">
        <h1>CONTACT</h1>
        <div className="contact-container">
          <div className="contact-section">
            <div className="connect">
              <h3>LET&apos;S CONNECT 🚀</h3>
              <a href="mailto:emmanolanx@hotmail.com">
                <button>CONTACT ME</button>
              </a>
            </div>
            <div className="socials">
              <h3>FIND ME HERE:</h3>
              <a
                href="https://www.linkedin.com/in/emma-nolan-010995179"
                className="linkedin"
                target="_blank"
              >
                <img src="/linkedin-logo.png.jpeg" />
              </a>
              <a
                href="https://github.com/eminaction"
                target="_blank"
                className="git"
              >
                <img src="https://static-00.iconduck.com/assets.00/github-inverted-icon-512x499-xwqq0y67.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
