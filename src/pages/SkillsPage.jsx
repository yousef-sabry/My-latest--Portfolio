import React from "react";
import HeroSection from "../components/Skills/HeroSection";
import SoftSkills from "../components/Skills/SoftSkills";
import LearningJourney from "../components/Skills/LearningJourney";
import Contact from "../components/Skills/Contact";
import Footer from "../components/Skills/Footer";
import Certificates from "../components/Skills/certificates";
// import FrontendSkills from "../components/Skills/FrontendSkills";
// import BackendSkills from "../components/Skills/BackendSkills";
// import ToolsSkills from "../components/Skills/ToolsSkills";
// import ExtraSkills from "../components/Skills/ExtraSkills";

const SkillsPage = () => {
  return (
    <div>
      {/* الهيرو الخاص بالسكيلز */}
      <HeroSection />

      {/* الأقسام المختلفة */}
      <SoftSkills />
      <Certificates />
      {/* <LearningJourney /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default SkillsPage;
