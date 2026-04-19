import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    number: "01",
    title: "Contact Us",
    subtitle: "Start Your Journey",
    description: "Reach out to us through phone, email, or our contact form. We're here to listen and understand your goals. Our team responds within 24 hours to schedule a consultation.",
    accent: "#4dd4ac",
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
  },
  {
    number: "02",
    title: "Share Your Requirements",
    subtitle: "Tell Us Your Vision",
    description: "Tell us about your business, target audience, and what you want to achieve with your website. We'll discuss your brand, features needed, and project timeline.",
    accent: "#0d5f6d",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
  },
  {
    number: "03",
    title: "We Design & Develop",
    subtitle: "Bringing Ideas to Life",
    description: "Our team creates a stunning, functional website tailored to your brand and business needs. We keep you updated throughout the process with regular previews.",
    accent: "#4dd4ac",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
  },
  {
    number: "04",
    title: "Launch Your Website",
    subtitle: "Go Live & Grow",
    description: "After your approval, we launch your website and provide ongoing support to ensure success. We handle hosting, domain setup, and post-launch optimization.",
    accent: "#0d5f6d",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
  }
]

export default function ElegantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)
  const progressRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const SLIDE_DURATION = 6000
  const TRANSITION_DURATION = 800

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentIndex) return
      setIsTransitioning(true)
      setProgress(0)

      setTimeout(() => {
        setCurrentIndex(index)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50)
      }, TRANSITION_DURATION / 2)
    },
    [isTransitioning, currentIndex]
  )

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length
    goToSlide(nextIndex)
  }, [currentIndex, goToSlide])

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length
    goToSlide(prevIndex)
  }, [currentIndex, goToSlide])

  useEffect(() => {
    if (isPaused) return

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 100 / (SLIDE_DURATION / 50)
      })
    }, 50)

    intervalRef.current = setInterval(() => {
      goNext()
    }, SLIDE_DURATION)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [currentIndex, isPaused, goNext])

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext()
      else goPrev()
    }
  }

  const currentSlide = slides[currentIndex]

  return (
    <div
      className="elegant-carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background accent wash */}
      <div
        className="elegant-carousel-bg-wash"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}18 0%, transparent 70%)`,
        }}
      />

      <div className="elegant-carousel-inner">
        {/* Left: Text Content */}
        <div className="elegant-carousel-content">
          <div className="elegant-carousel-content-inner">
            {/* Step number */}
            <motion.div
              key={`num-${currentIndex}`}
              className="elegant-carousel-step-num"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <span className="elegant-carousel-num-line" />
              <span className="elegant-carousel-num-text">
                {currentSlide.number} / 04
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              key={`title-${currentIndex}`}
              className="elegant-carousel-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {currentSlide.title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              key={`subtitle-${currentIndex}`}
              className="elegant-carousel-subtitle"
              style={{ color: currentSlide.accent }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {currentSlide.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              key={`desc-${currentIndex}`}
              className="elegant-carousel-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {currentSlide.description}
            </motion.p>

            {/* Navigation Arrows */}
            <div className="elegant-carousel-nav-arrows">
              <button
                onClick={goPrev}
                className="elegant-carousel-arrow-btn"
                aria-label="Previous step"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="elegant-carousel-arrow-btn"
                aria-label="Next step"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Icon Display */}
        <div className="elegant-carousel-icon-container">
          <motion.div
            key={`icon-${currentIndex}`}
            className="elegant-carousel-icon-frame"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ duration: 0.6 }}
          >
            <div className="elegant-carousel-icon-display">
              <img src={currentSlide.image} alt={currentSlide.title} className="elegant-carousel-step-image" />
              <div className="elegant-carousel-icon-number">{currentSlide.number}</div>
            </div>
            <div
              className="elegant-carousel-icon-overlay"
              style={{
                background: `linear-gradient(135deg, ${currentSlide.accent}22 0%, transparent 50%)`,
              }}
            />
          </motion.div>

          {/* Decorative frame corners */}
          <div className="elegant-carousel-frame-corner elegant-carousel-frame-corner--tl" style={{ borderColor: currentSlide.accent }} />
          <div className="elegant-carousel-frame-corner elegant-carousel-frame-corner--br" style={{ borderColor: currentSlide.accent }} />
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="elegant-carousel-progress-bar">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`elegant-carousel-progress-item ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to step ${index + 1}`}
          >
            <div className="elegant-carousel-progress-track">
              <div
                className="elegant-carousel-progress-fill"
                style={{
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                  backgroundColor: index === currentIndex ? currentSlide.accent : undefined,
                }}
              />
            </div>
            <span className="elegant-carousel-progress-label">{slide.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
