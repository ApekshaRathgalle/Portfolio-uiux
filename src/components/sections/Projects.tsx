import React from 'react';
import { motion, useAnimationFrame, useMotionValue, animate } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Palette, Video, Sparkles, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

interface ProjectCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  route: string;
  count: string;
  accent: string;
  tag: string;
  year: string;
  accentDark: string;
  iconGradient: string;
  borderColor: string;
}

const projectCategories: ProjectCategory[] = [
  {
    title: 'Video Editing',
    description: 'Professional video production and editing',
    icon: Video,
    route: '/projects/video',
    count: '03',
    accent: '#a78bfa',
    accentDark: '#7c3aed',
    iconGradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
    borderColor: 'rgba(167,139,250,0.25)',
    tag: 'Premiere · After Effects · Color Grade',
    year: '2023',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design for web and mobile',
    icon: Sparkles,
    route: '/projects/uiux',
    count: '05',
    accent: '#34d399',
    accentDark: '#059669',
    iconGradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
    borderColor: 'rgba(52,211,153,0.25)',
    tag: 'Figma · Prototyping · User Research',
    year: '2024',
  },
  {
    title: 'Graphic Design',
    description: 'Visual identity and marketing design projects',
    icon: Palette,
    route: '/projects/graphic',
    count: '04',
    accent: '#fb7185',
    accentDark: '#e11d48',
    iconGradient: 'linear-gradient(135deg, #e11d48 0%, #fb7185 100%)',
    borderColor: 'rgba(251,113,133,0.25)',
    tag: 'Branding · Print · Illustration',
    year: '2024',
  },
  {
    title: 'Animation',
    description: 'Motion graphics and animated content',
    icon: Video,
    route: '/projects/animation',
    count: '08',
    accent: '#f59e0b',
    accentDark: '#d97706',
    iconGradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
    borderColor: 'rgba(245,158,11,0.25)',
    tag: 'After Effects · Motion Design · 3D',
    year: '2023',
  },
];

const allCards = [...projectCategories, ...projectCategories];

const CARD_WIDTH = 380;
const CARD_GAP = 28;
const SPEED = 0.5;

