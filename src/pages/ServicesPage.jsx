import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState(0)

  const services = [
    {
      title: "Business Website",
      tagline: "Get More Customers From Your Website",
      description: "Convert visitors into real inquiries (not just views). Build trust with a professional online presence designed to bring you consistent leads.",
      features: [
        "Convert visitors into real inquiries (not just views)",
        "Add WhatsApp + call buttons for instant contact",
        "Build trust with a professional online presence",
        "Designed to bring you consistent leads",
        "Mobile-responsive and fast loading"
      ]
    },
    {
      title: "E-commerce Store",
      tagline: "Turn Your Products Into Daily Sales",
      description: "Accept payments directly on your website. Reduce cart drop with smooth checkout and highlight best-selling products to increase revenue.",
      features: [
        "Accept payments directly on your website",
        "Reduce cart drop with smooth checkout",
        "Highlight best-selling products to increase revenue",
        "Built to maximize conversions, not just display items",
        "Inventory management and order tracking"
      ]
    },
    {
      title: "SEO & Google Ranking",
      tagline: "Get Customers Searching for Your Service",
      description: "Appear on Google when people search your business. Bring free traffic without spending on ads and target local customers ready to buy.",
      features: [
        "Appear on Google when people search your business",
        "Bring free traffic without spending on ads",
        "Target local customers ready to buy",
        "Build long-term visibility and trust",
        "Monthly performance reports"
      ]
    },
    {
      title: "Landing Pages",
      tagline: "Turn Ad Clicks Into Real Leads",
      description: "Designed specifically to capture leads. Remove distractions and focus on conversion with strong call-to-action that drives results.",
      features: [
        "Designed specifically to capture leads",
        "Remove distractions and focus on conversion",
        "Strong call-to-action that drives results",
        "Perfect for Google & Instagram ads",
        "A/B testing ready for optimization"
      ]
    },
    {
      title: "Meta Ads",
      tagline: "Get Leads Within Days, Not Months",
      description: "Reach people actively interested in your service. Generate instant inquiries, control your budget and scale anytime. Turn ads into real business growth.",
      features: [
        "Reach people actively interested in your service",
        "Generate instant inquiries",
        "Control your budget and scale anytime",
        "Turn ads into real business growth",
        "Professional ad creation and targeting"
      ]
    },
    {
      title: "Social Media Marketing",
      tagline: "Turn Followers Into Customers",
      description: "Create content that attracts your target audience. Increase engagement and brand trust, generate leads through posts & reels.",
      features: [
        "Create content that attracts your target audience",
        "Increase engagement and brand trust",
        "Generate leads through posts & reels",
        "Stay active and visible in your market",
        "Multi-platform content strategy"
      ]
    },
    {
      title: "Website Optimization",
      tagline: "Stop Losing Customers Due to Slow Speed",
      description: "Faster website = more conversions. Reduce bounce rate instantly, improve Google ranking, and provide smooth user experience across devices.",
      features: [
        "Faster website = more conversions",
        "Reduce bounce rate instantly",
        "Improve Google ranking",
        "Smooth user experience across devices",
        "Performance monitoring and reports"
      ]
    },
    {
      title: "Website Maintenance",
      tagline: "Never Worry About Your Website Again",
      description: "Fix issues before they affect your business. Keep your site updated and secure, ensure everything runs smoothly 24/7.",
      features: [
        "Fix issues before they affect your business",
        "Keep your site updated and secure",
        "Ensure everything runs smoothly 24/7",
        "Save your time and avoid technical stress",
        "Regular backups and monitoring"
      ]
    },
    {
      title: "AI Chatbots",
      tagline: "Capture Leads Even When You're Offline",
      description: "Reply to customers instantly (24/7). Collect leads automatically, answer common queries without effort. Never miss a potential customer.",
      features: [
        "Reply to customers instantly (24/7)",
        "Collect leads automatically",
        "Answer common queries without effort",
        "Never miss a potential customer",
        "Smart AI-powered conversations"
      ]
    },
    {
      title: "CRM Systems",
      tagline: "Stop Losing Leads — Convert More Clients",
      description: "Track every inquiry in one place. Follow up with potential customers easily, organize and manage your leads to increase conversion rate.",
      features: [
        "Track every inquiry in one place",
        "Follow up with potential customers easily",
        "Organize and manage your leads",
        "Increase your conversion rate",
        "Custom reporting and analytics"
      ]
    },
    {
      title: "Booking Systems",
      tagline: "Let Customers Book Without Calling You",
      description: "Accept bookings anytime (24/7). Avoid manual scheduling confusion, manage appointments easily and save time.",
      features: [
        "Accept bookings anytime (24/7)",
        "Avoid manual scheduling confusion",
        "Manage appointments easily",
        "Save time and improve customer experience",
        "Automated reminders and confirmations"
      ]
    },
    {
      title: "WhatsApp Integration",
      tagline: "Turn Visitors Into Direct Chats",
      description: "Let customers message you instantly. Capture leads directly on WhatsApp, reduce response time and close deals faster with real conversations.",
      features: [
        "Let customers message you instantly",
        "Capture leads directly on WhatsApp",
        "Reduce response time → increase conversions",
        "Close deals faster with real conversations",
        "Automated welcome messages"
      ]
    }
  ]

  const handleQuoteClick = () => {
    window.location.href = '/#quote'
  }

  return (
    <div className="services-page">
      <Navbar onQuoteClick={handleQuoteClick} />

      {/* Services Section with Sidebar */}
      <section className="services-section services-full-page">
        <div className="services-sidebar-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive digital solutions to grow your business online
          </motion.p>
          
          <div className="services-sidebar-layout">
            {/* Left Sidebar - Service Names */}
            <div className="services-sidebar">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`service-sidebar-item ${selectedService === index ? 'active' : ''}`}
                  onMouseEnter={() => setSelectedService(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="service-sidebar-title">{service.title}</span>
                </motion.div>
              ))}
            </div>

            {/* Right Content - Service Details */}
            <div className="services-content">
              <motion.div
                key={selectedService}
                className="service-content-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="service-content-title">{services[selectedService].title}</h3>
                <p className="service-content-tagline">{services[selectedService].tagline}</p>
                <p className="service-content-description">{services[selectedService].description}</p>
                
                <h4 className="service-content-features-title">Key Features:</h4>
                <ul className="service-content-features">
                  {services[selectedService].features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      ✓ {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

