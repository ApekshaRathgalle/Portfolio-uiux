import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/Theme';

// Sample gallery images
const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', label: null },
  { src: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600', label: 'CREATIVE WORK', animate: true },
  { src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600', label: null },
  { src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600', label: 'UI/UX DESIGN', animate: true },
  { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600', label: null },
  { src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600', label: null },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600', label: null },
  { src: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?w=600', label: 'ANIMATION', animate: true },
  { src: 'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=600', label: null },
];

// Animated Magic Icon
const MagicIcon: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <motion.svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    {/* Sparkle dots */}
    {[
      { cx: 40, cy: 6, delay: 0 },
      { cx: 74, cy: 40, delay: 0.15 },
      { cx: 40, cy: 74, delay: 0.3 },
      { cx: 6, cy: 40, delay: 0.45 },
    ].map((dot, i) => (
      <motion.circle
        key={i}
        cx={dot.cx}
        cy={dot.cy}
        r={3}
        fill={isDark ? '#10b981' : '#059669'}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 1] }}
        transition={{ delay: dot.delay, duration: 0.4, ease: 'backOut' }}
      />
    ))}

    {/* Lightning bolts */}
    <motion.path
      d="M18 28 L14 36 L19 36 L15 44"
      stroke={isDark ? '#10b981' : '#059669'}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
    />
    <motion.path
      d="M62 28 L58 36 L63 36 L59 44"
      stroke={isDark ? '#10b981' : '#059669'}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
    />

    {/* Swirl / infinity loop */}
    <motion.path
      d="M28 40 C28 32 36 26 40 32 C44 38 48 44 52 40 C56 36 56 28 52 28 C48 28 44 34 40 40 C36 46 32 50 28 48 C24 46 24 40 28 40Z"
      stroke={isDark ? '#10b981' : '#059669'}
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
    />
  </motion.svg>
);

// Gallery Card Component
interface CardProps {
  src: string;
  label?: string | null;
  animate?: boolean;
  index: number;
  isDark: boolean;
}

const GalleryCard: React.FC<CardProps> = ({ src, label, animate: hasAnimate, index, isDark }) => (
  <motion.div
    className="relative overflow-hidden"
    style={{ borderRadius: '16px' }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.05 * index, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
  >
    {hasAnimate && label && (
      <>
        {/* Border frame */}
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-colors duration-300"
          style={{
            border: `4px solid ${isDark ? '#1f2937' : '#0d0d0d'}`,
            borderRadius: '16px',
          }}
        />
        {/* Top label */}
        <div
          className="absolute top-0 left-0 right-0 z-20 flex items-center justify-center py-2 transition-colors duration-300"
          style={{ background: isDark ? '#1f2937' : '#0d0d0d' }}
        >
          <span
            className="text-xs font-bold tracking-widest transition-colors duration-300"
            style={{ color: isDark ? '#10b981' : '#c8f542', fontFamily: 'monospace' }}
          >
            {label}
          </span>
        </div>
        {/* Bottom label */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center py-2 transition-colors duration-300"
          style={{ background: isDark ? '#1f2937' : '#0d0d0d' }}
        >
          <span
            className="text-xs font-bold tracking-widest transition-colors duration-300"
            style={{ color: isDark ? '#10b981' : '#c8f542', fontFamily: 'monospace' }}
          >
            THE MAGIC
          </span>
        </div>
      </>
    )}

    <img
      src={src}
      alt=""
      className="w-full h-full object-cover"
      style={{ display: 'block', aspectRatio: '4/3' }}
    />
  </motion.div>
);

// Main LoadingScreen as a Section
const LoadingScreen: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="showcase"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Animated icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <MagicIcon isDark={isDark} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-900 dark:text-white transition-colors duration-300"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '0.15em',
            }}
          >
            WELCOME TO THE MAGIC WORLD OF ME
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl mt-6 text-gray-600 dark:text-gray-400 transition-colors duration-300"
            style={{ fontFamily: 'monospace' }}
          >
            Explore my creative showcase and experiments
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {GALLERY.map((item, i) => (
            <GalleryCard
              key={i}
              src={item.src}
              label={item.label}
              animate={item.animate}
              index={i}
              isDark={isDark}
            />
          ))}
        </motion.div>

        {/* Sparkles decoration */}
        {['15%', '80%', '10%'].map((left, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl pointer-events-none text-emerald-500 dark:text-emerald-400 transition-colors duration-300"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
            style={{
              left,
              top: ['22%', '35%', '68%'][i],
              zIndex: 40,
              fontSize: '20px',
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoadingScreen;