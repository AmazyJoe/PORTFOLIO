import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./assets/Navbar";
import HomePage from "./assets/HomePage";
import ProjectsPage from "./assets/ProjectsPage";
import SkillsPage from "./assets/SkillsPage";
import ContactPage from "./assets/ContactPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
