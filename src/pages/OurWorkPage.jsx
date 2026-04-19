import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function OurWorkPage() {
  const handleQuoteClick = () => {
    window.location.href = '/#quote'
  }

  return (
    <div className="our-work-page">
      <Navbar onQuoteClick={handleQuoteClick} />

      {/* Our Work Section */}
      <section className="portfolio-section our-work-full-page">
        <div className="portfolio-container">
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Work
          </motion.h2>

          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A glimpse of websites we've designed for different businesses
          </motion.p>
          
          <div className="portfolio-grid">
            {[
              {
                title: "Restaurant Website",
                desc: "A modern and responsive website designed for a local restaurant to showcase menu and bookings.",
                img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
                link: "https://food-delivery-website-blond-two.vercel.app/",
                external: true
              },
              {
                title: "Social Media Posts",
                desc: "Creative and engaging social media content designed to boost brand visibility and audience engagement.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                link: "/#/social-media-demo",
                sameTab: true
              },
              {
                title: "Corporate Website",
                desc: "Professional business website with service showcase, team profiles, and contact integration.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
                link: "https://easy-my-storage.vercel.app/",
                external: true
              },
              {
                title: "Educational Platform",
                desc: "Interactive learning platform with course management, student portal, and progress tracking.",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
                link: "#",
                external: false
              },
              {
                title: "Healthcare Website",
                desc: "Medical practice website with appointment booking, doctor profiles, and patient resources.",
                img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
                link: "https://vivo-med-tech-gamma.vercel.app/",
                external: true
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="portfolio-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="portfolio-image">
                  <img src={project.img} alt={project.title} />

                  <div className="portfolio-overlay">
                    {project.external ? (
                      // ✅ External → New Tab
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <button className="view-demo-btn">View Demo</button>
                      </a>
                    ) : (
                      // ✅ Internal → Same Tab
                      <a href={project.link}>
                        <button className="view-demo-btn">View Demo</button>
                      </a>
                    )}
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