import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Layers, Target, TrendingUp, Palette, CheckCircle } from 'lucide-react';
import { graphicProjects } from '../../../data/GraphicDesign';
import AnimatedButton from '../../ui/AnimatedButton';

const GraphicProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = graphicProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <AnimatedButton onClick={() => navigate('/projects/graphic')}>
            Back to Graphic Design Projects
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

  const designSteps = [
    {
      icon: Target,
      title: 'Brief & Research',
      description: 'Understanding client needs and market research',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Palette,
      title: 'Concept Development',
      description: 'Creating initial design concepts and mood boards',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: Layers,
      title: 'Design Execution',
      description: 'Finalizing designs with attention to detail',
      color: 'text-pink-600',
      bg: 'bg-pink-50'
    },
    {
      icon: TrendingUp,
      title: 'Delivery & Feedback',
      description: 'Client review and final refinements',
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
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
            onClick={() => navigate('/projects/graphic')}
            icon={ArrowLeft}
          >
            Back to Graphic Design Projects
          </AnimatedButton>
          
          {project.demoUrl && (
            <AnimatedButton
              variant="primary"
              href={project.demoUrl}
              icon={ExternalLink}
            >
              View Full Project
            </AnimatedButton>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Project Hero */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-20 h-20 bg-pink-100 rounded-3xl flex items-center justify-center mx-auto"
            >
              <Palette className="w-10 h-10 text-pink-600" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {project.longDescription}
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4" />
                <span>Graphic Design</span>
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
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Design Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`${step.bg} p-6 rounded-xl text-center group cursor-pointer border-2 border-transparent hover:border-pink-200 transition-all duration-300`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 ${step.bg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <IconComponent className={`w-6 h-6 ${step.color}`} />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Palette className="w-6 h-6 text-pink-600 mr-3" />
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
                  className="p-4 bg-white rounded-xl text-center shadow-sm border-2 border-transparent hover:border-pink-200 transition-all duration-300"
                >
                  <div className="text-sm font-semibold text-gray-700">{tool}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-pink-600 mr-3" />
              Design Highlights
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
                  className="flex items-center space-x-3 p-4 bg-pink-50 rounded-xl group cursor-pointer border-2 border-transparent hover:border-pink-200 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"
                  />
                  <span className="text-gray-700 group-hover:text-pink-700 transition-colors duration-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 text-amber-500 mr-3" />
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
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-700">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-pink-600 mr-3" />
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
                    <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-700">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-pink-500 to-pink-600 p-8 rounded-2xl text-white"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Palette className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Love this design?</h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Ready to bring your brand vision to life? Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {project.demoUrl && (
                <AnimatedButton
                  variant="secondary"
                  href={project.demoUrl}
                  icon={ExternalLink}
                >
                  View Full Project
                </AnimatedButton>
              )}
              <AnimatedButton
                variant="outline"
                href="/#contact"
                className="border-white text-white hover:bg-white hover:text-pink-600"
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

export default GraphicProjectDetail;