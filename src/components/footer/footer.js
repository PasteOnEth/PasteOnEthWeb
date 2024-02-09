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
              <Link to="https://grass-stomach-d2d.notion.site/PasteOnEth-Design-Doc-a62835955492441c8f772c6f386b73fc" className="nav-link">Docs</Link>
            </li>
            <li className="nav-item">
              <Link to="https://github.com/PasteOnEth" className="nav-link">Github</Link>
            </li>
            <li className="nav-item">
              <Link to="https://www.linkedin.com/in/omkar-pathak/" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
        <p className="footer-text">&copy; 2024 PasteOnEth. All rights reserved.</p>
      </footer>
    );
  }

export default Footer;