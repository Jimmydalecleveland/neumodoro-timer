import React from 'react'
import { motion } from 'framer-motion'

const Seed = ({ isShown, coords, ...rest }) => {
  const variants = {
    show: { x: 0, y: 0, opacity: 1 },
    hide: { x: coords.x, y: coords.y, opacity: 0 },
  }
  return (
    <motion.path
      initial={{ opacity: 1 }}
      animate={isShown ? 'show' : 'hide'}
      transition={{
        type: 'tween',
        duration: 0.25,
        ease: [0.9, 0.2, 0.1, 0.1],
      }}
      variants={variants}
      {...rest}
    />
  )
}

export default Seed
