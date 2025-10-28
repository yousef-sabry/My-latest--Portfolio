import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FaBuilding, FaClock, FaCheckCircle } from "react-icons/fa";

import icon1 from "../../assets/icon/certificate.png";
import icon2 from "../../assets/icon/quality-control.png";
import icon3 from "../../assets/icon/stamp.png";
import icon4 from "../../assets/icon/medal.png";
import icon5 from "../../assets/icon/charter.png";

import "./certificates.css";

// شهادات (تأكد إن الملفات صور PNG/JPG)
const certificates = [
  {
    title: "Web Development",
    issuer: "Digital Egypt Initiative (Udacity)",
    icon: icon1,
    file: "/Certificates/Udasty-Web-Developer.png",
  },
  {
    title: "Front-End Development ReactJS",
    issuer: "SEF Academy",
    icon: icon2,
    file: "/Certificates/SEF.png",
  },
  {
    title: "Web Development",
    issuer: "ITI Institute",
    icon: icon3,
    file: "/Certificates/ITI-Developer.png",
  },
  {
    title: "Front-End Development",
    issuer: "GDG on Campus - Al-Azhar University",
    icon: icon4,
    file: "/Certificates/WebDeveloperGDGCA.png",
  },
  {
    title: "Machine Learning for Data Analysis",
    issuer: "NTI Institute",
    icon: icon5,
    file: "/Certificates/NTI-ML.png",
  },
  {
    title: "ITI IoT Developer",
    issuer: "ITI Institute",
    icon: icon1,
    file: "/Certificates/ITI-IOT-Developer.png",
  },
];

// تدريبات
const trainings = [
  {
    company: "SEF Academy",
    duration: "Web Development",
    details: [
      "Built responsive web interfaces with React.",
      "Improved UI/UX with senior developers.",
    ],
  },
  {
    company: "GDG on Campus - Al-Azhar University",
    duration: "Front-End Development",
    details: [
      "Advanced JavaScript development.",
      "Completed multiple real-world projects.",
    ],
  },
  {
    company: "NTI Institute",
    duration: "ML For Data Analysis Internship",
    details: [
      "Worked on data preprocessing and ML modeling.",
      "Created insights dashboards using Power BI.",
    ],
  },
];

const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (file) => {
    setSelectedCertificate(file);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section id="certificates" className="certificates-section py-5">
      <Container>
        <h5 className="section-subtitle">My Achievements</h5>
        <h2 className="section-title">Certificates</h2>

        <Row className="mt-4">
          {certificates.map((cert, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="certificate-card shadow-sm h-100 text-center">
                <Card.Body>
                  <div className="icon-container mb-3">
                    <img src={cert.icon} alt="" className="certificate-icon" />
                  </div>

                  <Card.Title className="fw-bold titlex">{cert.title}</Card.Title>
                  <Card.Text className="text-muted">
                    <strong className="textx">{cert.issuer}</strong>
                  </Card.Text>

                  <Button className="btn-cer" onClick={() => openModal(cert.file)}>
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <hr className="my-5" />

        <h5 className="section-subtitle">My Practical Experience</h5>
        <h2 className="section-title">Trainings</h2>

        <div className="timeline mt-4">
          {trainings.map((training, index) => (
            <div className="timeline-item left" key={index}>
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
          ))}
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={closeModal} centered className="fade-modal">
          <Modal.Body className="text-center">
            {selectedCertificate && (
              <img src={selectedCertificate} alt="Certificate" className="modal-certificate-img" />
            )}
            <button className="close-btn" onClick={closeModal}>Close</button>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Certificates;
