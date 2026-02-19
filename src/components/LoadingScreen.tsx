import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import loadingText from '../assets/loading-text.png';
import Navbar from './layout/Navbar';

const LoadingScreen: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Check if user has visited before
  useEffect(() => {
    const visited = sessionStorage.getItem('hasVisited');
    if (visited) {
      setHasVisited(true);
      setIsComplete(true);
    }
  }, []);

  // Rotate based on scroll (full rotation over the scroll distance)
  const rotation = useTransform(scrollYProgress, [0, 0.3], [0, 360]);
  
  // Fade out as user scrolls
  const opacity = useTransform(scrollYProgress, [0.25, 0.3], [1, 0]);
  
  // Scale down the loading screen as it fades
  const scale = useTransform(scrollYProgress, [0.25, 0.3], [1, 0.8]);

  useEffect(() => {
    if (hasVisited) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Complete when scrolled past a threshold (e.g., 500px)
      if (scrolled > 500) {
        setIsComplete(true);
        sessionStorage.setItem('hasVisited', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasVisited]);

  // If already visited, don't show loading screen at all
  if (hasVisited) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          style={{ 
            opacity,
            scale
          }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
           className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-black overflow-hidden"
        >
          {/* Navbar on Loading Screen */}
          <div className="absolute top-0 left-0 right-0 z-50">
            <Navbar />
          </div>

          {/* Rotating Background Image */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              rotate: rotation,
            }}
          >
            <img
              src={loadingText}
              alt="Loading"
              className="object-cover"
              style={{
                width: '150vw',
                height: '150vh',
                minWidth: '150vw',
                minHeight: '150vh',
              }}
            />
          </motion.div>

          {/* Decorative Sparkles */}
          <motion.div
            className="absolute text-4xl z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: '15%',
              top: '20%',
              filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))'
            }}
          >
            ✦
          </motion.div>

          <motion.div
            className="absolute text-4xl z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{
              right: '20%',
              top: '30%',
              filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))'
            }}
          >
            ✦
          </motion.div>

          <motion.div
            className="absolute text-4xl z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              right: '8%',
              bottom: '12%',
              filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))'
            }}
          >
            ✦
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-emerald-500 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;