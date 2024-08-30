import React from 'react';
import './AboutPage.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // For navigation
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'; // Import arrow icon from react-icons

const AboutPage = () => {
  return (
    <div className="about-page">
      <Link to="/" className="arrow-link-up">
        <FaArrowUp className="arrow-icon-up" />
      </Link>
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            Hi,

            My Name is Aritra Biswas. I am 19 years old and I am currently studying for a B.Sc Artificial Intelligence at Radboud University in Nijmegen, Netherlands. Prior to this I had done a propeduse year in Computer Science at Saxion University of Applied Sciences in Enschede, Netherlands.
            I am an extremely ambitious and passionate person when it comes to technology, software engineering and its related fields. I am an extremely fast learner and a very optimistic outlooker when it comes to research in the space of AI. In this website, you can find my top projects and contact details.
          </p>
        </div>
      </div>
      <Link to="/projects" className="arrow-link-down">
        <FaArrowDown className="arrow-icon-down" />
      </Link>
    </div>
  );
};

export default AboutPage;

