import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div className="container">
          <a
            className="navbar-brand fw-bold text-success"
            onClick={() => navigate("/")}
            role="button"
          >
            Archiwaste
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  onClick={() => navigate("/landingpage")}
                  role="button"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  onClick={() => navigate("/mealplan")}
                  role="button"
                >
                  Meal Plan
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  onClick={() => navigate("/chat")}
                  role="button"
                >
                  Chat AI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  onClick={() => navigate("/mealplan/reminder")}
                  role="button"
                >
                  Notification
                </a>
              </li>
            </ul>
            {/* Kondisi berdasarkan status login */}
            {isLoggedIn ? (
              <div className="d-flex align-items-center">
                <img
                  src="https://www.svgrepo.com/show/157818/profile.svg"
                  alt="Profile"
                  width="30"
                  height="30"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                  title="Click to Logout"
                />
              </div>
            ) : (
              <div>
                <button
                  className="btn btn-outline-success me-2"
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={() => navigate("/get-started")}
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
