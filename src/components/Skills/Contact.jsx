import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect & Create Together</h2>
        <p className="contact-text">
          I'm always looking for opportunities to collaborate, learn, and create. 
          Whether you have a project in mind or just want to connect, I'd love to hear from you!
        </p>
         <div className="contact-buttons">
                  
                  <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
                  <a 
                    href="https://github.com/yousef-sabry" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-outline"
                  >
                    <FaGithub className="btn-icon" /> View My GitHub
                  </a>
                </div>
      </div>
      
    </section>
  );
};

export default Contact;
