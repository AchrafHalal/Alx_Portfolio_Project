import React, { useState } from 'react';
import img1 from '../../assets/login-img.png';
import img2 from '../../assets/login-img-2.png';
import './login.css';

function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === 'admin' && password === 'admin') {
      onLogin(); // Call the onLogin function from App.js
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div>
      <div className="containerr">
        <img src={img1} alt="Login illustration" />
        <p id="log">Login</p>
        <form onSubmit={handleSubmit}>
          <div className="nom-pass">
            <p>User :</p>
            <input
              type="text"
              placeholder="Enter your username"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <p>Password :</p>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" id="submit-btn">
            Login
          </button>
        </form>
      </div>
      <img src={img2} alt="Additional illustration" id="img2" />
    </div>
  );
}

export default Login;
