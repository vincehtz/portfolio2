import React from "react";
import "../styles/Intro.scss";
import Button from "./Button";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__info">
        <h1>Vincent Hertz</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <Button />
        <Button />
        <Button />
      </div>
      <div className="intro__picture"></div>
    </div>
  );
}

export default Intro;
