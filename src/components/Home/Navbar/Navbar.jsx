import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { useLocation } from "react-router-dom"; 
import logo from "../../../assets/logos/hacker.png";
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css";

const MyNavbar = () => {

  // ✅ state للتحكم في الـ Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();

  if (location.pathname === "/portfolio") {
    return null; 
  }
  if (location.pathname === "/contact") {
    return null; 
  }

  

  return (
    <>
      <Navbar expand="lg" className="mb-3 shadow-sm fixed-top navbarx">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-top me-2 hacker" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={handleShow} />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" className="home-link" onClick={handleClose}>
                  <span className="icon-mobile links-nav"><FaHome /></span> Home
                </Nav.Link>
                <Nav.Link as={Link} to="/skills" className="home-link" onClick={handleClose}>
                  <span className="icon-mobile"><FaUser /></span> About
                </Nav.Link>
                <Nav.Link as={Link} to="/portfolio" className="home-link" onClick={handleClose}>
                  <span className="icon-mobile"><FaBriefcase /></span> Portfolio
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="home-link" onClick={handleClose}>
                  <span className="icon-mobile"><FaEnvelope /></span> Contact
                </Nav.Link>
                <Nav.Link as={HashLink} smooth to="/skills#certificates" className="home-link" onClick={handleClose}>
                  <span className="icon-mobile"><FaAward /></span> Certificates
                </Nav.Link>
              </Nav>

              {/* أيقونات السوشيال */}
              <div className="navbar-social-icons ms-auto">
                <a href="https://github.com/yousef-sabry" target="_blank" rel="noopener noreferrer" className="social-icon" onClick={handleClose}>
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yousef-sabry-b34a51245" target="_blank" rel="noopener noreferrer" className="social-icon icon-linkedin" onClick={handleClose}>
                  <FaLinkedin />
                </a>
                <a href="https://wa.me/qr/TC33ZDKZ2K75A1" target="_blank" rel="noopener noreferrer" className="social-icon icon-whatsapp" onClick={handleClose}>
                  <FaWhatsapp />
                </a>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
