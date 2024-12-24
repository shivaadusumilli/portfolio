import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = ({contactRef}) => (
  <div ref={contactRef} className="contact">
    <h1 className="contact-heading">Get in Touch</h1>
    <div className="contact-details">
      <div className="contact-item">
        <FaPhoneAlt className="contact-icon" />
        <span>
          <strong>Mobile:</strong>{" "}
          <a href="tel:+9039909896">903 990 9896</a>
        </span>
      </div>
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <span>
          <strong>Email:</strong>{" "}
          <a href="mailto:ashivamadhav@gmail.com">ashivamadhav@gmail.com</a>
        </span>
      </div>
      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <span>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/shiva-madhav-adusumilli-8b74b6169/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </span>
      </div>
      <div className="contact-item">
        <FaGithub className="contact-icon" />
        <span>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/shivaadusumilli"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default Contact;
