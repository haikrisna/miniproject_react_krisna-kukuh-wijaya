import React from "react";
import NavbarComponent from "../component/NavbarComponent";
import HeroSection from "./HeroSection";
import FooterComponent from "../component/FooterComponent";

export default function LandingPage() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection />
      <FooterComponent />
    </div>
  );
}
