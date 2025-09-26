import React from "react";
import { FaGraduationCap, FaCode, FaLaptopCode, FaBrain, FaProjectDiagram, FaRocket } from "react-icons/fa";
import "./LearningJourney.css";

const journeyData = [
  {
    year: "August 2022",
    title: "Beginning My Coding Journey",
    description: "Started learning HTML, CSS, and JavaScript fundamentals through online courses and tutorials. Built my first static websites and began to understand the basics of web development.",
    tags:["HTML5", "CSS3", "JavaScript Basics"],
    icon: <FaCode />,
  },
  {
    year: "November 2023",
    title: "Diving into ReactJS",
    description: "After building a foundation with vanilla JavaScript, I began learning React. Started with the core concepts like components, props, and state, then moved on to hooks and more advanced patterns. Simultaneously, I studied data structures and algorithms to improve my problem-solving skills.",
    tags:["ReactJS", "Components", "Hooks"],
    icon: <FaCode />,
  },
  {
    year: "April 2023",
    title: "Exploring Next.js & Tailwind",
    description: "Expanded my skills to include Next.js for its server-side rendering capabilities and Tailwind CSS for rapid UI development. Started building more complex projects with these technologies.",
    tags:["Next.js", "Tailwind CSS", "Responsive Design"],
    icon: <FaLaptopCode />,
  },
  {
    year: " March 2024",
    title: "Machine Learning",
    description: "Worked on datasets like Titanic and ECG heartbeat classification.",
    tags:["Python", "Pandas", "NumPy", "Scikit-Learn"],
    icon:<FaRocket />, 
  },
  {
    year: "Present",
    title: "Continuous Learning & Building",
    description: "Currently focused on deepening my understanding of React and Next.js while exploring TypeScript and state management solutions. Building projects to apply what I’ve learned and discover new challenges.",
    tags:["TypeScript", "Redux", "State Management"],
    icon:<FaBrain />,
  },
 
];

const LearningJourney = () => {
  return (
    <section className="journey-section" id="journey">
      <div className="container">
        <h2 className="section-title">My Learning Journey</h2>
        <div className="timeline">
          {journeyData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                {item.tags && (
  <div className="project-tags">
    {item.tags.map((tag, i) => (
      <span key={i} className="tag">
        {tag}
      </span>
    ))}
  </div>
)}
                
              </div>
            </div>
          ))}
        </div>
        <hr></hr>
      </div>
    </section>
  );
};

export default LearningJourney;
