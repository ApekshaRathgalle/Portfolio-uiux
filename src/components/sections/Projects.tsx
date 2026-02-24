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
  bgGradient: string;
  iconBg: string;
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
    bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20',
    iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-500',
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
    bgGradient: 'from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/20 dark:via-violet-950/20 dark:to-fuchsia-950/20',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-600',
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
    bgGradient: 'from-pink-50 via-rose-50 to-red-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-red-950/20',
    iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
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
    bgGradient: 'from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-yellow-950/20',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
  },
];

// Duplicate for seamless infinite loop
const allCards = [...projectCategories, ...projectCategories];

const CARD_WIDTH = 400;
const CARD_GAP = 32;
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
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{ minWidth: CARD_WIDTH }}
              className="rounded-3xl cursor-pointer group relative overflow-hidden
                       shadow-xl hover:shadow-2xl 
                       transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} transition-all duration-500`} />
              
              {/* Animated mesh overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${cat.accent}20 0%, transparent 70%)`,
                }}
              />

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `0 0 0 1px ${cat.accent}40, 0 0 30px ${cat.accent}20`,
                }}
              />

              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(6)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ 
                      background: cat.accent,
                      left: `${20 + idx * 15}%`,
                      top: `${30 + (idx % 3) * 20}%`,
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0, 0.6, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  {/* Animated Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 ${cat.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Year + count with enhanced styling */}
                  <div className="text-right">
                    <motion.div 
                      className="text-xs font-mono tracking-widest mb-1"
                      style={{ color: cat.accent }}
                    >
                      {cat.year}
                    </motion.div>
                    <motion.div
                      className="text-6xl font-black leading-none"
                      style={{
                        color: cat.accent,
                        fontFamily: '"Bebas Neue", Impact, sans-serif',
                        textShadow: `0 2px 10px ${cat.accent}30`,
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {cat.count}
                    </motion.div>
                  </div>
                </div>

                {/* Decorative divider */}
                <motion.div 
                  className="h-px mb-6 bg-gradient-to-r from-transparent via-gray-400/30 dark:via-gray-600/30 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Title + description */}
                <div className="flex-1 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 
                               group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${cat.accent} 0%, ${cat.accent}CC 100%)`,
                      }}>
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-500 font-mono tracking-wide">
                    {cat.tag}
                  </div>
                </div>

                {/* CTA row with enhanced styling */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <motion.span
                    className="text-sm font-bold tracking-widest uppercase"
                    style={{ color: cat.accent }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Explore
                  </motion.span>
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${cat.accent} 0%, ${cat.accent}DD 100%)`,
                    }}
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${cat.accent} 0%, transparent 70%)`,
                }}
              />
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
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-900/20 
                       rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-900/10 
                       rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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

        {/* Bottom decoration */}
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