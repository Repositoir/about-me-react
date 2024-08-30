import React from "react";
import './GitProjects.css';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaArrowDown, FaGithub, FaYoutube, FaGooglePlay } from "react-icons/fa";

const GitProjects = () => {
    return (
        <div className="projects-page">
            <Link to="/about" className="arrow-link-up">
                <FaArrowUp className="arrow-icon-up" />
            </Link>
            <h1 className="projects-title">My Projects</h1>
            <div className="content-wrapper">
                <div className="projects-list">
                    {/* Example Project with multiple links */}
                    <div className="project-card">
                    <img src="./refract.jpg" alt="Aritra Biswas Pic" className="profile-pic" />
                        <h2 className="project-title">Refract</h2>
                        <p className="project-description">
                            Refract is a work-in-progress programming langauge that I have created that aims to help developers in all fields but more specifically AI. It is written in C++ and is a dynamically-typed and an interpreted langauge. It is open-source.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/Repositoir/refract" className="github-link" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="github-icon" /> Source Code on GitHub
                            </a>
                        </div>
                    </div>

                    <div className="project-card">
                    <img src="./appicon.png" alt="Aritra Biswas Pic" className="profile-pic" />
                        <h2 className="project-title">Plethora</h2>
                        <p className="project-description">
                            Plethora is a reading assistant app created using the .NET MAUI framework that helps improve reading experiences for its users. It contains book recommendations, time-focused reading and reflection on your reading expereinces. This app was created for the Code4TheFuture hackathon in devpost.com.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/Repositoir/plethora" className="github-link" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="github-icon" /> GitHub Code Repository
                            </a>
                            <a href="https://www.youtube.com/watch?v=G67ksZ00ZQo" className="youtube-link" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="youtube-icon" /> YouTube Demo Video
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.developers.plethora&pli=1" className="playstore-link" target="_blank" rel="noopener noreferrer">
                                <FaGooglePlay className="playstore-icon" /> Google Play Store App
                            </a>
                        </div>
                    </div>

                    <div className="project-card">
                    <img src="./malware.jpg" alt="Aritra Biswas Pic" className="profile-pic" />
                        <h2 className="project-title">Malware Development</h2>
                        <p className="project-description">
                            In this project, I decided to learn the Windows API and learn about processes, threads and executable to be able to develop malware for the Windows OS using process injection. A further deep-dive into Win32 API is also made in this project. Please read the README.md on the GitHub repo for detailed information.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/Repositoir/malware-dev" className="github-link" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="github-icon" /> Malware Development on GitHub
                            </a>
                        </div>
                    </div>

                    <div className="project-card">
                    <img src="./projectsoftware.jpg" alt="Aritra Biswas Pic" className="profile-pic" />
                        <h2 className="project-title">Project Software</h2>
                        <p className="project-description">
                            This was a curriculum-based team project undertaken when I was in Saxion University of Applied Sciences where we created a working proof-of-concept of a safe/vault on a breadboard using an Arduino microcontroller and other electronics components.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/Repositoir/project-software" className="github-link" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="github-icon" /> Information Repo on GitHub
                            </a>
                        </div>
                    </div>

                    <div className="project-card">
                    <img src="./car.jpg" alt="Aritra Biswas Pic" className="profile-pic" />
                        <h2 className="project-title">Project System</h2>
                        <p className="project-description">
                            Another curriculum based team project at Saxion University of Applied Sciences where we attempted to create a working autonomous electric car which followed a designated path, avoided obstacles and inclinations. 
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/Repositoir/project-system" className="github-link" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="github-icon" /> View on GitHub
                            </a>
                        </div>
                    </div>

                    {/* Add more project cards similarly */}
                </div>
            </div>
            <Link to="/contact" className="arrow-link-down">
                <FaArrowDown className="arrow-icon-down" />
            </Link>
        </div>
    );
}

export default GitProjects;

