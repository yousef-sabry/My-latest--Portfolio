import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUsers, FaPuzzlePiece, FaComments, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import "./SoftSkills.css";

const softSkills = [
  { icon: <FaUsers />, title: "Teamwork", desc: "Ability to collaborate effectively with others." },
  { icon: <FaPuzzlePiece />, title: "Problem Solving", desc: "Strong analytical and logical thinking skills." },
  { icon: <FaComments />, title: "Communication", desc: "Clear and effective communication skills." },
  { icon: <FaChalkboardTeacher />, title: "Leadership", desc: "Experience leading teams and mentoring peers." },
  { icon: <FaClock />, title: "Time Management", desc: "Ability to prioritize tasks and meet deadlines." },
];

const SoftSkills = () => {
  return (
    <section className="softskills-section">
      <Container>
        <h2 className="section-title">Soft Skills</h2>
        <Row>
          {softSkills.map((skill, index) => (
            <Col xs={12} sm={6} lg={4} key={index} className="mb-4">
              <Card className="softskill-card shadow-sm h-100">
                <Card.Body className="d-flex flex-column align-items-center text-center">
                  <div className="softskill-icon">{skill.icon}</div>
                  <Card.Title>{skill.title}</Card.Title>
                  <Card.Text>{skill.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SoftSkills;
