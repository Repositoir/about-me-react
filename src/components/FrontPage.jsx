import React from 'react';
import './FrontPage.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Assuming you use react-router for navigation
import { FaArrowDown } from 'react-icons/fa'; // Import arrow icon from react-icons

const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="text-section">
        <h1 className="name">Aritra Biswas</h1>
        <p className="university">Student at Radboud University</p>
      </div>
      <div className="image-section">
        <img src="./pcture.jpg" alt="Aritra Biswas Pic" className="profile-pic" />
      </div>
      <Link to="/about" className="arrow-link">
        <FaArrowDown className="arrow-icon" />
      </Link>
    </div>
  );
};

export default FrontPage;



