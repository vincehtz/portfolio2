import React from "react";
import "../styles/Header.scss";
import Button from "./Button";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Button txt="VH" />
      <nav>
        <ul>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <li>
            <Link to="/">Compétences</Link>
          </li>
          <li>
            <Link to="/">Projets</Link>
          </li>
        </ul>
      </nav>

      <DarkMode />
    </header>
  );
}

export default Header;
