import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-white dark:bg-black">
          {/* Pulse blobs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-100/20 dark:bg-emerald-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/10 dark:bg-emerald-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-sm"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/3 w-6 h-6 border-2 border-emerald-400/30 dark:border-emerald-300/30 rounded-full"
            animate={{
              y: [20, -20, 20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;