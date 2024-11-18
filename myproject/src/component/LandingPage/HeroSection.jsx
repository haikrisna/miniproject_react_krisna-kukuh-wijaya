import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroimage from './assets/heroimage.png';


export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-light py-5" style={{ minHeight: '100vh' }}>
        <div className="container" style={{ paddingTop: '140px' }}>
          <div className="row align-items-center" style={{ height: '100%' }}>
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
                style={{ maxHeight: '80vh', objectFit: 'cover' }} // Membuat gambar sesuai dengan ukuran layar
              />
            </div>
          </div>
        </div>
      </div>


      {/* Section 1: Income Share Agreement */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Placeholder for Image */}
          <div className="col-md-6">
            <div
              style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#e9ecef',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}
            >
              <p className="text-muted">Placeholder Image</p>
            </div>
          </div>
          {/* Right Text */}
          <div className="col-md-6">
            <h2 className="fw-bold">Apa itu FOODWASTE?</h2>
            <p>
            Food waste adalah istilah untuk sisa makanan yang masih bisa dimakan, namun dibuang dan menjadi sampah. Food waste bisa terjadi karena beberapa hal, seperti: Tidak menghabiskan makanan, Makan tidak sesuai porsi, Membeli atau memasak makanan yang tidak disukai, Gaya hidup yang memaksa untuk menghabiskan makanan di depan orang lain, Makanan yang sudah kedaluwarsa.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                ✅ <strong>Makanan Kedaluwarsa</strong>
              </li>
              <li className="mb-2">
                ✅ <strong>Sisa Makanan</strong>
              </li>
              <li className="mb-2">
                ✅ <strong>Sayuran dan Buah Busuk</strong>
              </li>
              <li className="mb-2">
                ✅ <strong>Overbuying</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Kenapa Dicoding Academy Berbeda */}
      <div className="container py-5 bg-light">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-md-6">
            <h2 className="fw-bold">Kenapa kita harus mengatasinya?</h2>
            <p>
            Food waste merupakan masalah yang perlu diatasi karena memiliki dampak buruk bagi lingkungan dan kelaparan. Sampah makanan yang menumpuk di TPA akan menghasilkan gas metana dan karbondioksida yang dapat merusak lapisan ozon dan menyebabkan pemanasan global.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">📚 Emisi Gas Rumah Kaca</li>
              <li className="mb-2">📅 Pencemaran Air dan Tanah</li>
              <li className="mb-2">💻 Kerugian Finansial</li>
              <li className="mb-2">🏆 Masalah Kemanusiaan</li>
            </ul>
          </div>
          {/* Right Placeholder for Image */}
          <div className="col-md-6">
            <div
              style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#e9ecef',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}
            >
              <p className="text-muted">Placeholder Image</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: About Us */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-md-6">
            <h2 className="fw-bold">About Us</h2>
            <p>
            Aplikasi kami memiliki fitur <strong>Mealplan</strong>, yang membantu Anda merencanakan kebutuhan makanan dengan 
              efisien, serta fitur <strong>chat dengan AI</strong>, yang siap memberikan solusi praktis dan edukasi untuk 
              membantu Anda mengurangi limbah makanan sehari-hari.
            </p>
            <p>
            Bersama <strong>Archiwaste,</strong> mari kita wujudkan lingkungan yang lebih sehat dan berkelanjutan!
            </p>
          </div>
          {/* Right Placeholder for Image */}
          <div className="col-md-6">
            <div
              style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#e9ecef',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}
            >
              <p className="text-muted">Placeholder Image</p>
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
