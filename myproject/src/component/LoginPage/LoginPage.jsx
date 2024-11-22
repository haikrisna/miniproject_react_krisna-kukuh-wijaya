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

    const dummyUser = { username: 'krisna', password: 'krisna123' };

    if (username === dummyUser.username && password === dummyUser.password) {
      setIsLoggedIn(true); // Update state login
      navigate('/mealplan');
      Swal.fire({
        title: "Anda berhasil login!",
        text: `Silahkan nikmati fitur kami`,
        icon: "success",
      });
    } else {
      setErrorMessage('Username atau password tidak tepat');
      Swal.fire({
        title: "Username atau password tidak tepat",
        text: `Silahkan masukan dengan benar`,
        icon: "warning",
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: '300px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            {errorMessage && <p className="text-danger text-center mt-2">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
