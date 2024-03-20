import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.scss";

function Button({ txt, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button>{txt}</button>
    </a>
  );
}

Button.propTypes = {
  txt: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
