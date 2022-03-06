import React from "react";
import HomePage from "./Pages/HomePage";
import MatchInfoPage from "./Pages/MatchInfoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/match/:id" element={<MatchInfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
