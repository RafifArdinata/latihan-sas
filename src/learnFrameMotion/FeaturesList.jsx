import React from 'react';
import { motion } from 'framer-motion';

// Aturan animasi untuk elemen induk (container)
export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.15, // Jeda sebelum anak pertama mulai muncul
      staggerChildren: 0.2  // Jeda antar elemen anak (diubah dari 5s ke 0.2s agar lebih responsif)
    }
  }
};

// Aturan animasi untuk setiap item anak
export const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5 // Durasi pergerakan setiap item
    }
  }
};

export function FeaturesList() {
  const features = ["Fast", "Declarative", "Powerful", "Fun"];

  return (
    <motion.ul 
      className="list-disc pl-5 space-y-2 text-lg font-medium text-slate-800"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {features.map((feature) => (
        // Diperbaiki: Penutupan tag diganti menjadi </motion.li>
        <motion.li variants={item} key={feature}>
          {feature}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default FeaturesList;