import React from 'react'
import { motion } from 'framer-motion'

const MotionPlayground = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: 'coral',
        color: 'peachpuff',
        height: '100vh',
      }}
    >
      <motion.div drag="x" dragConstraints={{ left: -100, right: 100 }}>
        <h1 style={{ padding: '20px', background: 'mediumaquamarine' }}>
          Draggable
        </h1>
      </motion.div>
      <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }}>
        <h1 style={{ padding: '20px', background: 'mediumaquamarine' }}>
          Animate ME
        </h1>
      </motion.div>
    </div>
  )
}

export default MotionPlayground
