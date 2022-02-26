import React from "react";
import HomePage from "./Pages/HomePage";
import Teams from "./Pages/Teams";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/matches/:id" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
