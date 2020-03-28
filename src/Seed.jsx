import React from 'react'
import { motion } from 'framer-motion'

const Seed = ({ isAnimate, coords, ...rest }) => {
  const variants = {
    start: { x: 0, y: 0, opacity: 1 },
    finish: { x: coords.x, y: coords.y, opacity: 0 },
  }
  return (
    <motion.path
      initial={{ opacity: 1 }}
      animate={isAnimate ? 'start' : 'finish'}
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
