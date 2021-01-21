import React from "react";
import "./Projects.css";
import Mobile from "../../images/mobile.jpg";
import Computer from "../../images/computer.jpg";
import People from "../../images/people.jpg";

const Projects = () => {
  return (
    <div className="container-projects">
      <h1>The projects I've worked on</h1>
      <p>Want to work together? Email me.</p>
      <div className="projects">
        <img src={Mobile} alt="" />
        <img src={Computer} alt="" />
        <img src={People} alt="" />
      </div>
    </div>
  );
};

export default Projects;
