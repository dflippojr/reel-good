import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PersonDetails from "./pages/PersonDetails";
import Recommendation from "./pages/RecommendationPage";
import Results from "./pages/Results";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/person/:id" element={<PersonDetails />} />
          <Route exact path="/recommendation" element={<Recommendation />} />
          <Route exact path="/results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
