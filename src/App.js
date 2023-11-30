import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PersonDetails from "./pages/PersonDetails";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/person/:id" element={<PersonDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
