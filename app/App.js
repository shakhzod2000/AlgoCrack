import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Roadmap from "./Roadmap";
import ProblemPage from "./ProblemPage";
import Login from '../frontend/src/Login';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/problem" element={<ProblemPage />} />
          <Route path="/problemsData" element={<problemsData />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
};

export default App;