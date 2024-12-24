import React from 'react';
import './styles/About.css';

const About = ({aboutRef}) => (
  <section ref={aboutRef} className="about">
    <div className="about-container">
      <div className="about-photo-container">
        <img src="shivapic.jpg" alt="Your Name" className="about-photo" />
      </div>
      <div className="about-description">
      <h1 className="about-heading">Passion and Purpose</h1>


<p className="about-description">
Curiosity is my fuel, and innovation is my compass. With over 7 years of experience in coding and problem-solving, I’ve committed my career to leveraging technology to create meaningful solutions. My journey spans Data Science, Full Stack Development, and Identity & Access Management (IAM), where I thrive on turning challenges into opportunities for impact.
<br/> <br/>
At Deloitte, I had the privilege of working with Fortune Top 10 clients, leading transformative projects such as rearchitecting database systems, implementing risk-based authentication models, and building full-stack applications that addressed critical business needs. These experiences strengthened my resolve to never stop learning and improving.
<br/> <br/>
Currently, I’m pursuing a Master’s degree in Data Science at Georgia State University while working as a Graduate Research Assistant. Every day, I challenge myself to learn something new—if you ever meet me in person, ask me what I learned today, and I promise you a thoughtful answer.
<br/> <br/>
I am actively seeking summer internship opportunities to solve real-world problems.
</p>


      </div>
    </div>
  </section>
);

export default About;
