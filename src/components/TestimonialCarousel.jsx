import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="testimonial-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="testimonial-carousel-content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="testimonial-main-card">
            <div className="testimonial-quote-large">"</div>
            <p className="testimonial-text-large">
              {testimonials[currentIndex].text}
            </p>
            <div className="testimonial-author-section">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="testimonial-author-image"
              />
              <div className="testimonial-author-details">
                <h4 className="testimonial-author-name">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="testimonial-author-role">
                  {testimonials[currentIndex].jobtitle}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Preview */}
      <div className="testimonial-thumbnails">
        {testimonials.map((testimonial, index) => (
          <motion.button
            key={index}
            className={`testimonial-thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToTestimonial(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
            />
            <div className="thumbnail-overlay">
              <span className="thumbnail-name">{testimonial.name}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
