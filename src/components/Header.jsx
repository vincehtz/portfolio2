import React from "react";
import "../styles/Header.scss";
import Button from "./Button";
import DarkMode from "./DarkMode";

function Header() {
  return (
    <header>
      <Button txt="VH" />
      <nav>
        <ul>
          <li>
            <a href="#about" className="nav__link">
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" className="nav__link">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" className="nav__link">
              Projets
            </a>
          </li>
        </ul>
      </nav>

      <DarkMode />
    </header>
  );
}

export default Header;
