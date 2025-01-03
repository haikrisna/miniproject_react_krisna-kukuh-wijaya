import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroimage from "../assets/heroimage.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.png";
import zerowaste from "../assets/zerowaste.png";
import foodwaste from "../assets/food-waste.jpg";
import aboutimage from "../assets/about_us.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section bg-success position-relative"
        style={{ minHeight: "100vh" }}
      >
        {/* Wave SVG */}
        <div className="wave-container position-absolute bottom-0 left-0 w-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-100"
            style={{ display: "block" }}
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container" style={{ paddingTop: "140px" }}>
          <div className="row align-items-center" style={{ height: "100%" }}>
            {/* Left Text Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold text-white">
                Welcome to Archiwaste
              </h1>
              <p className="lead text-white">
                Bantu kurangi sampah makanan bersama! Setiap langkah kecil
                memiliki dampak besar untuk masa depan kita....
              </p>
              <a
                className="btn btn-light btn-lg text-success"
                onClick={() => navigate("/login")}
              >
                Get Started
              </a>
            </div>
            {/* Right Image/Logo Section */}
            <div className="col-md-6 text-center">
              <img
                src={heroimage}
                alt="Hero"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "80vh", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Foodwaste */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Placeholder for Image */}
          <div className="col-md-6">
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "#e9ecef",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                overflow: "hidden", // Mencegah overflow
                position: "relative", // Untuk memastikan tata letak tetap rapi
              }}
            >
              <img
                src={foodwaste}
                alt="Foodwaste"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Memastikan gambar mengisi seluruh area
                }}
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="col-md-6">
            <h2 className="fw-bold text-success">Apa itu FOODWASTE?</h2>
            <p>
              Food waste adalah istilah untuk sisa makanan yang masih bisa
              dimakan, namun dibuang dan menjadi sampah. Food waste bisa terjadi
              karena beberapa hal, seperti: Tidak menghabiskan makanan, Makan
              tidak sesuai porsi, Membeli atau memasak makanan yang tidak
              disukai, Gaya hidup yang memaksa untuk menghabiskan makanan di
              depan orang lain, Makanan yang sudah kedaluwarsa.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2" role="button">
                ✅ <strong className=" text-success">Makanan Kedaluwarsa</strong>
              </li>
              <li className="mb-2" role="button">
                ✅ <strong className=" text-success">Sisa Makanan</strong>
              </li>
              <li className="mb-2" role="button">
                ✅ <strong className=" text-success">Sayuran dan Buah Busuk</strong>
              </li>
              <li className="mb-2" role="button">
                ✅ <strong className=" text-success">Overbuying</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Kenapa Archiwaste Berbeda */}
      <div className="container py-5 bg-light rounded-4">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-md-6">
            <h2 className="fw-bold text-success">Kenapa kita harus mengatasinya?</h2>
            <p>
              Food waste merupakan masalah yang perlu diatasi karena memiliki
              dampak buruk bagi lingkungan dan kelaparan. Sampah makanan yang
              menumpuk di TPA akan menghasilkan gas metana dan karbondioksida
              yang dapat merusak lapisan ozon dan menyebabkan pemanasan global.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2" role="button">🌏 <strong className=" text-success">Emisi Gas Rumah Kaca</strong></li>
              <li className="mb-2" role="button">💧 <strong className=" text-success">Pencemaran Air dan Tanah</strong></li>
              <li className="mb-2" role="button">📉 <strong className=" text-success">Kerugian Finansial</strong></li>
              <li className="mb-2" role="button">🤝 <strong className=" text-success"> Masalah Kemanusiaan</strong></li>
            </ul>
          </div>
          {/* Right Placeholder for Image */}
          <div className="col-md-6">
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "#e9ecef",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                overflow: "hidden", // Mencegah overflow
                position: "relative", // Untuk memastikan tata letak tetap rapi
              }}
            >
              <img
                src={zerowaste}
                alt="Foodwaste"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Memastikan gambar mengisi seluruh area
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: About Us */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Right Text */}
          {/* Right Placeholder for Image */}
          <div className="col-md-6">
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "#e9ecef",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                overflow: "hidden", // Mencegah overflow
                position: "relative", // Untuk memastikan tata letak tetap rapi
              }}
            >
              <img
                src={aboutimage}
                alt="Foodwaste"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Memastikan gambar mengisi seluruh area
                }}
              />
            </div>
          </div>

          {/* Left Image */}

          <div className="col-md-6">
            <h2 className="fw-bold text-success">About Us</h2>
            <p>
              Website kami memiliki fitur <strong className=" text-success">Mealplan</strong>, yang
              membantu Anda merencanakan kebutuhan makanan dengan efisien, serta
              fitur <strong className=" text-success">chat dengan AI</strong>, yang siap memberikan solusi
              praktis dan edukasi untuk membantu Anda mengurangi limbah makanan
              sehari-hari.
            </p>
            <p>
              Bersama <strong className=" text-success">Archiwaste,</strong> mari kita wujudkan lingkungan
              yang lebih sehat dan berkelanjutan!
            </p>
          </div>
        </div>
      </div>

      {/* Card Section for Food and Waste Information */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold text-success">Makanan dan Limbah</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img src={image1} alt="Food 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  World Food Day: Dari kompos rumahan hingga budidaya maggot,
                  ‘Kesempatan kedua untuk sampah makanan’
                </h5>
                <p className="card-text text-secondary">
                  Eksplor lebih banyak hal terkait pentingnya mengelola sampah
                  makanan
                </p>
                <a
                  href="https://www.bbc.com/indonesia/articles/c62renz8mnlo"
                  className="btn btn-success"
                >
                  Lihat
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img src={image2} alt="Food 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  Darurat! Sampah Makanan Orang RI Tembus Ratusan Triliun
                </h5>
                <p className="card-text text-secondary">
                  Eksplor lebih banyak hal terkait pentingnya mengelola sampah
                  makanan
                </p>
                <a
                  href="https://www.cnbcindonesia.com/research/20240123154427-128-508350/darurat-sampah-makanan-orang-ri-tembus-ratusan-triliun"
                  className="btn btn-success"
                >
                  Lihat
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img src={image3} alt="Food 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  Sejauh Mana Indonesia Darurat Sampah Makanan?
                </h5>
                <p className="card-text text-secondary">
                  Ekslplor lebih banyak hal terkait pentingnya mengelola sampah
                  makanan
                </p>
                <a
                  href="https://unnes.ac.id/feb/sejauh-mana-indonesia-darurat-sampah-makanan/"
                  className="btn btn-success"
                >
                  Lihat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
