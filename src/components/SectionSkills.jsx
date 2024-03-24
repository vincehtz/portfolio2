import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/SectionSkills.scss";

function SectionSkills() {
  const html = <FontAwesomeIcon icon={faHtml5} />;
  const css = <FontAwesomeIcon icon={faCss3Alt} />;
  const javascript = <FontAwesomeIcon icon={faJs} />;
  const react = <FontAwesomeIcon icon={faReact} />;
  const node = <FontAwesomeIcon icon={faNodeJs} />;
  const github = <FontAwesomeIcon icon={faGithub} />;
  const figma = <FontAwesomeIcon icon={faFigma} />;

  return (
    <section id="skills" className="section__skills">
      <h2>Compétences</h2>
      <div className="group-skills">
        <div className="Frontend">
          <h3>Frontend</h3>
          <ul>
            <li>
              {html}
              <h4>HTML</h4>
            </li>
            <li>
              {css}
              <h4>CSS</h4>
            </li>
            <li>
              {javascript}
              <h4>Javascript</h4>
            </li>
            <li>
              {react}
              <h4>React</h4>
            </li>
          </ul>
        </div>
        <div className="Backend">
          <h3>Backend</h3>
          <ul>
            <li>
              {node}
              <h4>Node.js</h4>
            </li>
          </ul>
        </div>
        <div className="Other">
          <h3>Autres</h3>
          <ul>
            <li>
              {github}
              <h4>Git & GitHub</h4>
            </li>
            <li>
              {figma}
              <h4>Figma</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
