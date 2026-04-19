import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function ContactPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  })

  const handleQuoteClick = () => {
    navigate('/quote')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Get user's current location for the address field only
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          // Use reverse geocoding to get address
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => {
              const address = data.display_name || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
              // Auto-fill the address field
              setFormData(prev => ({
                ...prev,
                address: address
              }))
            })
            .catch(() => {
              const fallbackAddress = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
              setFormData(prev => ({
                ...prev,
                address: fallbackAddress
              }))
            })
        },
        (error) => {
          console.error('Geolocation error:', error)
        }
      )
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message with form data
    const whatsappMessage = `
*New Contact Form Message*

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Address:* ${formData.address}
*Subject:* ${formData.subject}

*Message:*
${formData.message}
    `.trim()
    
    // Open WhatsApp with pre-filled message
    const whatsappLink = `https://wa.me/917905654954?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappLink, '_blank')
    
    // Reset form (keep address as it's auto-detected)
    setFormData(prev => ({
      fullName: '',
      email: '',
      phone: '',
      address: prev.address, // Keep the detected address
      subject: '',
      message: ''
    }))
  }

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="contact-page">
      <Navbar onQuoteClick={handleQuoteClick} />

      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <motion.h1 
            className="contact-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something Great Together
          </motion.h1>
          <motion.p 
            className="contact-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have a question or idea? Reach out—we're here to help you grow your business online.
          </motion.p>
          <motion.div 
            className="contact-hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="contact-hero-btn primary" onClick={scrollToForm}>
              Contact Now
            </button>
            <button className="contact-hero-btn secondary" onClick={handleQuoteClick}>
              Get a Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="contact-cards-section">
        <div className="contact-cards-container">
          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-value">websprint7@gmail.com</p>
            <p className="contact-card-desc">Quick response within 24 hours</p>
          </motion.div>

          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contact-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="contact-card-title">Phone</h3>
            <p className="contact-card-value">+91 6393635193 / +91 9935328215</p>
            <p className="contact-card-desc">Available 24/7</p>
          </motion.div>

          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact-card-icon whatsapp">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3 className="contact-card-title">WhatsApp</h3>
            <p className="contact-card-value">+91 7905654954</p>
            <p className="contact-card-desc">Chat with us instantly (Fastest way to connect)</p>
          </motion.div>

          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="contact-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="contact-card-title">Location</h3>
            <p className="contact-card-value">India</p>
            <p className="contact-card-desc">Serving worldwide</p>
          </motion.div>
        </div>
      </section>

      {/* Main Section - Split Layout */}
      <section className="contact-main-section" id="contact-form">
        <div className="contact-main-container">
          <motion.div 
            className="contact-form-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-form-title">Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Mobile Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Detecting your location..."
                  required
                />
                <small style={{ fontSize: '12px', color: '#666', marginTop: '5px', display: 'block' }}>
                  📍 Your location is auto-detected. You can edit it if needed.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="website">Website Development</option>
                  <option value="ecommerce">E-commerce Store</option>
                  <option value="seo">SEO & Marketing</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project or question..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="contact-info-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-info-title">✨ Why Reach Out to Us?</h2>
            
            <div className="contact-info-blocks">
              <div className="info-block">
                <div className="info-icon">⚡</div>
                <div className="info-content">
                  <h3>Quick Response</h3>
                  <p>We reply fast—no long waiting times.</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">💡</div>
                <div className="info-content">
                  <h3>Expert Guidance</h3>
                  <p>Get real advice, not just sales talk.</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">🤝</div>
                <div className="info-content">
                  <h3>Friendly Support</h3>
                  <p>We treat your project like our own.</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">🔒</div>
                <div className="info-content">
                  <h3>No Pressure</h3>
                  <p>Just a conversation, no commitments.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="contact-cta-container">
          <motion.div 
            className="contact-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-cta-title">Have a Clear Idea?</h2>
            <p className="contact-cta-text">
              Skip the chat and get a detailed estimate for your project instantly.
            </p>
            <button className="contact-cta-btn" onClick={handleQuoteClick}>
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
