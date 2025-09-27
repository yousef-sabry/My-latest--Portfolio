import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaReact, FaGithub, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiSupabase } from "react-icons/si";
import reactLogo from "../../assets/logos/react-2.svg";
import reduxLogo from "../../assets/logos/redux.svg";
import htmlLogo from "../../assets/logos/html-1.svg";
import figmaLogo from "../../assets/logos/figma-icon.svg";
import nextLogo from "../../assets/logos/nextjs-icon-svgrepo-com.svg";
import gsapLogo from "../../assets/logos/gsap-greensock.svg";
import materialUi from "../../assets/logos/material-ui-1.svg";
import bootstrap from "../../assets/logos/bootstrap-4.svg";
import tailwind from "../../assets/logos/tailwind-css-2.svg";
import typescript from "../../assets/logos/typescript-2.svg";
import shopify from "../../assets/logos/shopify.svg";
import api from "../../assets/logos/api.png";
import git from "../../assets/logos/git-icon.svg";
import animate from "../../assets/logos/animate.png";
import sass from "../../assets/logos/sass.png";
import cleancode from "../../assets/logos/clean-code.png";
import profilePic from "../../assets/projects-img/me.jpg";
import python from "../../assets/logos/python-5.svg";
import powerbi from "../../assets/logos/Power Bi.jpg";
import docker from "../../assets/logos/docker.svg";
import javascript from "../../assets/logos/javascript-1.svg";
import "./HeroSection.css";




const skillsData = [
  { icon: nextLogo, title: "Next.js", text: "Framework" },
  { icon: bootstrap, title: "Bootstrap CSS", text: "User Interface" },
  { icon: gsapLogo, title: "GSAP", text: "Animation Library" },
  { icon: figmaLogo, title: "Figma", text: "Design Tool" },
  { icon: docker, title: "Docker", text: "Containerization" },
  { icon: sass, title: "SASS", text: "CSS Preprocessor" },
  { icon: htmlLogo, title: "HTML", text: "Interaction" },
  { icon: materialUi, title: "MaterialUI", text: "Component Library" },
  { icon: reactLogo, title: "React", text: "Framework" },
  { icon: tailwind, title: "Tailwind css", text: "User Interface" },
  { icon: powerbi, title: "Power BI", text: "Data Analysis" },
  { icon: typescript, title: "Type script", text: "Interaction" },
  { icon: shopify, title: "Shopify", text: "Shopify style" },
  { icon: javascript, title: "JavaScript", text: "Programming Language" },
  { icon: api, title: "Axios", text: "HTTP Client" },
  { icon: reduxLogo, title: "Redux", text: "State Management" },
  { icon: htmlLogo, title: "HTML", text: "Interaction" },
  { icon: animate, title: "Animation", text: "Animation Tool" },
  { icon: git, title: "Git Hup", text: "Code Management" },
  { icon: python, title: "Paython", text: "programming language" },
  { icon: cleancode, title: "Clean-Code", text: "Codeing" },
 
  
];

const HeroSection = () => {
  return (
    <div className="all-skills-page">
      {/* Hero Section */}
      <section className="skills-hero">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1>
                Hello! I'm <span className="highlight">Yousef Sabry</span> 👋
              </h1>
              <h2>Web Developer | Machine learning | Data Analysis</h2>
              <p>
               Versatile web developer skilled in front-end design using React
              and problem-solving with Java. Experienced in machine learning for
              data analysis, enabling smart, data-driven features in web
              projects. Passionate about crafting seamless user experiences and
              staying ahead with emerging technologies.
              </p>
              <Button
                className="cv-btn"
                variant="outline-dark"
                href="/Software Developer CV.pdf"
                download="Yousef-CV.pdf"
              >
                📄 Download CV
              </Button>
            </Col>
            <Col md={5} className="text-center">
              <div className="profile-img">
                <img
                  src={profilePic}
                  alt="Yousef Sabry"
                  className="img-fluid rounded-circle"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
  <Container>
    <h3 className="section-title1 text-center">What Skills I Have</h3>
    <h2 className="section-title text-center">My Experience</h2>
    <div className="skills-box-centered">
      <div className="skills-grid-centered">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card-centered shadow-sm">
            <div className="skill-icon icon-skills">
              <img src={skill.icon} alt={skill.title} style={{ width: "50px", height: "50px"  }} />
            </div>
            <h5 className="skill-h5">{skill.title}</h5>
            <p className="skill-p">{skill.text}</p>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>
    </div>
  );
};

export default HeroSection;
