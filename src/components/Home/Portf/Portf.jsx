import React from "react";
import "./Portf.css";
import projectImage1 from "../../../assets/projects-img/proj 1.png";
import projectImage2 from "../../../assets/projects-img/proj 2.png";
import projectImage3 from "../../../assets/projects-img/proj 3.png";
import projectImage5 from "../../../assets/projects-img/proj 4.png";
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
    title: "Full-Stack Campus Management System",
    description:
      "Graduation project developed using React for the front-end and .NET for the back-end. This project demonstrates a full-stack application with a focus on performance, scalability, and modern design principles.",
    image: projectImage3,
    tags: ["React.js", "Vite", "Bootstrap", "JavaScript"],
    detailsLink: "https://github.com/yousef-sabry/College-Graduation-Project",
  },
  {
    id: 4,
    title: "English Dictionary ",
    description:"A clean, responsive web app where you can search for any English word and get its definition, phonetics, part of speech, example usage, and pronunciation—all via a free public dictionary API.",
    image: projectImage5,
    tags: ["HTML5", "CSS3", "JavaScript", "API"],
    demoLink: "https://yousef-sabry.github.io/English-Dictionary/",
    detailsLink: "https://github.com/yousef-sabry/English-Dictionary",
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
                    {project.demoLink && project.id !== 3 && (
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
