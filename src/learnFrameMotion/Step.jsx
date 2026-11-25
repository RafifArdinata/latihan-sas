import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Step() {
  const [step, setStep] = useState(1)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100 p-4'>
      <button
        onClick={() => setStep(step === 1 ? 2 : 1)}
        className='p-4 rounded-md border bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors'
      >
        Lanjut ke Step Selanjutnya
      </button>

      <AnimatePresence mode='wait'>
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className='bg-green-500 text-white p-8 rounded-md font-bold text-lg shadow-md min-w-[200px] text-center'
          >
            Step 1
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className='bg-purple-500 text-white p-8 rounded-md font-bold text-lg shadow-md min-w-[200px] text-center'
          >
            Step 2
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Step