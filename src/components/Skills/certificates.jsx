import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaCertificate,
  FaBuilding,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import icon1 from "../../assets/icon/certificate.png";
import icon2 from "../../assets/icon/quality-control.png";
import icon3 from "../../assets/icon/stamp.png";
import icon4 from "../../assets/icon/medal.png";
import icon5 from "../../assets/icon/charter.png";

import "./certificates.css";

// 📌 Certificates Data
const certificates = [
  {
    title: "Web Development ",
    issuer: "Digital Egypt Initiative (Udacity) ",
    icon: icon1,
    file: "../../../public/Certificates/Udasty Web Developer.pdf",
  },
  {
    title: "Front-End Development ReactJS",
    issuer: "SEF Academy ",
    icon: icon2,
    file: "../../../public/Certificates/SEF.pdf",
  },
  {
    title: " Web Development ",
    issuer: "ITI Institute ",
    icon: icon3,
    file: "../../../public/Certificates/ITI Developer.pdf",
  },
  {
    title: "Front-End Development",
    issuer: "Google Developers Groups on Campus - Al-Azhar University",
    icon: icon4,
    file: "../../../public/Certificates/Web Developer GDGCA.pdf",
  },
  {
    title: "Machine Learning for Data Analysis",
    issuer: "NTI Institute",
    icon: icon5,
    file: "#",
  },
  {
    title: "ITI IOT Developer",
    issuer: "ITI Institute",
    icon: icon1,
    file: "../../../public/ITI IOT Developer.pdf",
  },
];

// 📌 Trainings Data
const trainings = [
  {
    company: "SEF Academy",
    duration: "Web Development",
    details: [
      "Built responsive web interfaces with HTML, CSS, JS, React.",
      "Improved UI/UX with senior developers.",
      "Integrated REST APIs into projects.",
      "Managed state using Hooks & Context API.",
      "Used Agile, Git, and debugging practices.",
      "Ensured performance & cross-browser compatibility.",
    ],
  },
  {
    company: " Google Developers Groups on Campus - Al-Azhar University",
    duration: "Web Development",
    details: [
      "Completed Front-End Development course (Advanced JavaScript).",

      "Gained strong knowledge of JavaScript fundamentals & ES6 features.",

      "Learned advanced JavaScript patterns and best practices.",

      "Practiced Git & GitHub workflows for version control.",

      "Built 3 practical projects applying course concepts.",

      "Delivered capstone project focusing on responsive UI & modular JS.",
    ],
  },
  {
    company: "NTI Institute ",
    duration: "ML For Data Analysis Internship",
    details: [
      "Completed Machine Learning internship at NTI applying ML, DL.",

      "Worked with Python & key ML libraries on real-world datasets.",

      "Performed data collection, cleaning, and EDA to prepare datasets.",

      "Created visualizations & dashboards using Power BI for insights.",

      "Built predictive models with Decision Tree & Random Forest.",

      "Enhanced fraud detection accuracy via feature engineering.",
    ],
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section py-5">
      <Container>
        {/* Certificates Section */}
        <h5 className="section-subtitle">My Achievements</h5>
        <h2 className="section-title">Certificates</h2>

        <Row className="mt-4">
          {certificates.map((cert, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="certificate-card shadow-sm h-100 text-center">
                <Card.Body>
                  <div className="icon-container mb-3">
                    <img
                      src={cert.icon}
                      alt="Certificate Icon"
                      className="certificate-icon"
                    />
                  </div>
                  <Card.Title className="fw-bold titlex">
                    {cert.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    <strong className="textx">{cert.issuer}</strong>
                  </Card.Text>
                  <Button
                    className="btn-cer"
                    variant="primary"
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <hr className="my-5" />

        {/* Trainings Section */}
        <h5 className="section-subtitle">My Practical Experience</h5>
        <h2 className="section-title">Trainings</h2>

        <div className="timeline mt-4">
          {trainings.map((training, index) => {
            let positionClass = "";

           
            if (index === 0 || index === 1) {
              positionClass = "left";
            }

            
            if (index === 2) {
              positionClass = "right top-align";
            }

            return (
              <div className={`timeline-item ${positionClass}`} key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content shadow-sm">
                  <h4>
                    <FaBuilding className="me-2 text-primary" />
                    {training.company}
                  </h4>
                  <p className="text-muted">
                    <FaClock className="me-1" /> {training.duration}
                  </p>
                  <ul>
                    {training.details.map((point, i) => (
                      <li key={i}>
                        <FaCheckCircle className="me-2 text-success" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Certificates;
