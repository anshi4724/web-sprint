import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  // Get user's current location
  useEffect(() => {
    if (isOpen && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          // Use reverse geocoding to get address
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => {
              const address = data.display_name || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
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
  }, [isOpen])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message with quote request data
    const whatsappMessage = `
*Quote Request from ${formData.name}*

📋 *Contact Information:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}
• Address: ${formData.address}

💼 *Project Details:*
• Type: ${formData.projectType || formData.customProjectType || 'Not specified'}
• Timeline: ${formData.timeline}

📝 *Project Description:*
${formData.message}
    `.trim()
    
    // Open WhatsApp with pre-filled message
    const whatsappLink = `https://wa.me/917905654954?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappLink, '_blank')
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    })
    onClose()
  }
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="modal-content">
              {/* Close Button */}
              <button className="modal-close" onClick={onClose} aria-label="Close">
                ✕
              </button>

              {/* Header */}
              <div className="modal-header">
                <h2 className="modal-title">Get a Quote</h2>
                <p className="modal-subtitle">
                  Answer a few quick questions and get your website quote instantly.
                </p>
                <p className="quote-trust-line">
                  ✓ Free consultation • ✓ No hidden charges • ✓ Quick response
                </p>
              </div>

              {/* Content */}
              <div className="modal-body">
                <div className="modal-grid">
                  {/* Form */}
                  <div className="modal-form-section">
                    <form className="quote-form" onSubmit={handleSubmit}>
                      <h3 className="form-section-title">👤 Basic Information</h3>
                      
                      <div className="form-group">
                        <label htmlFor="modal-name">Full Name</label>
                        <input 
                          type="text" 
                          id="modal-name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name" 
                          required 
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="modal-email">Email Address</label>
                        <input 
                          type="email" 
                          id="modal-email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com" 
                          required 
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="modal-phone">Phone Number (optional)</label>
                        <input 
                          type="tel" 
                          id="modal-phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210" 
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="modal-address">Address</label>
                        <input 
                          type="text" 
                          id="modal-address" 
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

                      <h3 className="form-section-title">💼 Project Type</h3>
                      
                      <div className="form-group">
                        <label htmlFor="modal-projectType">What kind of website do you need?</label>
                        <select 
                          id="modal-projectType" 
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                        >
                          <option value="">Select project type or describe below</option>
                          <option value="business">Business Website</option>
                          <option value="ecommerce">E-commerce Store</option>
                          <option value="seo">SEO & Google Ranking</option>
                          <option value="landing">Landing Pages</option>
                          <option value="meta-ads">Meta Ads</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="optimization">Website Optimization</option>
                          <option value="portfolio">Portfolio Website</option>
                          <option value="custom">Custom Web Application</option>
                        </select>
                        
                        <input 
                          type="text" 
                          id="modal-customProjectType" 
                          name="customProjectType"
                          value={formData.customProjectType || ''}
                          onChange={handleInputChange}
                          placeholder="Or write your project type here (e.g., Real Estate Portal, Educational Platform)..."
                          style={{ marginTop: '12px' }}
                        />
                      </div>

                      <h3 className="form-section-title">⏳ Timeline</h3>
                      
                      <div className="form-group">
                        <label htmlFor="modal-timeline">When do you want your website ready?</label>
                        <select 
                          id="modal-timeline" 
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (1–2 weeks)</option>
                          <option value="standard">Standard (2–4 weeks)</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>

                      <h3 className="form-section-title">📝 Project Details</h3>
                      
                      <div className="form-group">
                        <label htmlFor="modal-message">Describe your idea</label>
                        <textarea 
                          id="modal-message" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="4" 
                          placeholder="Tell us about your business, features you need, design ideas, or reference websites..." 
                          required
                        ></textarea>
                      </div>

                      <button type="submit" className="modal-submit-btn">
                        Get My Quote →
                      </button>

                      <div className="form-footer-info">
                        <p>✓ We usually respond within 24 hours.</p>
                        <p>✓ Your information is सुरक्षित (safe) with us.</p>
                      </div>
                    </form>
                  </div>

                  {/* Benefits */}
                  <div className="modal-benefits-section">
                    <div className="quote-benefits">
                      <h3 className="benefits-title">✨ Why Request a Quote?</h3>
                      <div className="benefits-list">
                        <div className="benefit-item">
                          <div className="benefit-icon">💰</div>
                          <div className="benefit-content">
                            <h4>Get a custom price based on your needs</h4>
                            <p>No one-size-fits-all pricing. We tailor quotes to your specific requirements.</p>
                          </div>
                        </div>
                        <div className="benefit-item">
                          <div className="benefit-icon">🎯</div>
                          <div className="benefit-content">
                            <h4>Free expert consultation</h4>
                            <p>Get professional advice on the best approach for your project.</p>
                          </div>
                        </div>
                        <div className="benefit-item">
                          <div className="benefit-icon">⏱️</div>
                          <div className="benefit-content">
                            <h4>Clear project timeline</h4>
                            <p>Know exactly when your website will be ready to launch.</p>
                          </div>
                        </div>
                        <div className="benefit-item">
                          <div className="benefit-icon">✓</div>
                          <div className="benefit-content">
                            <h4>No hidden costs</h4>
                            <p>Transparent pricing with everything included in your quote.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
