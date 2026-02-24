import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Eye, Sparkles, ArrowUpRight } from 'lucide-react';
import { uiuxProjects } from '../../data/uiuxProjects';

const UIUXProjects: React.FC = () => {
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
          animation: marquee 20s linear infinite;
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
            className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-6 group transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm tracking-wider uppercase">Back to Home</span>
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                UI/UX <span className="text-emerald-600 dark:text-emerald-400">Design</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2 font-mono text-sm tracking-wider uppercase">
                {uiuxProjects.length} Design Projects
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl font-light leading-relaxed">
            User-centered design solutions focused on creating intuitive and delightful experiences
          </p>
        </motion.div>

        {/* Marquee ticker */}
        <div className="border-y border-gray-200 dark:border-gray-800 py-3 mb-16 overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 transition-colors duration-300">
          <div className="marquee">
            <div className="marquee-inner">
              {['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems', 'Interaction Design', 'Visual Design', 'Information Architecture', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems', 'Interaction Design', 'Visual Design', 'Information Architecture'].map((item, i) => (
                <span key={i} className="font-mono text-xs text-gray-700 dark:text-gray-300 tracking-widest uppercase flex-shrink-0 transition-colors duration-300">
                  {item} <span className="text-emerald-600 dark:text-emerald-400 mx-4">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiuxProjects.map((project, index) => (
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
                onClick={() => navigate(`/projects/uiux/${project.id}`)}
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
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quick Actions */}
        {project.demoUrl && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg backdrop-blur-sm"
            >
              <ExternalLink className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </motion.a>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold font-mono tracking-wider uppercase rounded-full shadow-lg">
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
          {project.technologies.slice(0, 2).map((tech: string) => (
            <span
              key={tech}
              className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-bold tracking-wider uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 font-light">
          {project.description}
        </p>

        {/* View Details */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm font-bold font-mono tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            View Details
          </span>
          <motion.div
            whileHover={{ x: 5 }}
            className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center"
          >
            <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UIUXProjects;