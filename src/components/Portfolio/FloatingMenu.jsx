import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./FloatingMenu.css";

const FloatingMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="floating-menu d-none d-md-flex">
        <Link to="/"><FaHome /></Link>
        <Link to="/about"><FaUser /></Link>
        <Link to="/projects"><FaProjectDiagram /></Link>
        <Link to="/contact"><FaPhoneAlt /></Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-btn d-md-none">
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="mobile-dropdown">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <FaHome /> Home
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              <FaUser /> About
            </Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              <FaProjectDiagram /> Projects
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <FaPhoneAlt /> Contact
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingMenu;
