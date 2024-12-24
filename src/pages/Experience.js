import React from "react";
import "./styles/Experience.css";

const experiences = [
  {
    company: "Georgia State University",
    title: "Graduate Research Assistant",
    duration: "Aug 2024 — Present",
    description: "As a Graduate Research Assistant, I am actively engaged in a project leveraging Natural Language Processing (NLP) and Machine Learning to design and implement an advanced data modeling framework.",
    skills: ["Python", "NLP", "Ray", "React JS", "Spring Boot", "Docker"],
  },
  {
    company: "Deloitte",
    title: "Solution Delivery Associate",
    duration: "Aug 2021 — Jul 2024",
    description: "Led database migrations, developed machine learning models, and built full-stack applications to solve complex business challenges.",
    skills: ["Neo4J", "Spring Boot", "React", "Tableau", "Prometheus", "IAM"],
  },
  {
    company: "Deloitte",
    title: "Technology Intern",
    duration: "Jan 2021 — Apr 2021",
    description: "Worked on Neo4J databases, Spring Boot applications, and deployed solutions on AWS.",
    skills: ["Neo4J", "Spring Boot", "AWS"],
  },
  {
    company: "Qvantel",
    title: "Software Trainee Intern",
    duration: "Jan 2021 — Apr 2021",
    description: "Developed a React TypeScript application integrating AWS Lex and IAM services.",
    skills: ["React", "TypeScript", "AWS Lex", "IAM"],
  },
];

const Experience = ({ experienceRef }) => (
  <section ref={experienceRef} className="experience">
    <h1 className="experience-title">Work Experience</h1>
    <div className="experience-grid">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-tile">
          <div className="tile-content">
            <h3 className="experience-company">{exp.company}</h3>
            <h4 className="experience-role">{exp.title} · <span>{exp.duration}</span></h4>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-skills">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
