import React from "react";
import "./ProjectsSection.css";
import { FaCheckCircle } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import projectImage1 from "../../assets/projects-img/proj 1.png";
import projectImage2 from "../../assets/projects-img/proj 2.png";
import projectImage3 from "../../assets/projects-img/proj 3.png";
import projectImage4 from "../../assets/projects-img/proj 4.png";
import projectImage5 from "../../assets/projects-img/proj 5.png";
import projectImage6 from "../../assets/projects-img/proj 6.png";
import projectImage7 from "../../assets/projects-img/proj 7.png";
import projectImage8 from "../../assets/projects-img/proj 8.png";
import projectImage9 from "../../assets/projects-img/proj 9.png";
import projectImage10 from "../../assets/projects-img/proj 10.png";
import projectImage11 from "../../assets/projects-img/proj 11.png";
import projectImage12 from "../../assets/projects-img/proj 12.png";
import "./ProjectsSection.css";
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
  {
    id: 5,
    title: "English Dictionary ",
    description:
      "A clean, responsive web app where you can search for any English word and get its definition, phonetics, part of speech, example usage, and pronunciation—all via a free public dictionary API.",
    image: projectImage4,
    tags: ["HTML5", "CSS3", "JavaScript", "API"],
    demoLink: "https://yousef-sabry.github.io/English-Dictionary/",
    detailsLink: "https://github.com/yousef-sabry/English-Dictionary",
  },
  {
    id: 6,
    title: "SHOP.CO — Responsive E-Commerce",
    description:
      "A modern responsive e-commerce frontend website built with HTML, CSS, and JavaScript. Features product listing, dynamic cart system, filtering, and full CRUD operations.",
    image: projectImage5,
    tags: ["ReactJs", "Bootstrap", "Responsive Design"],
    demoLink: "https://yousef-sabry.github.io/GDGC-Al-Azhar-Final-Project/",
    detailsLink: "https://github.com/yousef-sabry/GDGC-Al-Azhar-Final-Project",
  },

   {
    id: 7,
    title: "CryptoApp",
    description:
      "A responsive React.js Currency Tracker & Converter that displays live exchange rates via an external API, with an interactive Chart.js price graph.",
    image: projectImage10,
    tags: ["ReactJs", "Bootstrap5", "Responsive Design" , "API"],
    demoLink: " https://crypto-tracker-ecru-xi.vercel.app/",
    detailsLink: "https://github.com/yousef-sabry/crypto-tracker",
  },

  {
    id: 8,
    title: "React To-Do List App",
    description:
      "To-Do List App: A task management application built with ReactJS, allowing users to add, delete, and filter tasks efficiently. The app features a clean, responsive design suitable for both mobile and desktop devices.",
    image: projectImage6,
    tags: ["HTML5", "CSS3", "JavaScript", "API"],
    demoLink: "https://github.com/yousef-sabry/To-Do-List-React",
    detailsLink: "https://github.com/yousef-sabry/English-Dictionary",
  },
  {
    id: 9,
    title: "Brand Store Landing Page",
    Response: "Desktop-only",
    description: "A desktop-only brand store site built with HTML and CSS.",
    image: projectImage7,
    tags: ["HTML5", "CSS3", "UI/UX", "hover effects "],
    demoLink: "https://yousef-sabry.github.io/English-Dictionary/",
    detailsLink: "https://github.com/yousef-sabry/English-Dictionary",
  },
  {
    id: 10,
    title: "Plant Store Landing Page",
    Response: "Desktop-only",
    description:
      "A simple and stylish landing page for a plant store, designed to highlight products with a clean layout and modern UI. The project focuses on design and branding, providing a desktop-only experience that demonstrates front-end development skills using HTML and CSS.",
    image: projectImage8,
    tags: ["HTML5", "CSS3", "UI/UX", "hover effects "],
    demoLink: "https://yousef-sabry.github.io/Second-project-Plant-Store/",
    detailsLink: "https://github.com/yousef-sabry/Second-project-Plant-Store",
  },
  {
    id: 11,
    title: "Shoe Store Website",
    Response: "Desktop-only",
    description:
      "A desktop-only online shoe store showcase built with responsive HTML & CSS. Displays product categories, images, and navigation between men/women/kids sections.",
    image: projectImage9,
    tags: ["HTML5", "CSS3", "UI/UX", "hover effects "],
    demoLink: "https://yousef-sabry.github.io/second-most-developed-project/",
    detailsLink:
      "https://github.com/yousef-sabry/second-most-developed-project",
  },
];
const DataAnalysis = [
  {
    title: "Housing Dataset Analysis",
    text: [
      "Handled missing values to ensure clean and reliable data.",
      "Applied statistical techniques to detect patterns and trends.",
      "Developed predictive models for forecasting.",
      "Designed clear visualizations to present insights.",
      "Deployed models with Streamlit and created interactive dashboards in Power BI."
    ],
    icon: "🏠",
    tags: ["Pandas", "NumPy", "seaborn", "Matplotlib"],
    link: "https://github.com/yousef-sabry/Final-Project",
  },
  {
    title: "Electronic Payment Fraud Detection ",
    text: [
      "Collected and cleaned raw datasets for analysis.",
      "Preprocessed data to train ML models (Decision Tree & Random Forest).",
      "Evaluated models based on accuracy and performance metrics.",
      "Deployed models with Streamlit and created interactive dashboards in Power BI.",
    ],
    icon: "💳",
    tags: [
      "Pandas",
      
      
      "scikit-learn",
      "Streamlit",
      "Power BI",
    ],
    link: "https://github.com/yousef-sabry"
  },
   {
    title: "customer-churn-prediction",
    text: [
      "Customer Churn Prediction App — a Streamlit app that predicts if a customer will leave.",
      "Built using a Random Forest model for accurate results.",
      "Users enter details and get instant predictions.",
      "Combines ML, data analysis, and a clean UI.",
    ],
    icon: "⚡",
    tags: [
      "Pandas",
      
      
      "scikit-learn",
      "Streamlit",
      "Power BI",
    ],
    link: "https://github.com/yousef-sabry/customer-churn-prediction"
  },
];
const ProjectsSection = () => {
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
                  {[9, 10, 11].includes(project.id) && (
                    <span className="res-span">{project.Response}</span>
                  )}
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
      </div>
      <hr></hr>
      <h5 className="section-subtitle">
        My Recent Work For ML For Data Analysis
      </h5>
      <h2 className="section-title">Projects ML For Data Analysis</h2>
      <Row className="justify-content-center">
        {DataAnalysis.map((item, index) => (
          <Col
            key={index}
            lg={4}
            md={6}
            sm={12}
            className="mb-4 d-flex justify-content-center"
          >
            <div className="analysis-card shadow-sm">
              <div className="analysis-content">
                <div className="service-card-header">
                  <span className="service-icon">{item.icon}</span>
                  <h5 className="service-title">{item.title}</h5>
                </div>

                <ul className="analysis-list">
                  {item.text.map((point, idx) => (
                    <li key={idx} className="analysis-point">
                      <FaCheckCircle className="analysis-check" /> {point}
                    </li>
                  ))}
                </ul>

                <div className="analysis-tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="analysis-tag">
                      {tag}
                    </span>
                  ))}
                    {item.link && (
          <a
            href={item.link}
            target="_blank"
            className="details-link"
            rel="noreferrer"
          >
            View Details →
          </a>
        )}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <hr></hr>
    </section>
  );
};

export default ProjectsSection;
