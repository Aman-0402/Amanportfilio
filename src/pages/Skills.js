// src/components/Skills.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faAngular,
  faBootstrap,
  faReact,
  faPython,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faLaptopCode,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import {
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiVisualstudiocode,
  SiPowerbi,
} from "react-icons/si";
import { FaMicrosoft, FaGoogleDrive, FaLaptopCode } from "react-icons/fa";
import {
  SiSpringboot,
  SiDjango,
  SiNumpy,
  SiPandas,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { SiGit, SiLinux } from "react-icons/si";

import "./Skills.css";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate(); // Ensure navigate is defined here
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h1 className="skills-heading">My Skills</h1>

        {/* Technology Section */}
        <div className="skills-category">
          <h2>Technology</h2>
          <div className="skills-icons">
            <div className="skill">
              <FontAwesomeIcon icon={faLaptopCode} size="8x" />
              <p>Full Stack Web Development</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faProjectDiagram} size="8x" />
              <p>Artificial Intelligence & Machine Learning</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faDatabase} size="8x" />
              <p>Data Analytics</p>
            </div>
          </div>
        </div>

        {/* Programming Section */}
        <div className="skills-category">
          <h2>Programming</h2>
          <div className="skills-icons">
            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="8x" />
              <p>Python</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faJs} size="8x" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faNodeJs} size="8x" />
              <p>Node.js</p>
            </div>
            {/* Add other programming languages similarly */}
          </div>
        </div>

        {/* Frontend Stack */}
        <div className="skills-category">
          <h2>Frontend Stack</h2>
          <div className="skills-icons">
            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} size="8x" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faCss3Alt} size="8x" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="8x" />
              <p>React</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faAngular} size="8x" />
              <p>Angular</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faBootstrap} size="8x" />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>

        {/* Database Technology */}
        <div className="skills-category">
          <h2>Database Technology</h2>
          <div className="skills-icons">
            <div className="skill">
              <SiMysql size="2x" className="mysql-icon" />
              <p>MySQL</p>
            </div>
            <div className="skill">
              <SiMongodb size="2x" className="mongodb-icon" />
              <p>MongoDB</p>
            </div>
            <div className="skill">
              <SiPostgresql size="2x" className="postgresql-icon" />
              <p>PostgreSQL</p>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h2>Software</h2>
          <div className="skills-icons">
            <div className="skill">
              <SiVisualstudiocode size="2x" />
              <p>VS Code</p>
            </div>
            <div className="skill">
              <SiPowerbi size="2x" />
              <p>Power BI</p>
            </div>
            <div className="skill">
              <FaMicrosoft size="2x" />
              <p>MS Office</p>
            </div>
            <div className="skill">
              <FaGoogleDrive size="2x" />
              <p>Google Colab</p>
            </div>
            <div className="skill">
              <FaLaptopCode size="2x" />
              <p>PyCharm</p>
            </div>
          </div>
        </div>

        {/* Frameworks/Libraries */}
        <div className="skills-category">
          <h2>Frameworks/Libraries</h2>
          <div className="skills-icons">
            <div className="skill">
              <SiSpringboot size="3x" />
              <p>Spring Boot</p>
            </div>
            <div className="skill">
              <SiDjango size="3x" />
              <p>Django</p>
            </div>
            <div className="skill">
              <SiNumpy size="3x" />
              <p>Numpy</p>
            </div>
            <div className="skill">
              <SiPandas size="3x" />
              <p>Pandas</p>
            </div>
            <div className="skill">
              <SiNodedotjs size="3x" />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <SiExpress size="3x" />
              <p>Express</p>
            </div>
          </div>
        </div>

        {/* Relevant Skills */}
        <div className="skills-category">
          <h2>Relevant Skills</h2>
          <div className="skills-icons">
            <div className="skill">
              <SiGit size="3x" />
              <p>Git & GitHub</p>
            </div>
            <div className="skill">
              <SiLinux size="3x" />
              <p>Linux/Unix</p>
            </div>
            
            
          </div>
        </div>
      </div>
      <div className="back-home-container">
        <center>
          <button onClick={() => navigate("/")} className="back-home-button">
            Back to Home
          </button>
        </center>
      </div>
    </section>
  );
};

export default Skills;
