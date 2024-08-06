import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedName = localStorage.getItem("Name");
    const storedPassword = localStorage.getItem("Password");
    const storedEmail = localStorage.getItem("Email");

    if (email === storedEmail && password === storedPassword) {
      alert("Login Successful!");
      // Here you would typically handle the login logic, e.g., redirect to dashboard
      navigate("/dashboard"); // Replace with the actual route to your dashboard
    } else {
      alert("Invalid Email or Password.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
      
        <form onSubmit={handleSubmit}>
        <img src="https://images.stockcake.com/public/2/d/9/2d9e381e-df3f-428b-bde9-8dea09e093b1_large/evening-cooking-session-stockcake.jpg" alt="Sample photo" style={{ width: '100%', borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }} />
        <br/>
        <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="signup-button">Login</button>
        </form>
        <div className="nav-link">
          Don't have an account? <a href="/">Sign Up here</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;