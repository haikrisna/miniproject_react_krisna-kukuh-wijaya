import React from "react";

export default function NavbarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-success" href="#">
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
              {" "}
              {/* Menambahkan mx-auto untuk center */}
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Meal Plan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <button class="btn btn-success" type="submit">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
