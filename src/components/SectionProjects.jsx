import React from "react";
import kasaPic from "../assets/kasa.png";
import mvgPic from "../assets/mvg.png";
import bookiPic from "../assets/booki.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faNodeJs,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/SectionProjects.scss";

function SectionProjects() {
  const javascript = <FontAwesomeIcon icon={faJs} />;
  const react = <FontAwesomeIcon icon={faReact} />;
  const html = <FontAwesomeIcon icon={faHtml5} />;
  const node = <FontAwesomeIcon icon={faNodeJs} />;
  const css = <FontAwesomeIcon icon={faCss3Alt} />;

  return (
    <section className="section__projects">
      <h2>Projets</h2>
      <div className="group__projects">
        <article>
          <h3>Booki</h3>
          <img src={bookiPic} alt="Aperçu projet Booki" />
          <div className="project__logos">
            {html}
            {css}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua aoihf
            iuapo fiboixaznur.
          </p>
        </article>
        <article>
          <h3>Kasa</h3>
          <img src={kasaPic} alt="Aperçu projet Kasa" />
          <div className="project__logos">
            {javascript}
            {react}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua aoihf
            iuapo fiboixaznur.
          </p>
        </article>
        <article>
          <h3>MVG</h3>
          <img src={mvgPic} alt="Aperçu projet Mon Vieux Grimmoire" />
          <div className="project__logos">{node}</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua aoihf
            iuapo fiboixaznur.
          </p>
        </article>
      </div>
    </section>
  );
}

export default SectionProjects;
