import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; 

function Footer() {
    return (
      <footer className="footer">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
        <p className="footer-text">&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    );
  }

export default Footer;