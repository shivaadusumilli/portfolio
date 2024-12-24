import React from 'react';
import './styles/Skills.css';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaJava } from 'react-icons/fa';
import { SiTensorflow, SiMongodb, SiKubernetes, SiMysql, SiScikitlearn, SiJavascript, SiCplusplus, SiApachespark, SiPandas, SiNumpy, SiCodecrafters } from 'react-icons/si';

const skillsData = [
  {
    category: "Data Science",
    skills: [
      { name: "Spark", expertise: "Intermediate", icon: <SiApachespark /> },
      { name: "TensorFlow", expertise: "Beginner", icon: <SiTensorflow /> },
      { name: "Scikit-learn", expertise: "Intermediate", icon: <SiScikitlearn /> },
      { name: "Pandas", expertise: "Expert", icon: <SiPandas /> },
      { name: "Numpy", expertise: "Expert", icon: <SiNumpy /> },
      { name: "Ray", expertise: "Intermediate", icon: <SiCodecrafters /> },
    ],
  },
  {
    category: "IAM (Identity & Access Management)",
    skills: [
      { name: "ForgeRock", expertise: "Expert", icon: <SiCodecrafters /> },
      { name: "Ping Identity", expertise: "Intermediate", icon: <SiCodecrafters /> },
      { name: "SAML", expertise: "Intermediate", icon: <SiCodecrafters /> },
      { name: "OIDC", expertise: "Intermediate", icon: <SiCodecrafters /> },
      { name: "OAuth", expertise: "Intermediate", icon: <SiCodecrafters /> },
    ],
  },
  {
    category: "Full Stack Development",
    skills: [
      { name: "React JS", expertise: "Intermediate", icon: <FaReact /> },
      { name: "Node.js", expertise: "Intermediate", icon: <FaNodeJs /> },
      { name: "MongoDB", expertise: "Intermediate", icon: <SiMongodb /> },
      { name: "MySQL", expertise: "Expert", icon: <SiMysql /> },
      { name: "Spring Boot", expertise: "Expert", icon: <SiCodecrafters /> },
    ],
  },
  {
    category: "Tools & Cloud Technologies",
    skills: [
      { name: "AWS", expertise: "Intermediate", icon: <FaAws /> },
      { name: "Docker", expertise: "Expert", icon: <FaDocker /> },
      { name: "Kubernetes", expertise: "Intermediate", icon: <SiKubernetes /> },
      { name: "Jenkins", expertise: "Beginner", icon: <SiCodecrafters /> },
      { name: "Octopus", expertise: "Beginner", icon: <SiCodecrafters /> },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", expertise: "Expert", icon: <FaPython /> },
      { name: "Java", expertise: "Expert", icon: <FaJava /> },
      { name: "JavaScript", expertise: "Expert", icon: <SiJavascript /> },
      { name: "GoLang", expertise: "Beginner", icon: <SiCodecrafters /> },
      { name: "C++", expertise: "Expert", icon: <SiCplusplus /> },
    ],
  },
];

const Skills = ({skillsRef}) => (
  <section ref={skillsRef} className="skills">
    <h1 className="skills-heading">Key Skills & Expertise</h1>
    <div className="skills-container">
      {skillsData.map((category, index) => (
        <div key={index} className="skills-column">
          <h3>{category.category}</h3>
          {category.skills.map((skill, idx) => (
            <div key={idx} className="skill-bar">
              <div className="skill-info">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.expertise}</span>
              </div>
              <div className="skill-progress">
              <div
                className="skill-progress-filled"
                style={{
                    width:
                    skill.expertise === "Expert"
                        ? "90%"
                        : skill.expertise === "Intermediate"
                        ? "65%"
                        : "40%",
                }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
