import { useState } from 'react'
import { motion } from 'framer-motion'

export function ServicesGallery({ services }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="services-image-row">
      <div className="image-row-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="image-row-item"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              flex: hoveredIndex === index ? 2.5 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <div className="image-row-card">
              <div className="image-overlay"></div>
              <div className="image-content">
                <div className="service-icon-large">{service.icon}</div>
                <h3 className={`service-title-vertical ${hoveredIndex === index ? 'horizontal' : ''}`}>
                  {service.title}
                </h3>
                <motion.p
                  className="service-description-overlay"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
