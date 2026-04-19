import { motion, LayoutGroup } from 'framer-motion'
import { TextRotate } from '../components/TextRotate'
import { StepSlider } from '../components/StepSlider'
import { ServicesGallery } from '../components/ServicesGallery'
import { Typewriter } from '../components/Typewriter'
import { TestimonialCarousel } from '../components/TestimonialCarousel'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/37197.jpg";
import hero3 from "../assets/ideas-idea-vision-design-plan-objective-mission-concept.jpg";
import hero4 from "../assets/web-design-concepts-with-blurred-background.jpg";
import hero5 from "../assets/download (5).jpg";
import hero6 from "../assets/download (6).jpg";
import hero7 from "../assets/download (7).jpg";
import hero8 from "../assets/download (8).jpg";
import hero9 from "../assets/focus.jpg";
import hero10 from "../assets/goal.jpg";

import step1 from "../assets/step1.jpg";
import step2 from "../assets/step2.jpg";
import step3 from "../assets/step3.jpg";
import step4 from "../assets/step4.jpg";

import logo from "../assets/websprint-logo.png";

export function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  
  const heroImages = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
    hero7,
    hero8,
    hero9,
    hero10
  ]

  const imageRotations = [-8, 12, -15, 6, 10, -12, 8, -10, 15, -6]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <>
      <Navbar onQuoteClick={() => setIsQuoteModalOpen(true)} />

      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <LayoutGroup>
                <motion.span layout>
                  Building Websites for Your Business
                </motion.span>
                <br />
                <motion.span layout className="hero-title-line">
                  <TextRotate
                    texts={[
                      "Needs",
                      "Dreams",
                      "Success",
                      "Growth",
                      "Vision",
                      "Goals",
                    ]}
                    rotationInterval={3000}
                    staggerDuration={0.03}
                    staggerFrom="last"
                    className="text-rotate-highlight"
                  />
                </motion.span>
              </LayoutGroup>
            </motion.h1>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Helping startups go online with modern, fast & affordable websites.
            </motion.p>
            <motion.p 
              className="hero-trust-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              ✨ Trusted by startups & small businesses
            </motion.p>
            <div className="hero-buttons">
              <motion.button 
                className="cta-button"
                onClick={() => setIsQuoteModalOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", damping: 30, stiffness: 400 }
                }}
              >
                GET A QUOTE →
              </motion.button>
              <motion.button 
                className="cta-button"
                onClick={() => window.location.href = '/contact'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", damping: 30, stiffness: 400 }
                }}
              >
                CONTACT US →
              </motion.button>
            </div>
          </div>
          <motion.div 
            className="hero-image-carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="carousel-container">
              {heroImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`carousel-card card-${index}`}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: index * 0.15 
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    zIndex: 20,
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    rotate: imageRotations[index],
                  }}
                >
                  <img src={image} alt={`Project ${index + 1}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="how-it-works-section" id="how-it-works">
        <div className="how-it-works-container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Our simple 4-step process to bring your vision to life</p>
          
          <StepSlider 
            steps={[
              {
                number: "01",
                image: step1,
                title: "Contact Us",
                description: "Reach out to us through phone, email, or our contact form. We're here to listen and understand your goals."
              },
              {
                number: "02",
                image: step2,
                title: "Share Your Requirements",
                description: "Tell us about your business, target audience, and what you want to achieve with your website."
              },
              {
                number: "03",
                image: step3,
                title: "We Design & Develop",
                description: "Our team creates a stunning, functional website tailored to your brand and business needs."
              },
              {
                number: "04",
                image: step4,
                title: "Launch Your Website",
                description: "After your approval, we launch your website and provide ongoing support to ensure success."
              }
            ]}
          />
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive web solutions tailored to your business needs</p>
          
          <ServicesGallery 
            services={[
              {
                icon: "🌐",
                title: "Business Website",
                description: "Professional websites that establish your online presence and credibility. Perfect for small businesses, startups, and entrepreneurs looking to showcase their services and attract customers."
              },
              {
                icon: "🛒",
                title: "E-commerce Store",
                description: "Powerful online stores with secure payment integration, inventory management, and shopping cart functionality. Start selling your products online with a fully functional e-commerce platform."
              },
              {
                icon: "🔍",
                title: "SEO & Google Ranking",
                description: "Comprehensive search engine optimization to improve your website's visibility on Google. Get more organic traffic, higher rankings, and increased online presence with our proven SEO strategies."
              },
              {
                icon: "📄",
                title: "Landing Pages",
                description: "High-converting landing pages designed to capture leads and drive sales. Perfect for marketing campaigns, product launches, and lead generation with compelling call-to-actions."
              },
              {
                icon: "📱",
                title: "Meta Ads",
                description: "Strategic Facebook and Instagram advertising campaigns to reach your target audience. Professional ad creation, audience targeting, and campaign management to maximize your ROI."
              },
              {
                icon: "📢",
                title: "Social Media Marketing",
                description: "Complete social media management including content creation, posting schedules, engagement strategies, and growth tactics across all major platforms to build your brand presence."
              },
              {
                icon: "⚡",
                title: "Website Optimization",
                description: "Lightning-fast loading speeds, mobile responsiveness, and performance improvements. Enhance user experience, reduce bounce rates, and improve conversion rates with optimized websites."
              }
            ]}
          />
        </div>
      </section>

      <section className="why-choose-us-section">
        <div className="why-choose-us-container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">We deliver excellence in every project we undertake</p>
          
          <div className="features-grid">
            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="feature-check">✔</div>
              <div className="feature-content">
                <h3 className="feature-title">Affordable Pricing</h3>
                <p className="feature-description">Quality web solutions that fit your budget without compromising on excellence</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="feature-check">✔</div>
              <div className="feature-content">
                <h3 className="feature-title">Modern & Professional Design</h3>
                <p className="feature-description">Contemporary designs that reflect your brand and impress your visitors</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="feature-check">✔</div>
              <div className="feature-content">
                <h3 className="feature-title">Fast Delivery</h3>
                <p className="feature-description">Quick turnaround times to get your website live and generating results</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="feature-check">✔</div>
              <div className="feature-content">
                <h3 className="feature-title">Mobile-Friendly Websites</h3>
                <p className="feature-description">Fully responsive designs that work seamlessly across all devices</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="feature-check">✔</div>
              <div className="feature-content">
                <h3 className="feature-title">Client Support</h3>
                <p className="feature-description">Dedicated support team ready to assist you whenever you need help</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="feature-check">✔</div>
              <div className="feature-content">
                <h3 className="feature-title">Custom Design (Not templates only)</h3>
                <p className="feature-description">Unique, tailor-made designs crafted specifically for your business</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="team-section" id="leadership">
        <div className="team-container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Founded by passionate developers Anshika & Sweta, we aim to help small businesses grow digitally</p>
          
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
                <Link to="/portfolio">
                  <button className="team-read-more">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </Link>
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
                <Link to="/portfolio">
                  <button className="team-read-more">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </Link>
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

      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-container">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">A glimpse of websites we've designed for different businesses</p>
          
          <div className="portfolio-grid">
            {[
              { title: "Restaurant Website", desc: "A modern and responsive website designed for a local restaurant to showcase menu and bookings.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop", link: "https://food-delivery-website-blond-two.vercel.app/" },
              { title: "Social Media Posts", desc: "Creative and engaging social media content designed to boost brand visibility and audience engagement.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", link: "/#/social-media-demo", sameTab: true },
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
                    <a href={project.link} {...(project.sameTab ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
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

      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real feedback from businesses we've helped grow online</p>
          
          <TestimonialCarousel 
            testimonials={[
              { 
                name: "Sarah Johnson", 
                jobtitle: "Restaurant Owner", 
                text: "They created my business website in just 5 days. Highly recommended! The design is modern and exactly what I needed.", 
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              },
              { 
                name: "Michael Chen", 
                jobtitle: "Online Store Owner", 
                text: "Professional team with excellent communication. Our e-commerce site is performing beyond expectations!", 
                image: "https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?w=400&h=400&fit=crop"
              },
              { 
                name: "Priya Sharma", 
                jobtitle: "Startup Founder", 
                text: "Amazing work! They understood our vision and delivered a website that truly represents our brand. Worth every penny.", 
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
              },
              { 
                name: "David Martinez", 
                jobtitle: "Fitness Coach", 
                text: "Fast, affordable, and high quality. The website looks great on all devices and our customers love it!", 
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
              },
              { 
                name: "Emily Roberts", 
                jobtitle: "Boutique Owner", 
                text: "Their support is outstanding! They helped us even after the project was completed. Truly a reliable partner.", 
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
              },
              { 
                name: "Rajesh Kumar", 
                jobtitle: "Real Estate Agent", 
                text: "Best decision for our business! The website increased our online inquiries by 300%. Highly professional team.", 
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              }
            ]}
          />
        </div>
      </section>

      {/* Have a Question Section */}
      <section className="question-section">
        <div className="question-container">
          <motion.div 
            className="question-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="question-title">Have a Question?</h2>
            <p className="question-subtitle">
              We're here to help! Get in touch with us for any queries about our services, 
              pricing, or how we can help grow your business online.
            </p>
            <div className="question-buttons">
              <motion.button 
                className="question-btn primary"
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.button>
              <motion.a 
                href="mailto:websprint7@gmail.com"
                className="question-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Us
              </motion.a>
              <motion.a 
                href="https://wa.me/917905654954"
                className="question-btn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <>
          <div className="modal-backdrop" onClick={() => setIsQuoteModalOpen(false)}></div>
          <div className="modal-container">
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <button className="modal-close" onClick={() => setIsQuoteModalOpen(false)}>×</button>
              
              <div className="modal-header">
                <h1 className="modal-title">Get a Quote</h1>
                <p className="modal-subtitle">Answer a few quick questions and get your website quote instantly.</p>
                <p className="quote-trust-line">✓ Free consultation • ✓ No hidden charges • ✓ Quick response</p>
              </div>

              <div className="modal-body">
                <div className="modal-grid">
                  <div className="modal-form-section">
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

                      <button type="submit" className="modal-submit-btn">
                        Get My Quote →
                      </button>

                      <div className="form-footer-info">
                        <p>✓ We usually respond within 24 hours.</p>
                        <p>✓ Your information is सुरक्षित (safe) with us.</p>
                      </div>
                    </form>
                  </div>

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
            </motion.div>
          </div>
        </>
      )}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-column footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="WebSprint Logo" className="footer-logo-image" />
                <div className="footer-logo-text">
                  <div className="footer-logo-title">WEBSPRINT</div>
                  <div className="footer-logo-subtitle">Brand Boost</div>
                </div>
              </div>
              <p className="footer-description">
                Founded by Anshika & Sweta, we create stunning websites that help small businesses grow digitally.
              </p>
              <div className="footer-social">
                <a href="#" className="footer-social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/1RPWfnms55/" className="footer-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/web_sprint_?igsh=MXdtN3lqMXR5cmEzaQ==" className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://wa.me/917905654954" className="footer-social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="/our-work">Our Work</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Our Services</h3>
              <ul className="footer-links">
                <li><a href="#services">Website Development</a></li>
                <li><a href="#services">E-commerce Solutions</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Website Maintenance</a></li>
                <li><a href="#services">SEO Optimization</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Contact Info</h3>
              <ul className="footer-contact">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:websprint7@gmail.com">websprint7@gmail.com</a>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+91 6393635193 / +91 9935328215</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Available 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2024 WebSprint. Founded by Anshika & Sweta. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="floating-buttons">
        <a href="https://wa.me/917905654954" className="whatsapp-btn" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        <div className="call-btn" aria-label="Call Us">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <span className="call-numbers">+91 6393635193 / +91 9935328215</span>
        </div>
      </div>
    </>
  )
}
