import React, { useState } from 'react';
import '../Navbar.css';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();
    console.log('Traduction navbar.home:', t('navbar.home'));

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-title">
                <span className="portfolio-text">{t('navbar.portfolio')}</span>
                <span className="name-text">Mamoudou NDONGO</span>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? 'change bar1' : 'bar1'}`}></div>
                <div className={`bar ${menuOpen ? 'change bar2' : 'bar2'}`}></div>
                <div className={`bar ${menuOpen ? 'change bar3' : 'bar3'}`}></div>
            </div>

            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={() => setMenuOpen(false)}>{t('navbar.home')}</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>{t('navbar.about')}</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>{t('navbar.skills')}</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t('navbar.projects')}</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t('navbar.contact')}</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
