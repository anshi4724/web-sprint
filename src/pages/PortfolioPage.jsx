import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export function PortfolioPage() {
  const navigate = useNavigate()

  const handleQuoteClick = () => {
    navigate('/quote')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="portfolio-page">
      <Navbar onQuoteClick={handleQuoteClick} />

      {/* Team Profiles Section */}
      <section className="portfolio-profiles-section">
        <div className="portfolio-profiles-container">
          <motion.h1 
            className="portfolio-main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            className="portfolio-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get to know the passionate individuals behind WebSprint
          </motion.p>

          {/* Anshika Singh Profile */}
          <motion.div 
            className="profile-card profile-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-image-container">
              <div className="profile-image">
                <div className="profile-avatar">A</div>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-header">
                <h2 className="profile-name">👩‍💻 Anshika Singh</h2>
                <p className="profile-role">  (Founder)</p>
                <p className="profile-role">   Full Stack Developer</p>
              </div>
              <div className="profile-about">
                <h3>About</h3>
                <p>
                  Passionate about building modern, scalable, and user-friendly web applications, 
                  Anshika focuses on creating seamless digital experiences that combine clean design 
                  with strong functionality. She specializes in developing responsive and high-performance 
                  websites tailored to business needs.
                </p>
              </div>
              <div className="profile-skills">
                <h3>Key Skills</h3>
                <ul>
                  <li>Frontend Development (React, HTML, CSS, JavaScript)</li>
                  <li>Backend Development</li>
                  <li>UI/UX Design</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
              <div className="profile-social">
                <a href="https://www.linkedin.com/in/anshika-singh-63b385404" className="profile-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:anshika993532@gmail.com" className="profile-social-link" aria-label="Email" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sweta Singh Profile */}
          <motion.div 
            className="profile-card profile-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-content">
              <div className="profile-header">
                <h2 className="profile-name">👩‍💼 Sweta Singh</h2>
                <p className="profile-role">  (Co-Founder)</p>
                <p className="profile-role">   SEO & SMM Specialist</p>
              </div>
              <div className="profile-about">
                <h3>About</h3>
                <p>
                  Sweta specializes in helping businesses grow their online presence through strategic 
                  SEO and social media marketing. She focuses on improving visibility, engagement, and 
                  brand reach using data-driven insights and creative strategies.
                </p>
              </div>
              <div className="profile-skills">
                <h3>Key Skills</h3>
                <ul>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Social Media Marketing (SMM)</li>
                  <li>Content Strategy</li>
                  <li>Brand Growth</li>
                </ul>
              </div>
              <div className="profile-social">
                <a href="https://www.linkedin.com/in/sweta-singh-220347372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="profile-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:Shwetasingh87077@gmail.com" className="profile-social-link" aria-label="Email" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="profile-image-container">
              <div className="profile-image">
                <div className="profile-avatar">S</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="portfolio-section our-work-section">
        <div className="portfolio-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Work
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A glimpse of websites we've designed for different businesses
          </motion.p>
          
          <div className="portfolio-grid">
            {[
              { title: "Restaurant Website", desc: "A modern and responsive website designed for a local restaurant to showcase menu and bookings.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop", link: "https://food-delivery-website-blond-two.vercel.app/" },
              { title: "Social Media Posts", desc: "Creative and engaging social media content designed to boost brand visibility and audience engagement.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", link: "/social-media-demo.html" },
              { title: "Corporate Website", desc: "Professional business website with service showcase, team profiles, and contact integration.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", link: "https://easy-my-storage.vercel.app/" },
              { title: "Educational Platform", desc: "Interactive learning platform with course management, student portal, and progress tracking.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop", link: "#" },
              { title: "Healthcare Website", desc: "Medical practice website with appointment booking, doctor profiles, and patient resources.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop", link: "https://vivo-med-tech-gamma.vercel.app/" }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="portfolio-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="portfolio-image">
                  <img src={project.img} alt={project.title} />
                  <div className="portfolio-overlay">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="view-demo-btn">View Demo</button>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}