import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const shouldShowNavbar = location.pathname !== '/dashboard';

  return (
    <header>
      <div className="container">
        {/* <img src="Images/logo.jp" alt="TechInnovate Logo" className="logo-image" />
        <h1 className="logo" >Style Vogue</h1> */}
        {shouldShowNavbar && (
          <nav>
            <ul>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Sign In</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;