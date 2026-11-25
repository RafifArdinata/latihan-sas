import React from 'react'
import { motion } from 'framer-motion'
function Button(
    children,
    stiffness=300, 
    damping=15) {
  return (
        <div className='flex h-screen items-center justify-center'>
      <motion.button 
        className='bg-amber-500 py-2 px-3 border-4 border-amber-600 rounded text-white font-medium'
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.9, y: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.button>
    </div>
  )
}

export default Button