import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.scss";

function Button({ txt }) {
  return <button>{txt}</button>;
}

Button.propTypes = {
  txt: PropTypes.string,
};

export default Button;
