import React from 'react';
import './styles/About.css';

// Skill data
const skillsData = [
  {
    category: "Data Science",
    skills: [
      { name: "Spark", percentage: 80 },
      { name: "Ray", percentage: 75 },
      { name: "Scikit-learn", percentage: 85 },
      { name: "Pandas", percentage: 90 },
      { name: "NumPy", percentage: 88 },
      { name: "TensorFlow", percentage: 92 },
    ],
  },
  {
    category: "IAM (Identity & Access Management)",
    skills: [
      { name: "ForgeRock", percentage: 85 },
      { name: "Ping Identity", percentage: 80 },
      { name: "Active Directory", percentage: 75 },
      { name: "SAML", percentage: 70 },
      { name: "OIDC", percentage: 65 },
      { name: "OAuth", percentage: 78 },
      { name: "ETL", percentage: 83 },
    ],
  },
  {
    category: "Full Stack Development",
    skills: [
      { name: "React JS", percentage: 90 },
      { name: "Spring Boot", percentage: 85 },
      { name: "Node.js", percentage: 88 },
      { name: "MongoDB", percentage: 87 },
      { name: "MySQL", percentage: 80 },
    ],
  },
  {
    category: "Tools & Cloud Technologies",
    skills: [
      { name: "Git", percentage: 95 },
      { name: "Docker", percentage: 90 },
      { name: "Kubernetes", percentage: 85 },
      { name: "Azure", percentage: 80 },
      { name: "AWS", percentage: 88 },
      { name: "Jenkins", percentage: 82 },
      { name: "Octopus", percentage: 75 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", percentage: 95 },
      { name: "Java", percentage: 85 },
      { name: "C++", percentage: 80 },
      { name: "SQL", percentage: 85 },
      { name: "JavaScript", percentage: 90 },
      { name: "TypeScript", percentage: 88 },
      { name: "GoLang", percentage: 75 },
    ],
  },
];

const About = ({ aboutRef }) => (
  <section ref={aboutRef} className="about">
    <h1 className="about-heading">About Me</h1>
    <div className="about-container">
      <div className="about-left">
        <img src="shivapic.jpg" alt="Your Name" className="about-photo" />
        <div className="about-description">
          <p>
            I have spent 7+ years building my skills in coding and working across Data Science, Full Stack Development, and IAM. At Deloitte, I worked with Fortune Top 10 clients, leading projects such as database migrations, risk-based authentication, creating full-stack applications, and developing custom scripts as per client requirements.
          </p>
          <p>
            I am currently pursuing a Master’s degree in Data Science at Georgia State University while working as a Graduate Research Assistant, designing state-of-the-art AI models and developing their architectures to solve complex challenges. 
          </p>
          <p>
            I am actively seeking summer internship opportunities to apply my skills in advanced technology and problem-solving across key areas of expertise.
          </p>
        </div>
      </div>

      <div className="about-right">
        <h2 className="skills-heading">Key Skills & Expertise</h2>
        <div className="skills-split">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`skills-column ${index % 2 === 0 ? "row-start" : ""}`}
            >
              <h3>{category.category}</h3>
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-bar">
                  <span className="skill-title">{skill.name}</span>
                  <div className="skill-progress-bar">
                    <span style={{ width: `${skill.percentage}%` }}></span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
