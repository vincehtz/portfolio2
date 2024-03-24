import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Error() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="section__error">
          <h1>ERROR</h1>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Error;
