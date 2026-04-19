import { motion } from 'framer-motion'
import { Typewriter } from '../components/Typewriter'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function LeadershipPage() {
  const handleQuoteClick = () => {
    window.location.href = '/#quote'
  }

  return (
    <div className="leadership-page">
      <Navbar onQuoteClick={handleQuoteClick} />

      {/* Team Section */}
      <section className="team-section team-full-page">
        <div className="team-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Founded by passionate developers Anshika & Sweta, we aim to help small businesses grow digitally
          </motion.p>
          
          <div className="team-grid">
            <motion.div 
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="team-image">
                <div className="team-avatar">A</div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Anshika Singh</h3>
                <p className="team-name">(Founder)</p>
                <p className="team-role">Full Stack Developer</p>
                <p className="team-bio">
                  Passionate about creating beautiful, functional websites that help businesses thrive online. Specializes in modern web design and user experience.
                </p>
                <a href="/portfolio">
                  <button className="team-read-more">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </a>
                <div className="team-social">
                  <div className="team-contact">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span className="team-phone">9935328215</span>
                  </div>
                  <a href="https://www.linkedin.com/in/anshika-singh-63b385404" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="mailto:anshika993532@gmail.com" className="social-link" aria-label="Email" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="team-image">
                <div className="team-avatar">S</div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Sweta Singh</h3>
                <p className="team-name">(Co-Founder)</p>
                <p className="team-role">SEO & SSM Specialist</p>
                <p className="team-bio">
                  Focused on enhancing brand visibility using data-driven SEO and social media strategies.Committed to delivering impactful and scalable digital growth.
                </p>
                <a href="/portfolio">
                  <button className="team-read-more">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </a>
                <div className="team-social">
                  <div className="team-contact">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span className="team-phone">6393635193</span>
                  </div>
                  <a href="https://www.linkedin.com/in/sweta-singh-220347372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="mailto:Shwetasingh87077@gmail.com" className="social-link" aria-label="Email" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="team-mission"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              We believe every small business deserves a professional online presence. Our goal is to
              <br />
              <Typewriter
                texts={[
                  "make quality web development accessible",
                  "help entrepreneurs succeed digitally",
                  "create stunning websites affordably",
                  "empower local businesses online",
                  "build your digital success story"
                ]}
                speed={60}
                deleteSpeed={30}
                waitTime={2000}
                className="mission-typewriter"
                cursorChar="|"
              />
              <br />
              helping entrepreneurs and local businesses thrive in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

