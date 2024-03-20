import React from "react";
import "../styles/Header.scss";
import Button from "./Button";
import DarkMode from "./DarkMode";

function Header() {
  return (
    <header>
      <Button txt="VH" />
      <ul>
        <li>À propos</li>
        <li>Compétences</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>
      <DarkMode />
    </header>
  );
}

export default Header;
