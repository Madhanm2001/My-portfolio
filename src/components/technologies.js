import react from "../images/logoreact.webp";
import "../styles/Technologies.css";
import js from "../images/js.svg";
import mongo from "../images/mongo_db.svg"
import ts from "../images/ts.svg"
import node from "../images/Node.js.png"
import express from "../images/express.webp"
import mysql from "../images/mysql.svg"
import firebase from "../images/firebase.svg"
import htmlcss from "../images/html&css.png"
import jwt from "../images/jwt.png"
import sso from "../images/sso.webp"

const techCategories = [
  {
    category: "Programming Languages",
    technologies: [
      { 
        name: "JavaScript",
        logo: js, 
        description: "Versatile scripting language used for both frontend and backend development." 
      },
      { 
        name: "TypeScript", 
        logo: ts, 
        description: "JavaScript with static typing for large-scale application development." 
      },
    ],
  },
  {
    category: "Web Technologies",
    technologies: [
      { 
        name: "React", 
        logo: react, 
        description: "Library for building interactive user interfaces." 
      },
      { 
        name: "HTML & CSS", 
        logo: htmlcss, 
        description: "Foundational technologies for structuring and styling web pages." 
      },
    ],
  },
  
  {
    category: "Backend Technologies",
    technologies: [
      { 
        name: "Node.js", 
        logo: node, 
        description: "JavaScript runtime for building scalable server-side applications." 
      },
      { 
        name: "Express.js", 
        logo: express, 
        description: "Fast, unopinionated framework for Node.js web applications." 
      },
    ],
  },
  {
    category: "Database Management",
    technologies: [
      { 
        name: "MongoDB", 
        logo: mongo, 
        description: "NoSQL database designed for scalability and flexibility." 
      },
    ],
  },
  
];


const TechnologiesSection = () => {
  return (
    <div className="tech-section">
      <h1>Technologies</h1>
      {techCategories.map((category, idx) => (
        <div key={idx} className="tech-category">
          <h2>{category.category}</h2>
          <div className="tech-grid">
            {category.technologies.map((tech, idx) => (
              <div className="tech-card" key={idx}>
                <img src={tech.logo} alt={tech.name} className="tech-logo" />
                <div className="tech-content">
                  <h3>{tech.name}</h3>
                  <p className="tech-content-desc">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesSection;

