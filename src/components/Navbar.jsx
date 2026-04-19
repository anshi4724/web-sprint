import { useState } from 'react'
import logo from "../assets/websprint-logo.png";

export function Navbar({ onQuoteClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    console.log('Menu toggled!')
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <img src={logo} alt="WebSprint Logo" className="logo-image" />
            <div className="logo-text">
              <div className="logo-title">WEBSPRINT</div>
              <div className="logo-subtitle">Brand Boost</div>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <ul className="nav-menu desktop-menu">
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/how-it-works">HOW IT WORKS</a></li>
            <li><a href="/leadership">LEADERSHIP</a></li>
            <li><a href="/portfolio">PORTFOLIO</a></li>
            <li><a href="/contact">CONTACT US</a></li>
          </ul>
          
          {/* Desktop Quote Button */}
          <button className="book-service-btn desktop-btn" onClick={onQuoteClick}>Get a Quote</button>
          
          {/* Mobile Hamburger Button */}
          <button className="hamburger-btn" onClick={toggleMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-overlay-header">
            <a href="/" className="mobile-logo">
              <img src={logo} alt="WebSprint Logo" className="mobile-logo-image" />
              <div className="mobile-logo-text">
                <div className="mobile-logo-title">WEBSPRINT</div>
                <div className="mobile-logo-subtitle">Brand Boost</div>
              </div>
            </a>
            <button className="close-btn" onClick={closeMenu}>✕</button>
          </div>
          
          <div className="mobile-menu-content">
            <a href="/" onClick={closeMenu} className="mobile-menu-item">HOME</a>
            <a href="/about" onClick={closeMenu} className="mobile-menu-item">ABOUT</a>
            <a href="/services" onClick={closeMenu} className="mobile-menu-item">SERVICES</a>
            <a href="/how-it-works" onClick={closeMenu} className="mobile-menu-item">HOW IT WORKS</a>
            <a href="/leadership" onClick={closeMenu} className="mobile-menu-item">LEADERSHIP</a>
            <a href="/portfolio" onClick={closeMenu} className="mobile-menu-item">PORTFOLIO</a>
            <a href="/contact" onClick={closeMenu} className="mobile-menu-item">CONTACT US</a>
            
            <div className="mobile-auth-buttons">
              <button className="mobile-quote-button" onClick={() => { onQuoteClick(); closeMenu(); }}>
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}