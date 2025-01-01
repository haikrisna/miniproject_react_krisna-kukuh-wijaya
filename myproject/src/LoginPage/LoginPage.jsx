import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

export default function LoginPage({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = (event) => {
    event.preventDefault();

    const dummyUser = { username: 'krisnakukuh@gmail.com', password: 'krisna123' };
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      navigate('/');
      Swal.fire({
        title: "Anda berhasil login!",
        text: `silahkan nikmati fitur kami`,
        icon: "success",
      });
    } else if (username === dummyUser.username && password === dummyUser.password) {
      localStorage.setItem('user', JSON.stringify(dummyUser));
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      navigate('/mealplan');
    } else {
      setErrorMessage('Username atau password tidak tepat');
      Swal.fire({
        title: "Username atau password tidak tepat",
        text: `silahkan masukan dengan benar`,
        icon: "warning",
      });
    }
  };

  return (
    <div className="login-page position-relative overflow-hidden" style={{ minHeight: "100vh", backgroundColor: "#198754" }}>
      {/* Wave SVG Top */}
      <div className="wave-top position-absolute top-0 left-0 w-100">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: 'block', transform: 'rotate(180deg)' }}
        >
          <path 
            fill="#ffffff" 
            fillOpacity="0.2" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Wave SVG Bottom */}
      <div className="wave-bottom position-absolute bottom-0 left-0 w-100">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          <path 
            fill="#ffffff" 
            fillOpacity="0.2" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card shadow-lg" style={{ width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '15px' }}>
          <div className="card-body p-5">
            <h2 className="text-center mb-4 fw-bold text-success">Welcome Back!</h2>
            <p className="text-center text-muted mb-4">Please login to your account</p>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="form-label text-success fw-bold">Username</label>
                <input
                  type="text"
                  className="form-control form-control-lg bg-light border-0"
                  style={{ borderRadius: '10px' }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label text-success fw-bold">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg bg-light border-0"
                  style={{ borderRadius: '10px' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-success w-100 py-3 fw-bold"
                style={{ 
                  borderRadius: '10px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Login
              </button>
              {errorMessage && <p className="text-danger text-center mt-3 mb-0">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}