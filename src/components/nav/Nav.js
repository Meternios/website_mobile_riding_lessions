import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';

function Nav () {
    return ([
        <div className="fh-mainLogo">
            <Link to="/"><img src={Logo} alt="Website Logo"></img></Link>
        </div>,
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
    ]);
}

export default Nav;