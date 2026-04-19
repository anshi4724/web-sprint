import { motion } from 'framer-motion'
import ElegantCarousel from '../components/ElegantCarousel'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function HowItWorksPage() {
  const handleQuoteClick = () => {
    window.location.href = '/#quote'
  }

  return (
    <div className="how-it-works-page">
      <Navbar onQuoteClick={handleQuoteClick} />

      {/* Elegant Carousel Section */}
      <ElegantCarousel />

      <Footer />
    </div>
  )
}

