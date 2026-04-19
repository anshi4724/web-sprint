import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { LeadershipPage } from './pages/LeadershipPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { ContactPage } from './pages/ContactPage'
import { SocialMediaDemoPage } from './pages/SocialMediaDemoPage'
import { QuotePage } from './pages/QuotePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/social-media-demo" element={<SocialMediaDemoPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </Router>
  )
}

export default App
