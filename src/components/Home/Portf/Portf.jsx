import React from "react";
import "./Portf.css";
import projectImage1 from "../../../assets/projects-img/proj 1.png";
import projectImage2 from "../../../assets/projects-img/proj 2.png";
import projectImage12 from "../../../assets/projects-img/proj 12.png";
import projectImage11 from "../../../assets/projects-img/proj 11.png";

import { Button } from "react-bootstrap";

const projectsData = [
  {
    id: 1,
    title: "Build E-Commerce App",
    description:
      "• Developed a modern, scalable, and responsive e-commerce platform with product listing, cart functionality, and efficient state management. • Applied best practices in code organization, modular design, and reusable components to enhance maintainability, scalability, and performance.",
    image: projectImage1,
    tags: [
      "React",
      "Type Script",
      "Bootstrap",
      "Redux Toolkit ",
      "Responsive Design",
    ],
    demoLink: "https://github.com/yousef-sabry/Our-Ecom-",
    detailsLink: "https://github.com/yousef-sabry/Our-Ecom-",
    highlight: true,
  },
  {
    id: 2,
    title: "Egypt Travel Guide",
    description:
      "A responsive website that showcases Egypt’s top tourist destinations with images and modern design, offering an engaging and user-friendly experience.",
    image: projectImage2,
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "javaScript",
      "Custom Fonts & Images",
    ],
    demoLink: "https://yousef-sabry.github.io/third-project/",
    detailsLink: "https://github.com/yousef-sabry/third-project",
  },
  {
    id: 3,
    title: "Gym-Management-System (React + Vite)",
    description:
      "🏋️‍♂️Gym Management System A modern web app built with React + Vite for managing gym operations. Includes Admin and Member Dashboards, authentication, and role-based access with a clean, animated, and responsive design.",
    image: projectImage11,
    tags: ["React.js","Bootstrap5", "Context Api", "State Management","Local Storage"],
    demoLink: "https://gym-management-system-five-peach.vercel.app/",
    detailsLink: "https://github.com/yousef-sabry/gym-management-system",
  },
  
  {
     id: 4,
     title: "Weather App",
     description:
       "Weather App: A responsive web application that lets users check the current weather for any city using the OpenWeather API, featuring smooth animations and an easy-to-use interface.",
     image: projectImage12,
     tags: ["React.js","Bootstrap5", "Axios", "GSAP"],
     demoLink: "https://weather-app-lyart-six-30.vercel.app/",
     detailsLink: "https://github.com/yousef-sabry/Weather-App",
   },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h5 className="section-subtitle">My Recent Work</h5>
        <h2 className="section-title">Projects</h2>

        {/* Project Highlight */}
        {projectsData
          .filter((p) => p.highlight)
          .map((project) => (
            <div key={project.id} className="project-highlight">
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noreferrer">
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.detailsLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          ))}

        {/* Other Projects Grid */}
        <div className="projects-grid">
          {projectsData
            .filter((p) => !p.highlight)
            .map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="card-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.demoLink && project.id !== 7 && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        🔗 Live Demo
                      </a>
                    )}
                    <a
                      href={project.detailsLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-4">
          <Button href="/portfolio" className="all-skills-btn">
            All Project →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
