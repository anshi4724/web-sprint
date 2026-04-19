import { motion } from 'framer-motion'
import { Typewriter } from '../components/Typewriter'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'   

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

            {/* ================== CARD 1 ================== */}
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

                {/* ✅ FIXED BUTTON */}
                <Link to="/portfolio">
                  <button className="team-read-more">
                    Read More →
                  </button>
                </Link>

                <div className="team-social">
                  <span className="team-phone">📞 9935328215</span>
                </div>
              </div>
            </motion.div>

            {/* ================== CARD 2 ================== */}
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
                  Focused on enhancing brand visibility using data-driven SEO and social media strategies. Committed to delivering impactful and scalable digital growth.
                </p>

                {/* ✅ FIXED BUTTON */}
                <Link to="/portfolio">
                  <button className="team-read-more">
                    Read More →
                  </button>
                </Link>

                <div className="team-social">
                  <span className="team-phone">📞 6393635193</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ================== MISSION ================== */}
          <motion.div 
            className="team-mission"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="mission-title">Our Mission</h3>

            <p className="mission-text">
              We believe every small business deserves a professional online presence.
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