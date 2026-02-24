import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
      onClick={onClick}
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

      {/* Image */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-900/20 dark:to-orange-900/20">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.15 : 1, rotate: isHovered ? 2 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Sparkle Effect */}
        <motion.div
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
          className="absolute top-4 right-4"
        >
          <Sparkles className="w-6 h-6 text-amber-400" />
        </motion.div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center shadow-2xl"
          >
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </motion.div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold font-mono tracking-wider uppercase rounded-full shadow-lg">
              Featured
            </span>
          </div>
        )}

        {/* Timeline badge */}
        <div className="absolute bottom-4 right-4">
          <span className="px-3 py-1 bg-black/70 text-white text-xs font-bold font-mono tracking-wider uppercase rounded-lg backdrop-blur-sm">
            {project.timeline}
          </span>
        </div>
      </div>

      {/* Project info */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.features?.slice(0, 2).map((feature: string) => (
            <span
              key={feature}
              className="text-xs text-amber-600 dark:text-amber-400 font-mono font-bold tracking-wider uppercase"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 font-light">
          {project.description}
        </p>

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