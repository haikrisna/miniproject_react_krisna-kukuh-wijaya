import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoprofile from "../assets/heroimage.png";

export default function NavbarComponent({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const [activeMenu, setActiveMenu] = useState("/");

  const handleNavigation = (path) => {
    setActiveMenu(path);
    navigate(path);
  };

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
                  className={`nav-link ${
                    activeMenu === "/" ? "text-success" : "text-dark"
                  }`}
                  onClick={() => handleNavigation("/")}
                  role="button"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeMenu === "/mealplan" ? "text-success" : "text-dark"
                  }`}
                  onClick={() => handleNavigation("/mealplan")}
                  role="button"
                >
                  Meal Plan
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeMenu === "/chat" ? "text-success" : "text-dark"
                  }`}
                  onClick={() => handleNavigation("/chat")}
                  role="button"
                >
                  Chat AI
                </a>
              </li>
            </ul>

            {/* Kondisi berdasarkan status login */}
            {isLoggedIn ? (
              <>
                <div
                  className={`nav-link px-3 ${
                    activeMenu === "//mealplan/reminder"
                      ? "text-success"
                      : "text-dark"
                  }`}
                  onClick={() => handleNavigation("/mealplan/reminder")}
                  role="button"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.075 10.2875C19.7 10.2875 21.875 8.15001 21.875 5.48751C21.875 2.86251 19.7375 0.687506 17.075 0.687506C15.125 0.687506 13.4375 1.85001 12.6875 3.53751C11.75 3.01251 10.7 2.67501 9.57504 2.56251V1.17501C9.57504 0.725006 9.20004 0.350006 8.75004 0.350006C8.30004 0.350006 7.92504 0.725006 7.92504 1.17501V2.60001C7.88754 2.60001 7.85004 2.60001 7.81254 2.60001C3.98754 3.01251 1.10004 6.08751 1.10004 9.76251V16.4375C1.06254 16.7375 0.987543 16.8875 0.950043 17L0.350043 18.05C0.125043 18.3875 0.0875435 18.8375 0.312543 19.2125L0.350043 19.25C0.575043 19.5875 0.912543 19.775 1.32504 19.775H7.96254V20.8625C7.96254 21.3125 8.33754 21.6875 8.78754 21.6875C9.23754 21.6875 9.61254 21.3125 9.61254 20.8625V19.775H16.2875C16.7 19.775 17.0375 19.5875 17.2625 19.25C17.4875 18.875 17.4875 18.425 17.2625 18.05L16.625 17.0375C16.5125 16.85 16.4375 16.6625 16.4375 16.475V10.2125C16.625 10.25 16.85 10.2875 17.075 10.2875ZM17.075 2.37501C18.8 2.37501 20.1875 3.76251 20.1875 5.48751C20.1875 7.21251 18.8 8.60001 17.075 8.60001C15.35 8.60001 13.9625 7.21251 13.9625 5.48751C13.9625 3.76251 15.35 2.37501 17.075 2.37501ZM14.75 9.65001V16.475C14.75 16.9625 14.9 17.45 15.1625 17.9375L15.2375 18.0875H8.78754C8.78754 18.0875 8.78754 18.0875 8.75004 18.0875C8.71254 18.0875 8.75004 18.0875 8.71254 18.0875H2.26254L2.41254 17.8625C2.60004 17.525 2.71254 17.15 2.78754 16.625V9.80001C2.78754 6.98751 5.03754 4.58751 8.00004 4.28751C9.53754 4.10001 11.0375 4.47501 12.275 5.30001C12.275 5.37501 12.275 5.45001 12.275 5.48751C12.275 7.28751 13.2875 8.82501 14.75 9.65001Z"
                      fill="#266B15"
                    />
                  </svg>
                </div>

                <div className="d-flex align-items-center position-relative">
                  <img
                    src={logoprofile}
                    alt="Profile"
                    width="30"
                    height="30"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowDropdown(!showDropdown)} // Toggling dropdown
                    title="Click to open menu"
                    className="rounded-circle"
                  />

                  {showDropdown && (
                    <div
                      className="dropdown-menu show"
                      style={{
                        position: "absolute",
                        top: "35px",
                        right: "0",
                        minWidth: "120px",
                        padding: "5px 0",
                      }}
                    >
                      <button
                        className="dropdown-item"
                        onClick={handleLogout}
                        style={{ fontSize: "14px", padding: "5px 10px" }}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
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
