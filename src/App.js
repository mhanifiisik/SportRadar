import React from "react";
import HomePage from "./Pages/HomePage";
import MatchInfoPage from "./Pages/MatchInfoPage";
import Error from "./Components/Error";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/match/:id" element={<MatchInfoPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
