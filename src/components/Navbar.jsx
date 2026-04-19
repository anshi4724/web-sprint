import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/websprint-logo.png";

export function Navbar({ onQuoteClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate(path)
    closeMenu()
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <div onClick={() => handleNavClick('/')} className="logo" style={{ cursor: 'pointer' }}>
            <img src={logo} alt="WebSprint Logo" className="logo-image" />
            <div className="logo-text">
              <div className="logo-title">WEBSPRINT</div>
              <div className="logo-subtitle">Brand Boost</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-menu desktop-menu">
            <li><a onClick={() => handleNavClick('/')} style={{ cursor: 'pointer' }}>HOME</a></li>
            <li><a onClick={() => handleNavClick('/about')} style={{ cursor: 'pointer' }}>ABOUT</a></li>
            <li><a onClick={() => handleNavClick('/services')} style={{ cursor: 'pointer' }}>SERVICES</a></li>
            <li><a onClick={() => handleNavClick('/how-it-works')} style={{ cursor: 'pointer' }}>HOW IT WORKS</a></li>
            <li><a onClick={() => handleNavClick('/leadership')} style={{ cursor: 'pointer' }}>LEADERSHIP</a></li>
            <li><a onClick={() => handleNavClick('/portfolio')} style={{ cursor: 'pointer' }}>PORTFOLIO</a></li>
            <li><a onClick={() => handleNavClick('/contact')} style={{ cursor: 'pointer' }}>CONTACT US</a></li>
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

            <div onClick={() => handleNavClick('/')} className="mobile-logo" style={{ cursor: 'pointer' }}>
              <img src={logo} alt="WebSprint Logo" className="mobile-logo-image" />
              <div className="mobile-logo-text">
                <div className="mobile-logo-title">WEBSPRINT</div>
                <div className="mobile-logo-subtitle">Brand Boost</div>
              </div>
            </div>

            <button className="close-btn" onClick={closeMenu}>✕</button>
          </div>

          <div className="mobile-menu-content">
            <a onClick={() => handleNavClick('/')} className="mobile-menu-item">HOME</a>
            <a onClick={() => handleNavClick('/about')} className="mobile-menu-item">ABOUT</a>
            <a onClick={() => handleNavClick('/services')} className="mobile-menu-item">SERVICES</a>
            <a onClick={() => handleNavClick('/how-it-works')} className="mobile-menu-item">HOW IT WORKS</a>
            <a onClick={() => handleNavClick('/leadership')} className="mobile-menu-item">LEADERSHIP</a>
            <a onClick={() => handleNavClick('/portfolio')} className="mobile-menu-item">PORTFOLIO</a>
            <a onClick={() => handleNavClick('/contact')} className="mobile-menu-item">CONTACT US</a>

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