const ProjectCard: React.FC<{ cat: typeof projectCategories[0]; onClick: () => void }> = ({ cat, onClick }) => {
  const Icon = cat.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      style={{ minWidth: CARD_WIDTH, cursor: 'pointer' }}
      className="relative group"
    >
      {/* Card shell */}
      <div
        className="rounded-3xl border backdrop-blur-xl transition-all duration-400 overflow-hidden relative
                   border-gray-200/50 dark:border-white/[0.07]
                   bg-white/80 dark:bg-white/[0.03]
                   hover:border-gray-300/70 dark:hover:border-white/[0.15]
                   hover:bg-white/90 dark:hover:bg-white/[0.06]"
      >
        {/* Subtle top glow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-0 left-[10%] right-[10%] h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)`,
          }}
        />

        {/* Corner gradient bloom */}
        <motion.div
          animate={{ opacity: hovered ? 0.15 : 0.05 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-15 -right-15 w-50 h-50 rounded-full blur-3xl pointer-events-none"
          style={{
            background: cat.accent,
          }}
        />

        <div className="p-8 relative z-10">
          {/* Top row */}
          <div className="flex items-start justify-between mb-7">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
              style={{
                background: cat.iconGradient,
                boxShadow: `0 8px 24px ${cat.accentDark}50`,
              }}
            >
              <Icon className="w-6.5 h-6.5 text-white" />
            </motion.div>

            {/* Year + count */}
            <div className="text-right">
              <div className="font-mono text-[11px] tracking-[0.15em] mb-1 opacity-80"
                   style={{ color: cat.accent }}>
                {cat.year}
              </div>
              <div className="text-[64px] font-black leading-none font-['Bebas_Neue',Impact,sans-serif]
                            opacity-50 group-hover:opacity-100 transition-opacity duration-400"
                   style={{
                     color: 'transparent',
                     WebkitTextStroke: `1.5px ${cat.accent}`,
                   }}>
                {cat.count}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200/70 dark:bg-white/[0.07] mb-6" />

          {/* Title */}
          <h3 className="text-[26px] font-bold mb-2.5 leading-tight tracking-tight
                        text-gray-900 dark:text-gray-100
                        font-['DM_Sans','Helvetica_Neue',sans-serif]">
            {cat.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4
                       text-gray-600 dark:text-white/45">
            {cat.description}
          </p>

          {/* Tags */}
          <div className="text-[11px] font-mono tracking-[0.08em] mb-7 uppercase
                         text-gray-500 dark:text-white/30">
            {cat.tag}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-5 border-t border-gray-200/70 dark:border-white/[0.06]">
            <motion.span
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs font-bold tracking-[0.15em] uppercase font-mono"
              style={{ color: cat.accent }}
            >
              Explore
            </motion.span>

            <motion.div
              whileHover={{ scale: 1.15, rotate: 45 }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: cat.iconGradient,
                boxShadow: `0 4px 16px ${cat.accentDark}60`,
              }}
            >
              <ArrowUpRight className="w-[18px] h-[18px] text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const InfiniteTrack: React.FC<{ navigate: ReturnType<typeof useNavigate> }> = ({ navigate }) => {
  const x = useMotionValue(0);
  const isPaused = useRef(false);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);

  const totalWidth = (CARD_WIDTH + CARD_GAP) * projectCategories.length;

  useAnimationFrame(() => {
    if (isPaused.current || !isAutoScrollEnabled) return;
    const current = x.get();
    const next = current - SPEED;
    x.set(next <= -totalWidth ? 0 : next);
  });

  const scrollToNext = () => {
    setIsAutoScrollEnabled(false);
    const current = x.get();
    const target = current - (CARD_WIDTH + CARD_GAP);
    animate(x, target, { duration: 0.5 }).then(() => setIsAutoScrollEnabled(true));
  };

  const scrollToPrev = () => {
    setIsAutoScrollEnabled(false);
    const current = x.get();
    const target = current + (CARD_WIDTH + CARD_GAP);
    animate(x, target, { duration: 0.5 }).then(() => setIsAutoScrollEnabled(true));
  };

  return (
    <div className="relative">
      {/* Navigation buttons */}
      {[
        { dir: 'prev', fn: scrollToPrev, Icon: ChevronLeft, pos: 'left-4' },
        { dir: 'next', fn: scrollToNext, Icon: ChevronRight, pos: 'right-4' }
      ].map(({ dir, fn, Icon, pos }) => (
        <motion.button
          key={dir}
          onClick={fn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute ${pos} top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer
                     bg-white/60 dark:bg-white/[0.06]
                     border border-gray-300/50 dark:border-white/[0.12]
                     backdrop-blur-xl`}
          aria-label={`${dir} project`}
        >
          <Icon className="w-5 h-5 text-gray-700 dark:text-white/70" />
        </motion.button>
      ))}

      {/* Track */}
      <div
        style={{
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <motion.div
          style={{ x, display: 'flex', gap: CARD_GAP, willChange: 'transform' }}
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          {allCards.map((cat, i) => (
            <ProjectCard
              key={`${cat.title}-${i}`}
              cat={cat}
              onClick={() => navigate(cat.route)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="relative py-24 px-6 overflow-hidden transition-colors duration-300
                bg-gradient-to-br from-gray-50 via-white to-gray-100
                dark:from-[#080c10] dark:via-[#080c10] dark:to-[#0a0e12]"
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[40px]
                       bg-gradient-to-r from-purple-200/20 to-transparent
                       dark:from-purple-500/8 dark:to-transparent" />
        <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[40px]
                       bg-gradient-to-r from-emerald-200/20 to-transparent
                       dark:from-emerald-500/7 dark:to-transparent" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0"
           style={{
             backgroundImage: `
               linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px',
           }}
      />
      <div className="absolute inset-0 dark:block hidden"
           style={{
             backgroundImage: `
               linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px',
           }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5
                      border border-emerald-400/25 dark:border-emerald-400/25
                      bg-emerald-50/50 dark:bg-emerald-400/[0.06]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            <span className="text-xs font-mono tracking-[0.1em] text-emerald-700 dark:text-emerald-400">
              SELECTED WORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[clamp(36px,5vw,56px)] font-extrabold mb-4 leading-tight tracking-tight
                      text-gray-900 dark:text-gray-100
                      font-['DM_Sans','Helvetica_Neue',sans-serif]"
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-purple-500 dark:from-emerald-400 dark:to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base max-w-[520px] mx-auto leading-relaxed
                      text-gray-600 dark:text-white/40"
          >
            Explore my diverse portfolio of creative projects across design, development, and multimedia
          </motion.p>
        </motion.div>

        {/* Scrolling track */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <InfiniteTrack navigate={navigate} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;