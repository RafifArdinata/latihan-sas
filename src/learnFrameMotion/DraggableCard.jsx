import React from 'react'
import { motion } from 'framer-motion'

function DraggableCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        drag
        dragConstraints={{ left: -700, right: 700, top: -300, bottom: 300 }}
        dragElastic={0.2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-96 p-8 rounded-xl bg-purple-600 text-white font-semibold text-center shadow-lg cursor-grab active:cursor-grabbing select-none"
      >
        DraggableCard
      </motion.div>
    </div>
  )
}

export default DraggableCard