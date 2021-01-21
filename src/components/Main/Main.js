import React from "react";
import Portrait from "../../images/portrait.jpg";
import "./Main.css";

const Main = () => {
  return (
    <div className="container-main">
      <div className="title">
        <h1>Front-end & Back-end Developer</h1>
      </div>
      <div className="subtitle">
        <h2>
          I enjoy overcoming my obstacles and creating new things as I code.
        </h2>
      </div>
      <div className="portrait">
        <img src={Portrait} width="200px" /> {/*FIX IT SOON */}
      </div>
    </div>
  );
};

export default Main;
