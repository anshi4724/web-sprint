import { motion } from 'framer-motion'
import ElegantCarousel from '../components/ElegantCarousel'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export function HowItWorksPage() {
  const navigate = useNavigate()

  const handleQuoteClick = () => {
    navigate('/quote')
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

