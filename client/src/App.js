import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
