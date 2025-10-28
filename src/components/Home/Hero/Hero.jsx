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
  const heroTextRef = useRef(null);
  const heroImgRef = useRef(null);
  const buttonsRef = useRef(null);
  const badgeRef = useRef(null);
  const locationRef = useRef(null);
  const descriptionRef = useRef(null);
  const hrRef = useRef(null);

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

    // Animation for available badge
    if (badgeRef.current) {
      gsap.fromTo(badgeRef.current, 
        { opacity: 0, scale: 0.5 }, 
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }

    // Animation for hero text
    if (heroTextRef.current) {
      gsap.fromTo(heroTextRef.current, 
        { opacity: 0, x: -50 }, 
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      );
    }

    // Animation for location
    if (locationRef.current) {
      gsap.fromTo(locationRef.current, 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );
    }

    // Animation for description paragraph
    if (descriptionRef.current) {
      gsap.fromTo(descriptionRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power2.out" }
      );
    }

    // Animation for hero image
    if (heroImgRef.current) {
      gsap.fromTo(heroImgRef.current, 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
      );
    }

    // Animation for buttons
    if (buttonsRef.current) {
      gsap.fromTo(buttonsRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: "power2.out" }
      );
    }

    // Animation for HR line
    if (hrRef.current) {
      gsap.fromTo(hrRef.current, 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1, delay: 1.2, ease: "power2.out", transformOrigin: "left" }
      );
    }
  }, []);

  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="hero-text" ref={heroTextRef}>
            <div className="available-badge" ref={badgeRef}>
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

            <p className="hero-location" ref={locationRef}>
              <FaMapMarkerAlt className="me-2 text-primary icon-location" />
             <span className="loc-hero">Cairo, Egypt</span> 
            </p>

            <p ref={descriptionRef}>
              Versatile web developer skilled in front-end design using React
              and database management with Microsoft Access. Experienced in machine learning for
              data analysis, enabling smart, data-driven features in web
              projects. Passionate about crafting seamless user experiences and
              staying ahead with emerging technologies.
            </p>
            <div className="hero-buttons" ref={buttonsRef}>
              <Button as={Link} to="/skills" className="Btn-hero1">
                About Me
              </Button>
              <a href="/Yousef-CV.pdf" download="Yousef-CV.pdf">
                <Button className="Btn-hero" variant="outline-dark">
                  <FaDownload /> Download CV
                </Button>
              </a>
            </div>
          </Col>
          <Col md={4} className="hero-img text-center" style={{ display: "flex", justifyContent: "center" }}>
  <img
    ref={heroImgRef}
    src={heroImg}
    alt="Yousef Sabry"
    className="img-fluid rounded-circle shadow"
    style={{ maxWidth: "250px", height: "250px", objectFit: "cover" }}
  />
</Col>
        </Row>
        <hr ref={hrRef}></hr>
      </Container>
    </section>
  );
};

export default Hero;