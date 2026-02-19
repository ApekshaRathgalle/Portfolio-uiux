import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Calendar, ArrowDown } from 'lucide-react';
import { education } from '../../data/skills';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 text-emerald-500/20 dark:text-emerald-400/20"
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 text-emerald-500/20 dark:text-emerald-400/20"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 left-1/4 text-emerald-500/20 dark:text-emerald-400/20"
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delayChildren: 0.2,
            staggerChildren: 0.1
          }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                delay: 0.2
              }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative"
            >
              About{' '}
              <motion.span
                className="text-emerald-600 dark:text-emerald-400 relative inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Me
                <motion.div
                  className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.span>
            </motion.h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              delay: 0.3
            }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate developer and designer who believes in creating digital experiences 
            that not only look beautiful but also solve real problems. With a strong foundation 
            in both technical development and user experience design.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              damping: 20
            }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Journey
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-400 dark:from-emerald-400 dark:to-emerald-300"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.h3>
            
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
              >
                My journey into tech began with curiosity about how digital products could 
                impact people's daily lives. Over the years, I've developed a unique perspective 
                that combines technical expertise with design thinking.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
              >
                I specialize in creating full-stack applications and user interfaces that 
                prioritize both functionality and user experience. My approach involves 
                understanding user needs, designing intuitive interfaces, and implementing 
                robust, scalable solutions.
              </motion.p>
            </div>
            
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              damping: 20
            }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 relative"
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Education
              <motion.div
                className="absolute -bottom-1 right-0 h-0.5 bg-gradient-to-l from-emerald-500 to-emerald-400 dark:from-emerald-400 dark:to-emerald-300"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.h3>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    damping: 20,
                    stiffness: 300
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 transition-all duration-300 border-l-4 border-emerald-500 dark:border-emerald-400 group cursor-pointer backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent dark:from-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 300
                      }}
                      className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/60 transition-colors duration-300 relative"
                    >
                      <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-emerald-300 dark:border-emerald-500 opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h4 
                        className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                        layoutId={`title-${index}`}
                      >
                        {item.degree}
                      </motion.h4>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
                        <motion.span 
                          className="font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.institution}
                        </motion.span>
                        
                        <motion.div 
                          className="flex items-center space-x-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-4 h-4" />
                          <span>{item.year}</span>
                        </motion.div>
                      </div>
                      
                      <motion.p 
                        className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200 relative group"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <ArrowDown className="w-8 h-8" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-400 dark:border-emerald-300 opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;