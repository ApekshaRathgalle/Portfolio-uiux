import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Eye, Zap, Sparkles, ArrowUpRight } from 'lucide-react';
import { animationProjects } from '../../data/AnimationProjects';

const AnimationProjects: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <style>{`
        .marquee {
          display: flex;
          overflow: hidden;
          gap: 2rem;
          white-space: nowrap;
        }
        .marquee-inner {
          display: flex;
          gap: 2rem;
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 mb-6 group transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm tracking-wider uppercase">Back to Home</span>
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Motion & <span className="text-amber-600 dark:text-amber-400">Animation</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2 font-mono text-sm tracking-wider uppercase">
                {animationProjects.length} Dynamic Projects
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl font-light leading-relaxed">
            Dynamic visual experiences through 2D/3D animation and motion graphics
          </p>
        </motion.div>

        {/* Marquee ticker */}
        <div className="border-y border-gray-200 dark:border-gray-800 py-3 mb-16 overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 transition-colors duration-300">
          <div className="marquee">
            <div className="marquee-inner">
              {['Motion Graphics', '2D Animation', '3D Modeling', 'Character Design', 'Visual Effects', 'Lottie', 'After Effects', 'Blender', 'Motion Graphics', '2D Animation', '3D Modeling', 'Character Design', 'Visual Effects', 'Lottie', 'After Effects', 'Blender'].map((item, i) => (
                <span key={i} className="font-mono text-xs text-gray-700 dark:text-gray-300 tracking-widest uppercase flex-shrink-0 transition-colors duration-300">
                  {item} <span className="text-amber-600 dark:text-amber-400 mx-4">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animationProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <ProjectCard
                project={project}
                index={index}
                isHovered={hoveredId === project.id}
                onHover={setHoveredId}
                onClick={() => navigate(`/projects/animation/${project.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Project Card ── */
const ProjectCard = ({ project, index, isHovered, onHover, onClick }: {
  project: any;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  onClick: () => void;
}) => {
  const [playing, setPlaying] = useState(false);

  // Determine media type
  const hasVimeo = !!project.vimeoUrl;
  const hasLocalImage = !!project.imageUrl;
  const hasVideo = hasVimeo;

  // Build embed URL for Vimeo
  const embedUrl = hasVimeo
    ? `${project.vimeoUrl}?autoplay=${playing ? 1 : 0}&title=0&byline=0&portrait=0&badge=0`
    : '';

  return (
    <motion.div
     className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
      onClick={(e) => {
        // Prevent navigation - just do nothing or add a toast notification
        e.preventDefault();
        console.log('Animation details coming soon!');
      }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ y: -10 }}
    >
      {/* Animated Border Gradient */}
      <motion.div
        animate={{
          background: isHovered
            ? ['linear-gradient(45deg, #f59e0b, #ea580c)', 'linear-gradient(90deg, #ea580c, #f59e0b)', 'linear-gradient(135deg, #f59e0b, #ea580c)']
            : 'transparent'
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 -z-10 blur-xl"
      />

      {/* Media Container */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-900/20 dark:to-orange-900/20">
        {hasVimeo && playing ? (
          // Vimeo iframe when playing
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={project.title}
          />
        ) : hasVimeo && !playing ? (
          // Vimeo thumbnail with play button
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setPlaying(true);
            }}
          >
            {/* Vimeo Badge */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-[#1ab7ea]/90 rounded-full">
              <svg className="w-3.5 h-3.5 text-white fill-white" viewBox="0 0 24 24">
                <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
              </svg>
              <span className="text-white text-xs font-bold">Vimeo</span>
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 42px)' }} />

            {/* Play button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-20 h-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 transition-all duration-300 shadow-2xl"
            >
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </motion.div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold text-sm truncate">{project.title}</p>
            </div>
          </div>
        ) : hasLocalImage ? (
          // Local image
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.15 : 1, rotate: isHovered ? 2 : 0 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          // Placeholder
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30">
            <Sparkles className="w-16 h-16 text-amber-500 dark:text-amber-400 opacity-30" />
          </div>
        )}

        {/* Sparkle Effect for images */}
        {!hasVimeo && (
          <motion.div
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="absolute top-4 right-4 pointer-events-none"
          >
            <Sparkles className="w-6 h-6 text-amber-400" />
          </motion.div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
            {project.title}
          </h3>
          {project.timeline && (
            <span className="ml-3 shrink-0 text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              {project.timeline}
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 font-light">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <span key={tech} className="text-xs text-amber-600 dark:text-amber-400 font-mono font-bold tracking-wider uppercase">
              {tech}
            </span>
          ))}
        </div>

        {/* View Details */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm font-bold font-mono tracking-wider uppercase text-amber-600 dark:text-amber-400">
            View Details
          </span>
          <motion.div
            whileHover={{ x: 5 }}
            className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center"
          >
            <ArrowUpRight className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimationProjects;