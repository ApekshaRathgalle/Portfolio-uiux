import React from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Palette, Video, Zap, Sparkles, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

interface ProjectCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  route: string;
  count: string;
  accent: string;
  tag: string;
  year: string;
}

const projectCategories: ProjectCategory[] = [
  {
    title: 'UI/UX Design',
    description: 'User-centered design for web and mobile',
    icon: Sparkles,
    route: '/projects/uiux',
    count: '05',
    accent: '#10b981',
    tag: 'Figma · Prototyping · User Research',
    year: '2024',
  },
  {
    title: 'Video Editing',
    description: 'Professional video production and editing',
    icon: Video,
    route: '/projects/video',
    count: '03',
    accent: '#8b5cf6',
    tag: 'Premiere · After Effects · Color Grade',
    year: '2023',
  },
  {
    title: 'Graphic Design',
    description: 'Visual identity and marketing design projects',
    icon: Palette,
    route: '/projects/graphic',
    count: '04',
    accent: '#ec4899',
    tag: 'Branding · Print · Illustration',
    year: '2023',
  },
  {
    title: 'Animation',
    description: '2D/3D animation and motion graphics',
    icon: Zap,
    route: '/projects/animation',
    count: '03',
    accent: '#f59e0b',
    tag: 'Lottie · Blender · Motion',
    year: '2024',
  },
];

// Duplicate for seamless infinite loop
const allCards = [...projectCategories, ...projectCategories];

const CARD_WIDTH = 380;
const CARD_GAP = 28;
const SPEED = 0.6;

const InfiniteTrack: React.FC<{ navigate: ReturnType<typeof useNavigate> }> = ({ navigate }) => {
  const x = useMotionValue(0);
  const isPaused = useRef(false);

  const totalWidth = (CARD_WIDTH + CARD_GAP) * projectCategories.length;

  useAnimationFrame(() => {
    if (isPaused.current) return;
    const current = x.get();
    const next = current - SPEED;
    x.set(next <= -totalWidth ? 0 : next);
  });

  return (
    <div
      className="relative overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}
    >
      <motion.div
        style={{ x, display: 'flex', gap: CARD_GAP, willChange: 'transform' }}
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        {allCards.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={`${cat.title}-${i}`}
              onClick={() => navigate(cat.route)}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{ minWidth: CARD_WIDTH }}
              className="rounded-3xl cursor-pointer group
                       bg-white dark:bg-gray-800
                       border border-gray-200/50 dark:border-gray-700/50
                       hover:border-emerald-500/30 dark:hover:border-emerald-400/30
                       shadow-lg hover:shadow-2xl dark:shadow-gray-900/20
                       transition-all duration-300
                       overflow-hidden relative"
            >
              <div className="p-8 relative z-10 flex flex-col h-full">
                {/* Animated gradient background overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${cat.accent}15 0%, transparent 100%)`,
                  }}
                />

                {/* Top row */}
                <div className="relative z-10 flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center
                              bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200/50 dark:border-emerald-700/50"
                  >
                    <Icon style={{ color: cat.accent }} className="w-6 h-6" />
                  </div>

                  {/* Year + count */}
                  <div className="text-right">
                    <div className="text-xs font-mono text-gray-400 dark:text-gray-500 tracking-widest">{cat.year}</div>
                    <div
                      className="text-5xl font-black leading-none mt-1 opacity-60"
                      style={{
                        color: cat.accent,
                        fontFamily: '"Bebas Neue", Impact, sans-serif',
                      }}
                    >
                      {cat.count}
                    </div>
                  </div>
                </div>

                {/* Center divider line */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

                {/* Title + desc */}
                <div className="flex-1 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{cat.description}</p>
                  <div className="text-xs text-gray-500 dark:text-gray-500 font-mono tracking-wide">{cat.tag}</div>
                </div>

                {/* Bottom CTA row */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between pt-2">
                    <span
                      className="text-sm font-semibold tracking-widest uppercase"
                      style={{ color: cat.accent }}
                    >
                      Explore
                    </span>
                    <motion.div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: cat.accent }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden
                 bg-white dark:bg-black
                 transition-colors duration-300"
    >
      {/* Animated background elements - matching Skills section style */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-900/20 
                       rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-900/10 
                       rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - matching Skills/Contact section style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore my diverse portfolio of creative projects across design, development, and multimedia
          </motion.p>
        </motion.div>

        {/* Scrolling track */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <InfiniteTrack navigate={navigate} />
        </motion.div>

        {/* Bottom decoration - matching Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 
                         bg-emerald-100 dark:bg-emerald-900/30 
                         rounded-full text-sm text-emerald-700 dark:text-emerald-300
                         backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-500 rounded-full" 
            />
            <span>More projects coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;