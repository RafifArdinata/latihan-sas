import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Alert() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className='flex h-screen items-center justify-center flex-col space-y-3'>
      <button
        className='p-4 rounded-md bg-blue-500 text-white'
        onClick={() => setOpen((prev) => !prev)}
      >
        Toggle
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className='bg-green-500 text-white p-8 rounded-md'
          >
            Informasi Toggle
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Alert