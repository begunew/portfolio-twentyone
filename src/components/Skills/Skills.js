import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="container-skills">
        <div className="container-big">
          <div className="column left">
            <h1>Front-end Developer</h1>
            <p>Languages I speak: </p>
            <p>ReactJS, HTML, CSS, JS.</p>
          </div>
          <div className="column">
            <h1>Back-end Developer</h1>
            <p>Languages I speak: </p>
            <p>NodeJS, ExpressJS, PHP, MySQL, MongoDB.</p>
          </div>
          <div className="column right">
            <h1>DevTools</h1>
            <p>The tools I use:</p>
            <p>VS Code, Github, Bootstrap, Terminal.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
