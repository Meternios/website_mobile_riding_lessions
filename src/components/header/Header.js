import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fh-header">
        <div className="fh-mainLogo">
            <Link to="/"><img src="/" alt="Website Logo"></img></Link>
        </div>
        <nav className="fh-nav">
            <ul className="fh-navMenu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ueber-mich">Über mich</Link>
                </li>
                <li>
                    <Link to="/angebot">Angebot</Link>
                </li>
                <li>
                    <Link to="/kontakt">Kontakt</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
