import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && password && email) {
      localStorage.setItem("Name", name);
      localStorage.setItem("Password", password);
      localStorage.setItem("Email", email);
      navigate("/login");
      setName('');
      setEmail('');
      setPassword('');
      alert("Successfully Signed Up! Please Login.");
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <div className="signup-container" >
      <div className="signup-form">
      
        <form onSubmit={handleSubmit}>
          
          <img src="https://images.stockcake.com/public/2/d/9/2d9e381e-df3f-428b-bde9-8dea09e093b1_large/evening-cooking-session-stockcake.jpg" alt="Sample photo" style={{ width: '100%', borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }} />
          <br/>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="form-control" placeholder="Enter your name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control" placeholder="Enter your password" />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="nav-link">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;