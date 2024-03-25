import React from "react";
import "../styles/Header.scss";
import Button from "./Button";
import DarkMode from "./DarkMode";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header>
      <Button txt="VH" />
      <nav>
        <ul>
          <li>
            <HashLink to="/#about" className="nav__link">
              À propos
            </HashLink>
          </li>
          <li>
            <HashLink to="/#skills" className="nav__link">
              Compétences
            </HashLink>
          </li>
          <li>
            <HashLink to="/#projects" className="nav__link">
              Projets
            </HashLink>
          </li>
        </ul>
      </nav>

      <DarkMode />
    </header>
  );
}

export default Header;
