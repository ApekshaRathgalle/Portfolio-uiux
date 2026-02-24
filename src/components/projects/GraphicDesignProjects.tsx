import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Palette } from 'lucide-react';
import { graphicProjects } from '../../data/GraphicDesign';

const GraphicDesignProjects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

  const openLightbox = (projectIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setSelectedImage(projectIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % graphicProjects.length);
  };

  const goToPrevious = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + graphicProjects.length) % graphicProjects.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

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
            className="flex items-center space-x-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 mb-6 group transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm tracking-wider uppercase">Back to Home</span>
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Palette className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Graphic <span className="text-pink-600 dark:text-pink-400">Design</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2 font-mono text-sm tracking-wider uppercase">
                {graphicProjects.length} Creative Works
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl font-light leading-relaxed">
            Visual identity and branding solutions that tell compelling stories through design
          </p>
        </motion.div>

        {/* Marquee ticker */}
        <div className="border-y border-gray-200 dark:border-gray-800 py-3 mb-16 overflow-hidden bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 transition-colors duration-300">
          <div className="marquee">
            <div className="marquee-inner">
              {['Brand Identity', 'Editorial Design', 'Visual Systems', 'Typography', 'Art Direction', 'Packaging', 'Motion Graphics', 'UI/UX', 'Illustration', 'Brand Identity', 'Editorial Design', 'Visual Systems', 'Typography', 'Art Direction', 'Packaging', 'Motion Graphics', 'UI/UX', 'Illustration'].map((item, i) => (
                <span key={i} className="font-mono text-xs text-gray-700 dark:text-gray-300 tracking-widest uppercase flex-shrink-0 transition-colors duration-300">
                  {item} <span className="text-pink-600 dark:text-pink-400 mx-4">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed Grid Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {graphicProjects.map((project, index) => (
            <GalleryCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Image Container - Updated for better sizing */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <img
                src={graphicProjects[currentProjectIndex].imageUrl}
                alt={graphicProjects[currentProjectIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Counter */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                <span className="text-white text-sm font-mono">
                  {currentProjectIndex + 1} / {graphicProjects.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Gallery Card Component ── */
interface GalleryCardProps {
  project: any;
  index: number;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ project, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Fixed aspect ratio container - h-90 = 360px */}
        <div className="relative w-full h-90 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Subtle hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/20"
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-pink-500 text-white text-xs font-bold font-mono tracking-wider uppercase rounded-full shadow-lg">
                Featured
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GraphicDesignProjects;