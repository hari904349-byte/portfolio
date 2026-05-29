import "./home.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Home() {

  return (

    <div className='home-container' id="home">

      <h1>Hi, I'm Hariharan N R</h1>

      <h2>Software Engineer</h2>

      <p>
        I am a B.E. Computer Science graduate  with a strong
        passion for backend development and building
        real-world software solutions.
      </p>

      {/* SOCIAL ICONS */}

      <div className="social-icons">

        <a
          href="https://github.com/hari904349-byte"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/hari-haran-115b53355"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hari904349@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>

      </div>

      {/* DOWNLOAD CV BUTTON */}

      <a
        href="/Hariharan CV.pdf"
        download
        className="cv-btn"
      >
        Download CV
      </a>

    </div>

  );
}

export default Home;