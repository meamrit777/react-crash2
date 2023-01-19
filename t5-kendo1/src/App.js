import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GridPage from "./pages/GridPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid" element={<GridPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
