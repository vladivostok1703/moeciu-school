'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Stat {
  label: string
  value: number
}

const stats: Stat[] = [
  { label: 'Elevi', value: 150 },
  { label: 'Profesori', value: 20 },
  { label: 'Sali de clasa', value: 12 },
]

export default function StatsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="section bg-gray-200">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <AnimatedCounter value={stat.value} duration={15000} />
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ value, duration }: { value: number; duration: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [value, duration])

  return <div className="stat-value">{count}</div>
}

