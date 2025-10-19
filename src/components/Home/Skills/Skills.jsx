import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCode, FaMobileAlt, FaPaintBrush  } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import reactLogo from "../../../assets/logos/react-2.svg";
import reduxLogo from "../../../assets/logos/redux.svg";
import vitejs from "../../../assets/logos/vitejs.svg";
import nextLogo from "../../../assets/logos/nextjs-icon-svgrepo-com.svg";
import materialUi from "../../../assets/logos/material-ui-1.svg";
import bootstrap from "../../../assets/logos/bootstrap-4.svg";
import access from "../../../assets/logos/microsoft-access-1.svg";
import python from "../../../assets/logos/python-5.svg";
import "./Skills.css";

const servicesData = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "Building responsive and dynamic websites using modern technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Machine learning | Data Analysis",
    text: "Machine learning and data analysis to extract insights and build models.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    text: "Experienced in designing, managing, and maintaining databases using Microsoft Access (tables, queries, forms, reports)",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    text: "Designing clean, modern, and user-friendly interfaces.",
  },
  {
    icon: <FaJava />,
    title: "Problem Solving",
    text: "Strong problem-solving skills using Java, including implementing algorithms and data structures to solve real-world challenges.",
  },
];

const skillsData = [
  { icon: nextLogo, title: "Next.js", text: "Framework" },
  { icon: reactLogo, title: "React", text: "Framework" },
  { icon: bootstrap, title: "Bootstrap CSS", text: "User Interface" },
  { icon: python, title: "Paython", text: "programming language" },
  { icon: vitejs, title: "Vite", text: " Build Tool" },
  { icon: reduxLogo, title: "Redux", text: "State Management" },
  { icon: access, title: "Aicrosoft Access", text: "Database Management" },
  { icon: materialUi, title: "MaterialUI", text: "Component Library" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Container className="skills-container">
        <h5 className="skills-subtitle text-center title-h5">
          WHAT SKILLS I HAVE
        </h5>
        <h2 className="skills-title text-center">My Experience</h2>

        <Row className="mt-4">
          {skillsData.map((skill, index) => (
            <Col key={index} md={3} sm={6} className="mb-4">
              <div className="skill-card shadow-sm">
                <div className="skill-icon icon-skills">
                  <img src={skill.icon} alt={skill.title} style={{ width: "50px", height: "50px" }} />
                </div>
                <h5>{skill.title}</h5>
                <p>{skill.text}</p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button href="/skills" className="all-skills-btn">
            All Skills →
          </Button>
        </div>
<hr></hr>
        <h5 className="services-subtitle title-h55 ">WHAT I OFFER</h5>
        <h2 className="services-title skills-title">Services</h2>

        <Row className="mt-4">
          {servicesData.map((service, index) => (
            <Col
              key={index}
              lg={4}
              md={6}
              sm={12}
              className="mb-4 d-flex justify-content-center"
            >
              <div className="service-card shadow-sm">
                <div className="service-icon icon-ser">{service.icon}</div>
                <div className="service-card-content">
                  <h5 className="ser-title" >{service.title}</h5>
                  <p className="ser-p">{service.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
