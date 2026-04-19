import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function createBeam(width, height, layer) {
  const angle = -35 + Math.random() * 10
  const baseSpeed = 0.2 + layer * 0.2
  const baseOpacity = 0.08 + layer * 0.05
  const baseWidth = 10 + layer * 5
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    width: baseWidth,
    length: height * 2.5,
    angle,
    speed: baseSpeed + Math.random() * 0.2,
    opacity: baseOpacity + Math.random() * 0.1,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.015,
    layer,
  }
}

export const PremiumHero = ({ onExploreClick, onQuoteClick }) => {
  const canvasRef = useRef(null)
  const noiseRef = useRef(null)
  const beamsRef = useRef([])
  const animationFrameRef = useRef(0)
  const [titleNumber, setTitleNumber] = useState(0)

  const LAYERS = 3
  const BEAMS_PER_LAYER = 8

  const serviceTitles = [
    "Business Growth",
    "Lead Generation",
    "Digital Success",
    "Online Presence",
    "Customer Conversion"
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    const noiseCanvas = noiseRef.current
    if (!canvas || !noiseCanvas) return
    const ctx = canvas.getContext('2d')
    const nCtx = noiseCanvas.getContext('2d')
    if (!ctx || !nCtx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      noiseCanvas.width = window.innerWidth * dpr
      noiseCanvas.height = window.innerHeight * dpr
      noiseCanvas.style.width = `${window.innerWidth}px`
      noiseCanvas.style.height = `${window.innerHeight}px`
      nCtx.setTransform(1, 0, 0, 1, 0, 0)
      nCtx.scale(dpr, dpr)

      beamsRef.current = []
      for (let layer = 1; layer <= LAYERS; layer++) {
        for (let i = 0; i < BEAMS_PER_LAYER; i++) {
          beamsRef.current.push(createBeam(window.innerWidth, window.innerHeight, layer))
        }
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const generateNoise = () => {
      const imgData = nCtx.createImageData(noiseCanvas.width, noiseCanvas.height)
      for (let i = 0; i < imgData.data.length; i += 4) {
        const v = Math.random() * 255
        imgData.data[i] = v
        imgData.data[i + 1] = v
        imgData.data[i + 2] = v
        imgData.data[i + 3] = 12
      }
      nCtx.putImageData(imgData, 0, 0)
    }

    const drawBeam = (beam) => {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      const pulsingOpacity = Math.min(1, beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.4))
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)
      gradient.addColorStop(0, `rgba(77,212,172,0)`)
      gradient.addColorStop(0.2, `rgba(77,212,172,${pulsingOpacity * 0.5})`)
      gradient.addColorStop(0.5, `rgba(77,212,172,${pulsingOpacity})`)
      gradient.addColorStop(0.8, `rgba(77,212,172,${pulsingOpacity * 0.5})`)
      gradient.addColorStop(1, `rgba(77,212,172,0)`)

      ctx.fillStyle = gradient
      ctx.filter = `blur(${2 + beam.layer * 2}px)`
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    const animate = () => {
      if (!canvas || !ctx) return

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#1a3d4a')
      gradient.addColorStop(1, '#0d2832')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed * (beam.layer / LAYERS + 0.5)
        beam.pulse += beam.pulseSpeed
        if (beam.y + beam.length < -50) {
          beam.y = window.innerHeight + 50
          beam.x = Math.random() * window.innerWidth
        }
        drawBeam(beam)
      })

      generateNoise()
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % serviceTitles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [serviceTitles.length])

  return (
    <div className="premium-hero-container">
      <canvas ref={noiseRef} className="premium-hero-noise" />
      <canvas ref={canvasRef} className="premium-hero-canvas" />

      <div className="premium-hero-content">
        <div className="premium-hero-inner">
          <motion.div 
            className="premium-hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>🚀 Digital Solutions That Convert</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.div>

          <motion.h1 
            className="premium-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="premium-hero-title-main">Transform Your Business With</span>
            <span className="premium-hero-title-animated">
              &nbsp;
              {serviceTitles.map((title, index) => (
                <motion.span
                  key={index}
                  className="premium-hero-title-word"
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p 
            className="premium-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive digital solutions designed to grow your business online. From stunning websites to powerful marketing campaigns, we deliver results that matter.
          </motion.p>

          <motion.div 
            className="premium-hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="premium-hero-btn-primary" onClick={onExploreClick}>
              <span>Explore Our Services</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="premium-hero-btn-secondary" onClick={onQuoteClick}>
              <span>Get a Quote</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
