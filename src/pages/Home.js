import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Intro />
      </main>
    </React.Fragment>
  );
}

export default Home;
