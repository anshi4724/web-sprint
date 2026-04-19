import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function TextRotate({
  texts = [],
  rotationInterval = 3000,
  staggerDuration = 0.03,
  staggerFrom = "last",
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [texts.length, rotationInterval])

  const currentText = texts[currentIndex]
  const chars = currentText.split("")

  // Icon mapping for each word
  const getIcon = (text) => {
    switch (text) {
      case "Success":
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="word-icon">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="9"/>
          </svg>
        )
      case "Growth":
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="word-icon">
            <path d="M3 3v18h18"/>
            <path d="M7 12l4-4 4 4 4-4"/>
          </svg>
        )
      case "Goals":
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="word-icon">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        )
      case "Needs":
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="word-icon">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        )
      case "Vision":
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="word-icon">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        )
      case "Dreams":
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="word-icon">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            <path d="M19 12L19.74 14.26L22 15L19.74 15.74L19 18L18.26 15.74L16 15L18.26 14.26L19 12Z"/>
            <path d="M5 6L5.74 8.26L8 9L5.74 9.74L5 12L4.26 9.74L2 9L4.26 8.26L5 6Z"/>
          </svg>
        )
      default:
        return null
    }
  }

  const hasIcon = ["Success", "Growth", "Goals", "Needs", "Vision", "Dreams"].includes(currentText)

  return (
    <span className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {chars.map((char, i) => {
            const delay =
              staggerFrom === "last"
                ? (chars.length - 1 - i) * staggerDuration
                : i * staggerDuration

            return (
              <motion.span
                key={`${currentIndex}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: delay,
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            )
          })}
          {hasIcon && (
            <motion.span
              className="text-icon"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
              transition={{
                duration: 0.4,
                delay: chars.length * staggerDuration + 0.2,
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
            >
              {getIcon(currentText)}
            </motion.span>
          )}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
