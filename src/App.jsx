import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Home/Navbar/Navbar";
import Hero from "./components/Home/Hero/Hero";
import Skills from "./components/Home/Skills/Skills";
import Projects from "./components/Home/Projects/Projects";
import Contact from "./components/Home/Contact/Contact";
import Footer from "./components/Home/Footer/Footer";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";

// import AllSkills from "./components/AllSkills-Aboutme/AllSkills"; // صفحة about/skills الجديدة
import "bootstrap/dist/css/bootstrap.min.css";
import ContactMePage from "./pages/ContactMePage";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* صفحة about/skills */}
        <Route path="/skills" element={<SkillsPage />} />
        {/* صفحة Portfolio */}
        <Route path="/portfolio" element={<PortfolioPage />} />

        {/* صفحة Contact */}
        <Route path="/contact" element={<ContactMePage />} />

      </Routes>
    </Router>
  );
}

export default App;
