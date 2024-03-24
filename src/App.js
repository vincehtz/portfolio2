import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Error from "./pages/Error";
import "./styles/App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default App;
