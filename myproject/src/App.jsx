import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import LandingPage from "./LandingPage/LandingPage";
import MealPlan from "./MealPlan/MealPlan";
import ChatAI from "./ChatAI/ChatAI";
import Reminder from "./Reminder/Reminder";
import NavbarComponent from "./component/NavbarComponent";

// Komponen ProtectedRoute
const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  // State untuk melacak status login
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <NavbarComponent isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        {/* Halaman Login */}
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Halaman LandingPage (Home) */}
        <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />


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
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
