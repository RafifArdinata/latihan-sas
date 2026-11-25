import React from 'react';
import { motion } from 'framer-motion';

function Frame() {
  return (
    <div className="flex h-screen">
      <motion.div
        className="m-auto"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className='text-4xl'>Framer Motion</h1>
      </motion.div>


    </div>
  );
}

export default Frame;