import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function QuotePage() {
  const handleQuoteClick = () => {
    // Already on quote page, could scroll to form or do nothing
  }

  return (
    <div className="quote-page">
      <Navbar onQuoteClick={handleQuoteClick} />

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-header">
            <motion.h1 
              className="quote-page-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get a Quote
            </motion.h1>
            <motion.p 
              className="quote-page-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Answer a few quick questions and get your website quote instantly.
            </motion.p>
            <motion.p 
              className="quote-trust-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ✓ Free consultation • ✓ No hidden charges • ✓ Quick response
            </motion.p>
          </div>

          <div className="quote-content">
            <motion.div 
              className="quote-form-wrapper"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form className="quote-form">
                <h3 className="form-section-title">👤 Basic Information</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
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
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number (optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="+91 98765 43210" 
                  />
                </div>

                <h3 className="form-section-title">💼 Project Type</h3>
                
                <div className="form-group">
                  <label htmlFor="projectType">What kind of website do you need?</label>
                  <select id="projectType" name="projectType">
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
                    id="customProjectType" 
                    name="customProjectType" 
                    placeholder="Or write your project type here (e.g., Real Estate Portal, Educational Platform)..."
                    style={{ marginTop: '12px' }}
                  />
                </div>

                <h3 className="form-section-title">⏳ Timeline</h3>
                
                <div className="form-group">
                  <label htmlFor="timeline">When do you want your website ready?</label>
                  <select id="timeline" name="timeline" required>
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (1–2 weeks)</option>
                    <option value="standard">Standard (2–4 weeks)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <h3 className="form-section-title">📝 Project Details</h3>
                
                <div className="form-group">
                  <label htmlFor="message">Describe your idea</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Tell us about your business, features you need, design ideas, or reference websites..." 
                    required
                  ></textarea>
                </div>

                <motion.button 
                  type="submit" 
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get My Quote →
                </motion.button>

                <div className="form-footer-info">
                  <p>✓ We usually respond within 24 hours.</p>
                  <p>✓ Your information is सुरक्षित (safe) with us.</p>
                </div>
              </form>
            </motion.div>

            <motion.div 
              className="quote-benefits-wrapper"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

