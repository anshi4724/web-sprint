import { useState, useEffect } from 'react'

export function Typewriter({
  texts = [],
  speed = 70,
  deleteSpeed = 40,
  waitTime = 1500,
  className = "",
  cursorChar = "_"
}) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), waitTime)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
        } else {
          // Move to next text
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, texts, speed, deleteSpeed, waitTime])

  return (
    <span className={className} style={{
      color: '#00FF00',
      fontWeight: '800',
      display: 'inline-block',
      minHeight: '2.5em',
      margin: '12px 0',
      fontSize: '26px',
      lineHeight: '1.6'
    }}>
      {displayText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>{cursorChar}</span>
    </span>
  )
}
