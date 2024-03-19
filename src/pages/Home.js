import React from "react";
import Header from "../components/Header";
import SectionIntro from "../components/SectionIntro";
import SectionAbout from "../components/SectionAbout";
import SectionSkills from "../components/SectionSkills";
import Footer from "../components/Footer";
import SectionProjects from "../components/SectionProjects";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <SectionIntro />
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
