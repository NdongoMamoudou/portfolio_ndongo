

import React, { useState } from 'react';
import '../Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-title">
                <span className="portfolio-text">Portfolio de </span>
                <span className="name-text">Mamoudou NDONGO</span>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                {/* Icône hamburger */}
                <div className={`bar ${menuOpen ? 'change bar1' : 'bar1'}`}></div>
                <div className={`bar ${menuOpen ? 'change bar2' : 'bar2'}`}></div>
                <div className={`bar ${menuOpen ? 'change bar3' : 'bar3'}`}></div>
            </div>

            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={() => setMenuOpen(false)}>Maison</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>À propos</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
