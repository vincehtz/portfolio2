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
    <section id="projects" className="section__projects">
      <h2>Projets</h2>
      <div className="group__projects">
        <a
          href="https://github.com/vincehtz/Booki"
          target="_blank"
          rel="noreferrer"
        >
          <article>
            <h3>Booki</h3>
            <img src={bookiPic} alt="Aperçu projet Booki" />
            <div className="project__logos">
              {html}
              {css}
            </div>
            <p>
              Intégration HTML et CSS de l&apos;interface responsive d&apos;un
              site de recherche d&apos;hébergements et d&apos;activités par
              ville.
            </p>
          </article>
        </a>
        <a
          href="https://github.com/vincehtz/Kasa"
          target="_blank"
          rel="noreferrer"
        >
          <article>
            <h3>Kasa</h3>
            <img src={kasaPic} alt="Aperçu projet Kasa" />
            <div className="project__logos">
              {javascript}
              {react}
            </div>
            <p>
              Implémentation du front-end d’une application de location
              d’appartements entre particuliers, avec React et React Router pour
              créer une expérience utilisateur moderne et réactive.
            </p>
          </article>
        </a>
        <a
          href="https://github.com/vincehtz/mon-vieux-grimoire-backend"
          target="_blank"
          rel="noreferrer"
        >
          <article>
            <h3>MVG</h3>
            <img src={mvgPic} alt="Aperçu projet Mon Vieux Grimmoire" />
            <div className="project__logos">{node}</div>
            <p>
              Développement du back-end d’un site de notation de livres via un
              serveur Express et une base de données MongoDB.
            </p>
          </article>
        </a>
      </div>
    </section>
  );
}

export default SectionProjects;
