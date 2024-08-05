import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
// import Navbar from "./Navbar";
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
           <Route path="/dashboard" element={<Dashboard />} /> 
           {/* <Route path="/navbar" element={<Navbar />} />  */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;