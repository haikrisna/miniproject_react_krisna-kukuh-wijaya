import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroimage from './assets/heroimage.png';


export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-light py-5">
        <div className="container" style={{ paddingTop: '40px' }}>
          <div className="row align-items-center">
            {/* Left Text Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold text-success">
                Welcome to Archiwaste
              </h1>
              <p className="lead text-dark">
                Bantu kurangi sampah makanan bersama. Setiap langkah kecil memiliki dampak besar untuk masa depan.
              </p>
              <a href="#" className="btn btn-success btn-lg">
                Get Started
              </a>
            </div>
            {/* Right Image/Logo Section */}
            <div className="col-md-6 text-center">
              <img
                src={heroimage}
                alt="Hero"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card Section for Food and Waste Information */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Makanan dan Limbah</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300" alt="Food 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Makanan Sehat 1</h5>
                <p className="card-text">Makanan sehat ini mengandung banyak nutrisi yang baik untuk tubuh. Jangan buang sisa-sisa makanan!</p>
                <a href="#" className="btn btn-success">Learn More</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300" alt="Food 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Makanan Sehat 2</h5>
                <p className="card-text">Makanan ini kaya akan vitamin dan serat. Kita harus lebih sadar dalam mengelola limbah makanan.</p>
                <a href="#" className="btn btn-success">Learn More</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300" alt="Food 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Makanan Sehat 3</h5>
                <p className="card-text">Mengurangi pemborosan makanan adalah langkah besar dalam mengatasi masalah sampah.</p>
                <a href="#" className="btn btn-success">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
