import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { HashLink } from "react-router-hash-link";
import { FaAward } from "react-icons/fa";
import "./ContactPage.css";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_96uzrim",   // ✅ Service ID
        "template_1zrce98",  // ✅ Template ID
        formRef.current,
        "OGNhxEPfzcU3frNcr"  // ✅ Public Key
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="floating-icons">
          <Link to="/" className="icon-link"><FaHome /></Link>
          <Link to="/skills" className="icon-link"><FaUser /></Link>
          <Link to="/portfolio" className="icon-link"><FaProjectDiagram /></Link>
          <HashLink
                      as={HashLink}
                      smooth
                      to="/skills#certificates"
                      className="icon-link"
                    >
                    <FaAward />
                    </HashLink>
        </div>

        <h5 className="section-subtitle">Let's get to work</h5>
        <h2 className="section-title">Contact Me</h2>
        <Row className="align-items-center">
          {/* Left Side - Contact Info */}
          <Col md={5} className="mb-4 mb-md-0">
            <h3 className="fw-bold textn mb-3">Send me a message and it will arrive now</h3>
            <p className="text-muted">
              I’m always thrilled to dive into exciting new projects, explore
              creative ideas, and collaborate to bring unique visions to life.
            </p>
            <div className="contact-info mt-4">
              <p className="pp">
                <FaGithub className="me-2 text-dark" />
                <a href="https://github.com/yousef-sabry">My GitHup</a>
              </p>
              <p className="pp">
                <FaLinkedin className="me-2 text-primary" />
                <a href="https://www.linkedin.com/in/yousef-sabry-b34a51245/">My LinkedIn</a>
              </p>
            </div>
          </Col>

          {/* Right Side - Contact Form */}
          <Col md={7}>

            {status === "success" && (
              <Alert variant="success">✅ Message sent successfully!</Alert>
            )}
            {status === "error" && (
              <Alert variant="danger">❌ Something went wrong, try again.</Alert>
            )}

            <Form ref={formRef} onSubmit={sendEmail}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Subject / Title"
                      className="custom-input"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="custom-input"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="custom-input"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Your Message"
                  className="custom-input"
                  required
                />
              </Form.Group>

              <Button type="submit" className="send-btn w-100 py-2">
                Send Message 🚀
              </Button>
            </Form>
          </Col>
        </Row>
        <hr className="hr"></hr>
        
      </Container>
    </section>
  );
};

export default Contact;
