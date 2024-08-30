import React from "react";
import './ContactPage.css';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Link to="/projects" className="arrow-link-up">
                <FaArrowUp className="arrow-icon-up"/>
            </Link>
            <h1>Contact Me</h1>
            <div className="content-wrapper">
                <div className="contact-info">
                    <a href="mailto:aritrabb@gmail.com" className="contact-link">
                        <FaEnvelope className="contact-icon" />
                        aritrabb@gmail.com
                    </a>
                    <a href="https://github.com/Repositoir" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="contact-icon" />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/aritra-biswas-4ab6b7237/" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="contact-icon" />
                        LinkedIn
                    </a>
                </div>
            </div>
            <p>This website was created using Vite + React.js</p>
        </div>
    );
}

export default ContactPage;
