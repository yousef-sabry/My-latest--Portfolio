import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaDownload,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";
import { gsap } from "gsap";
import "./Hero.css";
import { Link } from "react-router-dom";
// استيراد الصورة
import heroImg from "../../../assets/projects-img/hero 2.jpg";

const Hero = () => {
  const handRef = useRef(null);

  useEffect(() => {
    if (handRef.current) {
      gsap.to(handRef.current, {
        rotate: 20, 
        duration: 0.4,
        repeat: -1,
        yoyo: true, 
        transformOrigin: "bottom center",
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="hero-text">
            <div className="available-badge">
              <FaCheckCircle className="me-2" />
              <span> Available For Work</span>
            </div>
            <h1>
              Hi, I’m Yousef Sabry{" "}
              <span
                ref={handRef}
                role="img"
                aria-label="hand"
                style={{ display: "inline-block" }} // عشان يدعم الحركة
              >
                👋
              </span>
            </h1>
            <h2>Web Developer | Machine learning | Data Analysis</h2>

            <p className="hero-location">
              <FaMapMarkerAlt className="me-2 text-primary icon-location" />
             <span className="loc-hero">Cairo, Egypt</span> 
            </p>

            <p>
              Versatile web developer skilled in front-end design using React
              and database management with Microsoft Access. Experienced in machine learning for
              data analysis, enabling smart, data-driven features in web
              projects. Passionate about crafting seamless user experiences and
              staying ahead with emerging technologies.
            </p>
            <div className="hero-buttons">
              <Button as={Link} to="/skills" className="Btn-hero1">
                About Me
              </Button>
              <a href="/cv.pdf" download="Yousef-CV.pdf">
                <Button className="Btn-hero" variant="outline-dark">
                  <FaDownload /> Download CV
                </Button>
              </a>
            </div>
          </Col>
          <Col md={4} className="hero-img text-center" style={{ display: "flex", justifyContent: "flex-start" }}>
  <img
    src={heroImg}
    alt="Yousef Sabry"
    className="img-fluid rounded-circle shadow"
    style={{ maxWidth: "250px", height: "250px", objectFit: "cover" }}
  />
</Col>
        </Row>
        <hr></hr>
      </Container>
    </section>
  );
};

export default Hero;