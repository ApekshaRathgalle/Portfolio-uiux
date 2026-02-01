import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import TypewriterAnimation from '../ui/TypewriterAnimation';
import AnimatedButton from '../ui/AnimatedButton';
import mep from '../../assets/mep.png'
import resume from '../../assets/Apeksha_Rathgalle_resume.pdf'

const Hero: React.FC = () => {
  const typewriterTexts = [
    "Hi, I'm Apeksha Rathgalle",
    "Full Stack Developer",
    "UI/UX Designer", 
    "Creative Problem Solver"
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Typewriter Animation */}
            <div className="space-y-4">
              <TypewriterAnimation texts={typewriterTexts} />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-xl text-gray-600 max-w-lg leading-relaxed"
              >
                UI/UX Designer
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <motion.a
                href="https://github.com/ApekshaRathgalle"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 rounded-lg hover:bg-emerald-100 transition-colors duration-200 group"
              >
                <Github className="w-6 h-6 text-gray-600 group-hover:text-emerald-600" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/apeksha-rathgalle-831190314/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 rounded-lg hover:bg-emerald-100 transition-colors duration-200 group"
              >
                <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-emerald-600" />
              </motion.a>
              <motion.a
                href="mailto:apeksharathgalle@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 rounded-lg hover:bg-emerald-100 transition-colors duration-200 group"
              >
                <Mail className="w-6 h-6 text-gray-600 group-hover:text-emerald-600" />
              </motion.a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <AnimatedButton
                onClick={scrollToProjects}
                variant="primary"
                size="lg"
                icon={ArrowDown}
              >
                View Projects
              </AnimatedButton>
              <AnimatedButton
  variant="outline"
  size="lg"
  icon={Download}
  onClick={() => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Apeksha_Rathgalle_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Download CV
</AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile picture */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-emerald-500/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={mep}
                  alt="Alex Chen"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              {/* Floating elements around profile */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full shadow-lg"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-emerald-400 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-emerald-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;