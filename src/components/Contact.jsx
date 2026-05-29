import "./contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_hariharan",
      "template_o5am13q",
      form.current,
      "urGe8gv7oApn7QctS"
    )

    .then(() => {

      alert("Message Sent Successfully!");

      e.target.reset();

    })

    .catch((error) => {

      alert("Failed to Send Message");

      console.log(error);

    });

  };

  return (

    <div className="contact-container" id="contact">

      <h1 className="contact-title">
        Contact Me
      </h1>

      <p className="contact-text">
        Feel free to contact me for projects,
        collaborations, or opportunities.
      </p>

      <div className="contact-box">

        {/* EMAIL */}

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hari904349@gmail.com"
          className="contact-card"
        >

          <FaEnvelope className="contact-icon" />

          <h2>Email</h2>

          <p>
            hari904349@gmail.com
          </p>

        </a>

        {/* LINKEDIN */}

        <a
          href="https://www.linkedin.com/in/hari-haran-115b53355"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <FaLinkedin className="contact-icon" />

          <h2>LinkedIn</h2>

          <p>
            linkedin.com
          </p>

        </a>

        {/* GITHUB */}

        <a
          href="https://github.com/hari904349-byte"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <FaGithub className="contact-icon" />

          <h2>GitHub</h2>

          <p>
            github.com
          </p>

        </a>

      </div>

      {/* FORM */}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <textarea
          name="message"
          placeholder="Enter your message"
          rows="5"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>

  );
}

export default Contact;