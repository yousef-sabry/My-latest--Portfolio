import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaAward, FaPhoneAlt } from "react-icons/fa"; // ✅ الايقونات
import { FaCertificate } from "react-icons/fa"; // ✅ ايقونة الشهادة
import { HashLink } from "react-router-hash-link";
import "./PortfolioHero.css";

const PortfolioHero = () => {
  const focusData = [
    {
      title: "Frontend Development",
      text: "Improving my skills in React, HTML, CSS, and JS.",
      icon: "💻",
      tags: ["React", "JavaScript", "Bootstrap"],
    },
    {
      title: "UI/UX Design",
      text: "Enhancing design thinking and responsive interface skills.",
      icon: "🎨",
      tags: ["Figma", "Wireframes", "Responsive"],
    },
    {
      title: "Database Management",
      text: "Built databases, queries, and reports in MS Access.",
      icon: "🗄️",
      tags: ["MS Access", "Reports", "Queries"],
    },
    {
      title: "Problem Solving",
      text: "Sharpening algorithmic thinking and debugging efficiency.",
      icon: "🧠",
      tags: ["DSA", "LeetCode", "Algorithms"],
    },
  ];

  return (
    <section className="portfolio-hero py-5 text-center">
      <Container>
        {/* Title */}
        {/* 🔹 Floating Sidebar Icons */}
        <div className="floating-icons">
          <Link to="/" className="icon-link">
            <FaHome />
          </Link>
          <Link to="/skills" className="icon-link">
            <FaUser />
          </Link>
          <Link to="/contact" className="icon-link">
            <FaPhoneAlt />
          </Link>
          <HashLink
            as={HashLink}
            smooth
            to="/skills#certificates"
            className="icon-link"
          >
          <FaAward />
          </HashLink>
        </div>

        <h5 className="hero-subtitle mb-2">WHAT I’M CURRENTLY IMPROVING</h5>
        <h2 className="hero-title mb-5">My Development Focus</h2>

        {/* Focus Cards */}
        <Row className="justify-content-center">
          {focusData.map((item, index) => (
            <Col
              key={index}
              lg={3}
              md={6}
              sm={12}
              className="mb-4 d-flex justify-content-center"
            >
              <div className="service-card shadow-sm">
                <div className="service-icon">{item.icon}</div>
                <div className="service-card-content">
                  <h5 className="ser-title">{item.title}</h5>
                  <p className="ser-p">{item.text}</p>
                  <div className="tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <hr></hr>
      </Container>
    </section>
  );
};

export default PortfolioHero;
