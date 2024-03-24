import React from "react";
import "../styles/SectionIntro.scss";
import Button from "./Button";
import profilePic from "../assets/profile-pic.jpeg";

function SectionIntro() {
  return (
    <section id="intro" className="section__intro">
      <div className="intro__info">
        <h1>Vincent Hertz</h1>
        <p>Developpeur Web Frontend</p>
        <div className="intro__buttons">
          <Button txt="GitHub" link="https://github.com/vincehtz" />
          <Button
            txt="LinkedIn"
            link="https://www.linkedin.com/in/vincent-hertz-227a569b/"
          />
          <Button txt="Mon CV" link="./CV_VincentHertz.pdf" />
        </div>
      </div>
      <img src={profilePic} alt="Profile Picture" />
    </section>
  );
}

export default SectionIntro;
