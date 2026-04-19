import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/websprint-logo.png";

export function Navbar({ onQuoteClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="WebSprint Logo" className="logo-image" />
            <div className="logo-text">
              <div className="logo-title">WEBSPRINT</div>
              <div className="logo-subtitle">Brand Boost</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="nav-menu desktop-menu">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/how-it-works">HOW IT WORKS</Link></li>
            <li><Link to="/leadership">LEADERSHIP</Link></li>
            <li><Link to="/portfolio">PORTFOLIO</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>

          {/* Desktop Quote Button */}
          <button className="book-service-btn desktop-btn" onClick={onQuoteClick}>
            Get a Quote
          </button>

          {/* Mobile Hamburger */}
          <button className="hamburger-btn" onClick={toggleMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-overlay-header">

            <Link to="/" className="mobile-logo" onClick={closeMenu}>
              <img src={logo} alt="WebSprint Logo" className="mobile-logo-image" />
              <div className="mobile-logo-text">
                <div className="mobile-logo-title">WEBSPRINT</div>
                <div className="mobile-logo-subtitle">Brand Boost</div>
              </div>
            </Link>

            <button className="close-btn" onClick={closeMenu}>✕</button>
          </div>

          <div className="mobile-menu-content">
            <Link to="/" onClick={closeMenu} className="mobile-menu-item">HOME</Link>
            <Link to="/about" onClick={closeMenu} className="mobile-menu-item">ABOUT</Link>
            <Link to="/services" onClick={closeMenu} className="mobile-menu-item">SERVICES</Link>
            <Link to="/how-it-works" onClick={closeMenu} className="mobile-menu-item">HOW IT WORKS</Link>
            <Link to="/leadership" onClick={closeMenu} className="mobile-menu-item">LEADERSHIP</Link>
            <Link to="/portfolio" onClick={closeMenu} className="mobile-menu-item">PORTFOLIO</Link>
            <Link to="/contact" onClick={closeMenu} className="mobile-menu-item">CONTACT US</Link>

            <div className="mobile-auth-buttons">
              <button
                className="mobile-quote-button"
                onClick={() => {
                  onQuoteClick()
                  closeMenu()
                }}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}