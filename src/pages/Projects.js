import React from 'react';
import './styles/Projects.css';

const projectsData = [
  {
    title: "Project One",
    description: "A brief description of the project.",
    image: "shivapic1.jpg",
    liveLink: "https://example.com/project1",
  },
  {
    title: "Project Two",
    description: "A brief description of the project.",
    image: "shivapic1.jpg",
    liveLink: "https://example.com/project2",
  },
  {
    title: "Project Three",
    description: "A brief description of the project.",
    image: "shivapic1.jpg",
    liveLink: "https://example.com/project3",
  },
];

const Projects = ({ projectsRef }) => (
  <section ref={projectsRef} className="projects">
    <h1 className="projects-heading">My Projects</h1>
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="project-card"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="project-overlay">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <button className="project-button">Live App</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
