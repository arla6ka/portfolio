'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LaunchAnimationProps {
  onAnimationComplete: () => void;
}

const LaunchAnimation: React.FC<LaunchAnimationProps> = ({ onAnimationComplete }) => {
  const [showEmoji, setShowEmoji] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmoji(false);
      onAnimationComplete();
    }, 2000); // Анимация длится 3 секунды

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <AnimatePresence>
      {showEmoji && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-background z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-9xl"
            animate={{
              rotate: [0, 80, 0, 80, 0],
              transition: {
                duration: 1.5,
                repeat: 1,
                ease: "easeInOut"
              }
            }}
          >
            👋
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LaunchAnimation;