import React from "react";
import NavbarComponent from "../LandingPage/NavbarComponent";

export default function ChatAI() {
  return (
    <div style={{ marginTop: "70px" }}>
      {" "}
      {/* Sesuaikan ukuran dengan tinggi navbar */}
      <NavbarComponent />
      <div
        style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "center", // Memusatkan secara horizontal
          height: "calc(100vh - 80px)", // Tinggi area (disesuaikan dengan marginTop)
        }}
      >

      <h1>Mari tanyakan sesuatu</h1>
      </div>
    </div>
  );
}
