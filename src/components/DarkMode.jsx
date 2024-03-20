import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const moon = <FontAwesomeIcon icon={faMoon} />;
  const sun = <FontAwesomeIcon icon={faSun} />;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.body;
    body.classList.toggle("dark-mode");
  };

  return <button onClick={toggleDarkMode}>{isDarkMode ? moon : sun}</button>;
}

export default DarkMode;
