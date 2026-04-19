import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function StepSlider({ steps }) {
  // Duplicate steps for infinite loop effect
  const duplicatedSteps = [...steps, ...steps, ...steps]

  return (
    <div className="infinite-slider-container">
      <div className="infinite-slider-track">
        <motion.div
          className="infinite-slider-content"
          animate={{
            x: [0, -33.33 * steps.length + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedSteps.map((step, index) => (
            <div key={index} className="infinite-step-card">
              {step.image && (
                <div className="infinite-step-image">
                  <img src={step.image} alt={step.title} />
                </div>
              )}
              <h3 className="infinite-step-title">{step.title}</h3>
              <p className="infinite-step-description">{step.description}</p>
              <div className="infinite-step-number-bottom">{step.number}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
