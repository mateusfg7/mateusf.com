import React from 'react'
import { motion } from 'framer-motion'

export const MotionVariantsContainer: React.FC = ({ children }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {children}
    </motion.div>
  )
}

interface ItemProps {
  children: React.ReactNode
  key: number
}

export const MotionVariantsItem = ({ children, key }: ItemProps) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div variants={item} key={key}>
      {children}
    </motion.div>
  )
}
