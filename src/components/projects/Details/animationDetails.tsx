import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Zap, Layers, TrendingUp, Play, CheckCircle, Target } from 'lucide-react';
import { animationProjects } from '../../../data/AnimationProjects';
import AnimatedButton from '../../ui/AnimatedButton';

const AnimationProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = animationProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h1>
          <AnimatedButton onClick={() => navigate('/projects/animation')}>
            Back to Animation Projects
          </AnimatedButton>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const animationSteps = [
    {
      title: 'Concept & Storyboard',
      description: 'Developing the narrative and visual direction',
    },
    {
      title: 'Animation Production',
      description: 'Creating keyframes and motion sequences',
    },
    {
      title: 'Refinement',
      description: 'Polishing details and timing adjustments',
    },
    {
      title: 'Final Export',
      description: 'Rendering and optimization for delivery',
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <AnimatedButton
            variant="outline"
            onClick={() => navigate('/projects/animation')}
            icon={ArrowLeft}
          >
            Back to Animation Projects
          </AnimatedButton>

          {project.videoUrl && (
            <AnimatedButton
              variant="secondary"
              href={project.videoUrl}
              icon={Play}
            >
              Watch Animation
            </AnimatedButton>
          )}
        </motion.div>

        {/* Project Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>

            <p className="font-mono text-xs tracking-widest uppercase text-amber-600 dark:text-amber-400 mb-4">
              {project.timeline} · Animation
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 font-light">
              {project.longDescription}
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400 font-mono">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full" />
                <span>Animation</span>
              </div>
            </div>
          </motion.div>

          {/* Project Image/Video */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-black"
          >
            {project.videoUrl ? (
              <div className="aspect-video">
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-96 object-cover"
              />
            )}
          </motion.div>

          {/* Animation Process */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-amber-900/10 p-8 rounded-2xl transition-colors duration-300">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Animation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {animationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center group cursor-pointer border-2 border-transparent hover:border-amber-200 dark:hover:border-amber-800 transition-all duration-300 shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600 dark:text-amber-400 font-mono">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Software */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3" />
              Tools & Software
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {project.technologies.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl text-center shadow-sm border-2 border-transparent hover:border-amber-200 dark:hover:border-amber-700 transition-all duration-300"
                >
                  <div className="text-sm font-bold text-gray-900 dark:text-white font-mono">{tool}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animation Highlights */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3" />
              Animation Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl group cursor-pointer border-2 border-transparent hover:border-amber-200 dark:hover:border-amber-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 bg-amber-500 dark:bg-amber-400 rounded-full flex-shrink-0"
                  />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-300 font-light">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-l-4 border-red-500 dark:border-red-400 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Target className="w-6 h-6 text-red-500 dark:text-red-400 mr-3" />
                Animation Challenges
              </h3>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-700 dark:text-gray-300 font-light">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-l-4 border-amber-500 dark:border-amber-400 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3" />
                Creative Solutions
              </h3>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <motion.div
                    key={solution}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-amber-500 dark:bg-amber-400 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-700 dark:text-gray-300 font-light">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-amber-500 to-orange-600 p-8 rounded-2xl text-white shadow-xl"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Love this animation?</h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto font-light">
              Ready to bring your ideas to life with engaging animations? Let's create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {project.videoUrl && (
                <AnimatedButton
                  variant="secondary"
                  href={project.videoUrl}
                  icon={Play}
                  className="bg-white text-amber-600 hover:bg-gray-100 font-mono"
                >
                  Watch Animation
                </AnimatedButton>
              )}
              <AnimatedButton
                variant="outline"
                href="/#contact"
                className="border-white text-white hover:bg-white hover:text-amber-600 font-mono"
              >
                Start Your Project
              </AnimatedButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimationProjectDetail;