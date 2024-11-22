import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './component/LoginPage/LoginPage';
import LandingPage from './component/LandingPage/LandingPage';
import MealPlan from './component/MealPlan/MealPlan';
import ChatAI from './component/ChatAI/ChatAI';
import Reminder from './component/MealPlan/Reminder';

// Komponen ProtectedRoute
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  // State untuk melacak status login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Halaman Login */}
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Halaman LandingPage (Home) */}
        <Route path="/" element={<LandingPage />} />

        {/* Halaman yang memerlukan login */}
        <Route
          path="/mealplan"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MealPlan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ChatAI />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mealplan/reminder"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Reminder />
            </ProtectedRoute>
          }
        />

        {/* Redirect untuk rute yang tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
