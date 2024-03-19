import React from "react";
import "../styles/SectionIntro.scss";
import Button from "./Button";
import profilePic from "../assets/profile-pic.jpeg";

function SectionIntro() {
  return (
    <section className="section__intro">
      <div className="intro__info">
        <h1>Vincent Hertz</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="intro__buttons">
          <Button txt="GitHub" />
          <Button txt="LinkedIn" />
          <Button txt="Télécharger CV" />
        </div>
      </div>
      <div className="intro__picture">
        <img src={profilePic} alt="Profile Picture" />
      </div>
    </section>
  );
}

export default SectionIntro;
