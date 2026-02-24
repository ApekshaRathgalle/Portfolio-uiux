import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Target, TrendingUp, Palette, CheckCircle, Sparkles } from 'lucide-react';
import { uiuxProjects } from '../../../data/uiuxProjects';
import AnimatedButton from '../../ui/AnimatedButton';

const UIProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = uiuxProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h1>
          <AnimatedButton onClick={() => navigate('/projects/uiux')}>
            Back to UI/UX Projects
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

  const processSteps = [
    {
      icon: Users,
      title: 'User Research',
      description: 'Conducted user interviews and analyzed behavior patterns',
    },
    {
      icon: Target,
      title: 'Problem Definition',
      description: 'Identified key pain points and defined design objectives',
    },
    {
      icon: Palette,
      title: 'Design & Prototype',
      description: 'Created wireframes, mockups, and interactive prototypes',
    },
    {
      icon: TrendingUp,
      title: 'Testing & Iteration',
      description: 'Validated designs through user testing and feedback',
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
            onClick={() => navigate('/projects/uiux')}
            icon={ArrowLeft}
          >
            Back to UI/UX Projects
          </AnimatedButton>
          
          {project.demoUrl && (
            <AnimatedButton
              variant="secondary"
              href={project.demoUrl}
              icon={ExternalLink}
            >
              View Prototype
            </AnimatedButton>
          )}
        </motion.div>

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
              className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            <p className="font-mono text-xs tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-4">
              {project.timeline} · UI/UX Design
            </p>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 font-light">
              {project.longDescription}
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400 font-mono">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                <span>UI/UX Design</span>
              </div>
            </div>
          </motion.div>

          {/* Project Showcase Image */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Design Process */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-emerald-900/10 p-8 rounded-2xl transition-colors duration-300">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Design Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center group cursor-pointer border-2 border-transparent hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 shadow-md"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                    >
                      <IconComponent className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Palette className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-3" />
              Tools & Technologies
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
                  className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl text-center shadow-sm border-2 border-transparent hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300"
                >
                  <div className="text-sm font-bold text-gray-900 dark:text-white font-mono">{tool}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-3" />
              Design Features
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
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl group cursor-pointer border-2 border-transparent hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full flex-shrink-0"
                  />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300 font-light">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-l-4 border-amber-500 dark:border-amber-400 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Target className="w-6 h-6 text-amber-500 dark:text-amber-400 mr-3" />
                Design Challenges
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
                    <div className="w-2 h-2 bg-amber-500 dark:bg-amber-400 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-700 dark:text-gray-300 font-light">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-l-4 border-emerald-500 dark:border-emerald-400 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-3" />
                Design Solutions
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
                    <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-700 dark:text-gray-300 font-light">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-emerald-500 to-teal-600 p-8 rounded-2xl text-white shadow-xl"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Love this design approach?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto font-light">
              Ready to transform your product's user experience? Let's discuss how we can apply 
              these design principles to your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {project.demoUrl && (
                <AnimatedButton
                  variant="secondary"
                  href={project.demoUrl}
                  icon={ExternalLink}
                  className="bg-white text-emerald-600 hover:bg-gray-100 font-mono"
                >
                  View Prototype
                </AnimatedButton>
              )}
              <AnimatedButton
                variant="outline"
                href="/#contact"
                className="border-white text-white hover:bg-white hover:text-emerald-600 font-mono"
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

export default UIProjectDetail;