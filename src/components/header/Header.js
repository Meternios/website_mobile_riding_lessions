import React from 'react';
import './Header.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Header() {
  return (
    <header className="fh-header">
        <div className="fh-mainLogo">
            <img src="/" alt="Website Logo"></img>
        </div>
        <nav className="fh-nav">
            <Router>
                <ul className="fh-navMenu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </Router>
        </nav>
    </header>
  );
}

export default Header;
