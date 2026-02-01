import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code2, Palette, ArrowRight } from 'lucide-react';


const Projects: React.FC = () => {
  const navigate = useNavigate();

  const projectCategories = [
    {
      title: 'UI/UX Projects',
      description: 'User-centered design solutions and case studies',
      icon: Palette,
      route: '/projects/uiux',
      color: 'from-gray-800 to-gray-900',
      bgPattern: 'bg-gradient-to-br from-gray-50 to-gray-100',
      count: '5'
    },
    {
      title: 'Full Stack Projects',
      description: 'Complete web applications with modern tech stacks',
      icon: Code2,
      route: '/projects/fullstack',
      color: 'from-emerald-500 to-emerald-600',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      count: '5'
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }
  }
} as const;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative"
          >
            Featured <span className="text-emerald-600">Projects</span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore my work across full-stack development and UI/UX design
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projectCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(category.route)}
                className={`relative overflow-hidden rounded-2xl ${category.bgPattern} p-8 cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-emerald-600 font-bold text-lg"
                >
                  {category.count}
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                  >
                    <IconComponent className={`w-8 h-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300"
                  >
                    <span>Explore Projects</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-300/20 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-500"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;