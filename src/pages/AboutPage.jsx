import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function AboutPage() {
  const handleQuoteClick = () => {
    window.location.href = '/#quote'
  }

  return (
    <div className="about-page">
      <Navbar onQuoteClick={handleQuoteClick} />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-hero-title">About Us</h1>
            <p className="about-hero-subtitle">
              In today's digital-first world, your website is more than just an online presence—it's the foundation of your brand. We are a forward-thinking digital team dedicated to helping startups, entrepreneurs, and growing businesses transform their ideas into powerful online experiences.
            </p>
            <p className="about-hero-description">
              We understand that many businesses struggle to establish their identity online. That's why we focus on creating websites that are not only visually appealing but also strategically designed to attract, engage, and convert visitors into customers.
            </p>
            <p className="about-hero-mission">
              Our goal is simple: to bridge the gap between your business vision and the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-section">
        <div className="about-container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-section-title">Who We Are</h2>
            <p className="about-section-text">
              We are a team of designers, developers, and digital strategists who believe that every business deserves a strong online presence—regardless of its size or stage.
            </p>
            <p className="about-section-text">
              With a deep understanding of modern technologies and user behavior, we craft websites that are fast, responsive, and built for real-world performance. Every project we take on is treated with attention to detail, creativity, and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-section-title">What We Do</h2>
            <p className="about-section-text">
              We provide complete website solutions tailored to your business goals:
            </p>
            <ul className="about-services-list">
              <li>Custom Website Design & Development</li>
              <li>Startup Website Launch Solutions</li>
              <li>Business Portfolio & Service Websites</li>
              <li>UI/UX Design for Better User Experience</li>
              <li>Performance Optimization & Speed Enhancement</li>
              <li>SEO & Social Media Integration</li>
            </ul>
            <p className="about-section-text about-highlight">
              We don't just create websites—we create digital platforms that help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="about-section">
        <div className="about-container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-section-title">Our Approach</h2>
            <p className="about-section-text">
              Our process is simple, transparent, and results-driven:
            </p>
            <div className="about-approach-steps">
              <div className="approach-step">
                <h3>Understand Your Vision</h3>
                <p>We start by learning about your business, goals, and target audience.</p>
              </div>
              <div className="approach-step">
                <h3>Plan & Design</h3>
                <p>We craft a modern and user-friendly design that reflects your brand identity.</p>
              </div>
              <div className="approach-step">
                <h3>Develop & Optimize</h3>
                <p>We build a high-performance website that works seamlessly across all devices.</p>
              </div>
              <div className="approach-step">
                <h3>Launch & Support</h3>
                <p>We help you go live and ensure everything runs smoothly post-launch.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <div className="about-mission-vision">
            <motion.div
              className="mission-vision-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="about-section-title">Our Mission</h2>
              <p className="about-section-text">
                Our mission is to empower businesses by providing them with high-quality, scalable, and impactful digital solutions that drive growth and success.
              </p>
            </motion.div>
            <motion.div
              className="mission-vision-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="about-section-title">Our Vision</h2>
              <p className="about-section-text">
                To become a trusted digital partner for businesses worldwide by delivering innovative, reliable, and performance-driven web solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-section">
        <div className="about-container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-section-title">Why Choose Us</h2>
            <p className="about-section-text">
              Choosing the right team for your website can make all the difference. Here's what sets us apart:
            </p>
            <ul className="about-features-list">
              <li>✔ Modern & Premium Design Approach</li>
              <li>✔ Business-Focused Solutions (Not Just Design)</li>
              <li>✔ Fast, Responsive & Scalable Websites</li>
              <li>✔ Transparent Communication</li>
              <li>✔ Dedicated Support & Guidance</li>
            </ul>
            <p className="about-section-text about-highlight">
              We don't just build websites—we build long-term partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-container">
          <motion.div
            className="about-cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-cta-title">Let's Build Something Amazing</h2>
            <p className="about-cta-text">
              Whether you're starting from scratch or looking to upgrade your existing presence, we're here to help you take the next step in your digital journey.
            </p>
            <button className="about-cta-button" onClick={handleQuoteClick}>
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}