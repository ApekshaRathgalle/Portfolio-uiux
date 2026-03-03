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
        style={{
          borderRadius: '24px',
          border: `1px solid ${hovered ? cat.borderColor : 'rgba(255,255,255,0.07)'}`,
          background: hovered
            ? 'rgba(255,255,255,0.06)'
            : 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          transition: 'background 0.4s ease, border-color 0.4s ease',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Subtle top glow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)`,
          }}
        />

        {/* Corner gradient bloom */}
        <motion.div
          animate={{ opacity: hovered ? 0.15 : 0.05 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: cat.accent,
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ padding: '32px', position: 'relative', zIndex: 1 }}>
          {/* Top row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '28px' }}>
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              style={{
                width: 56,
                height: 56,
                borderRadius: '16px',
                background: cat.iconGradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 8px 24px ${cat.accentDark}50`,
                flexShrink: 0,
              }}
            >
              <Icon style={{ width: 26, height: 26, color: '#fff' }} />
            </motion.div>

            {/* Year + count */}
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: cat.accent,
                marginBottom: '4px',
                opacity: 0.8,
              }}>
                {cat.year}
              </div>
              <div style={{
                fontSize: '64px',
                fontWeight: 900,
                lineHeight: 1,
                color: 'transparent',
                WebkitTextStroke: `1.5px ${cat.accent}`,
                fontFamily: '"Bebas Neue", Impact, sans-serif',
                opacity: hovered ? 1 : 0.5,
                transition: 'opacity 0.4s ease',
              }}>
                {cat.count}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'rgba(255,255,255,0.07)',
            marginBottom: '24px',
          }} />

          {/* Title */}
          <h3 style={{
            fontSize: '26px',
            fontWeight: 700,
            color: '#f1f5f9',
            marginBottom: '10px',
            letterSpacing: '-0.02em',
            fontFamily: '"DM Sans", "Helvetica Neue", sans-serif',
            lineHeight: 1.2,
          }}>
            {cat.title}
          </h3>

          {/* Description */}
          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.6,
            marginBottom: '16px',
          }}>
            {cat.description}
          </p>

          {/* Tags */}
          <div style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '28px',
          }}>
            {cat.tag}
          </div>

          {/* CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            <motion.span
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: cat.accent,
                fontFamily: 'monospace',
              }}
            >
              Explore
            </motion.span>

            <motion.div
              whileHover={{ scale: 1.15, rotate: 45 }}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: cat.iconGradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 4px 16px ${cat.accentDark}60`,
              }}
            >
              <ArrowUpRight style={{ width: 18, height: 18, color: '#fff' }} />
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
    animate(x, current - (CARD_WIDTH + CARD_GAP), {
      type: 'spring', stiffness: 300, damping: 30,
      onComplete: () => setTimeout(() => setIsAutoScrollEnabled(true), 1000),
    });
  };

  const scrollToPrev = () => {
    setIsAutoScrollEnabled(false);
    const current = x.get();
    animate(x, current + (CARD_WIDTH + CARD_GAP), {
      type: 'spring', stiffness: 300, damping: 30,
      onComplete: () => setTimeout(() => setIsAutoScrollEnabled(true), 1000),
    });
  };

  return (
    <div className="relative">
      {/* Nav buttons */}
      {[{ dir: 'prev', fn: scrollToPrev, Icon: ChevronLeft, pos: 'left-4' },
        { dir: 'next', fn: scrollToNext, Icon: ChevronRight, pos: 'right-4' }].map(({ dir, fn, Icon, pos }) => (
        <motion.button
          key={dir}
          onClick={fn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute ${pos} top-1/2 -translate-y-1/2 z-20`}
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label={`${dir} project`}
        >
          <Icon style={{ width: 20, height: 20, color: 'rgba(255,255,255,0.7)' }} />
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
      style={{
        position: 'relative',
        padding: '100px 24px',
        overflow: 'hidden',
        background: '#080c10',
      }}
    >
      {/* Background ambient blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '10%', left: '-5%',
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', right: '-5%',
          width: 600, height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(5,150,105,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              border: '1px solid rgba(52,211,153,0.25)',
              background: 'rgba(52,211,153,0.06)',
              marginBottom: '20px',
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }} />
            <span style={{ fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.1em', color: '#34d399' }}>
              SELECTED WORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              color: '#f1f5f9',
              marginBottom: '16px',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              fontFamily: '"DM Sans", "Helvetica Neue", sans-serif',
            }}
          >
            Featured{' '}
            <span style={{
              background: 'linear-gradient(135deg, #34d399, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.4)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
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