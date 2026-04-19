import { motion } from 'framer-motion'
import { useState } from 'react'

export function SocialMediaDemoPage() {
  const [imageError, setImageError] = useState({ post1: false, post2: false })

  const handleBackClick = () => {
    window.history.back()
  }

  const handleImageError = (postNum) => {
    console.error(`Failed to load post${postNum}.png`)
    setImageError(prev => ({ ...prev, [`post${postNum}`]: true }))
  }

  return (
    <div className="social-media-demo-page">
      <div className="demo-container">
        <motion.div 
          className="demo-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="demo-title">Social Media Posts</h1>
          <p className="demo-subtitle">
            Creative and engaging social media content designed to boost brand visibility and audience engagement.
          </p>
        </motion.div>

        <div className="demo-posts-grid">
          <motion.div 
            className="demo-post-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            {imageError.post1 ? (
              <div style={{ padding: '40px', textAlign: 'center', color: '#0d5f6d' }}>
                Image failed to load. Please check if post1.png exists in the public folder.
              </div>
            ) : (
              <img 
                src="/post1.png" 
                alt="Instagram Post - Transform Your Online Presence"
                onError={() => handleImageError(1)}
              />
            )}
          </motion.div>

          <motion.div 
            className="demo-post-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            {imageError.post2 ? (
              <div style={{ padding: '40px', textAlign: 'center', color: '#0d5f6d' }}>
                Image failed to load. Please check if post2.png exists in the public folder.
              </div>
            ) : (
              <img 
                src="/post2.png" 
                alt="Sleek Instagram Profile Concept for WebSprint"
                onError={() => handleImageError(2)}
              />
            )}
          </motion.div>
        </div>

        <motion.button 
          className="demo-back-button"
          onClick={handleBackClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Home
        </motion.button>
      </div>
    </div>
  )
}
