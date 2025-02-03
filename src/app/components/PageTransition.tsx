'use client'

import type React from "react"
import { motion } from "framer-motion"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "slide" | "fade"
}

const variants = {
  default: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut" },
  },
  slide: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.7, ease: "easeOut" },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1.4, ease: "easeOut" },
  },
}

export default function PageTransition({ children, className = "", variant = "default" }: PageTransitionProps) {
  const selectedVariant = variants[variant]

  return (
    <motion.div
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      exit={selectedVariant.exit}
      transition={selectedVariant.transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

