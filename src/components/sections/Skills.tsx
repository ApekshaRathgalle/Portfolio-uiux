import React from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { skills } from '../../data/skills';
import * as LucideIcons from 'lucide-react';
import * as SimpleIcons from 'react-icons/si';
import * as FontAwesome from 'react-icons/fa';
import { useRef } from 'react';

const Skills: React.FC = () => {
  const skillCategories = {
    technical: skills.filter(skill => skill.category === 'technical'),
    tools: skills.filter(skill => skill.category === 'tools'),
    soft: skills.filter(skill => skill.category === 'soft')
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  // Brand color mapping for icons
  const brandColors: Record<string, string> = {
    // Frontend Frameworks
    'React': '#61DAFB',
    'Vue': '#4FC08D',
    'Angular': '#DD0031',
    'Svelte': '#FF3E00',
    'Next.js': '#000000',
    'Nuxt': '#00DC82',
    'Gatsby': '#663399',
    
    // CSS/Styling
    'CSS': '#1572B6',
    'Sass': '#CC6699',
    'Tailwind': '#06B6D4',
    'Bootstrap': '#7952B3',
    'Material-UI': '#007FFF',
    'Chakra UI': '#319795',
    
    // Backend/Server
    'Node.js': '#339933',
    'Express': '#000000',
    'Django': '#092E20',
    'Flask': '#000000',
    'Spring': '#6DB33F',
    'Laravel': '#FF2D20',
    'Rails': '#CC0000',
    
    // Databases
    'MongoDB': '#47A248',
    'PostgreSQL': '#4169E1',
    'MySQL': '#4479A1',
    'Redis': '#DC382D',
    'Firebase': '#FFCA28',
    
    // Languages
    'JavaScript': '#F7DF1E',
    'TypeScript': '#3178C6',
    'Python': '#3776AB',
    'Java': '#007396',
    'C++': '#00599C',
    'Go': '#00ADD8',
    'Rust': '#000000',
    'PHP': '#777BB4',
    'Ruby': '#CC342D',
    'Swift': '#FA7343',
    'Kotlin': '#7F52FF',
    
    // Tools
    'Git': '#F05032',
    'Docker': '#2496ED',
    'Kubernetes': '#326CE5',
    'AWS': '#FF9900',
    'Azure': '#0089D6',
    'Vercel': '#000000',
    'Netlify': '#00C7B7',
    'Figma': '#F24E1E',
    'Adobe XD': '#FF61F6',
    'Sketch': '#F7B500',
    'VS Code': '#007ACC',
    'Webpack': '#8DD6F9',
    'Vite': '#646CFF',
    'ESLint': '#4B32C3',
    'Prettier': '#F7B93E',
    'Jest': '#C21325',
    'Cypress': '#17202C',
    'Postman': '#FF6C37',
    'Insomnia': '#5849BE',
    
    // CMS
    'WordPress': '#21759B',
    'Contentful': '#2478CC',
    'Strapi': '#2F2E8B',
  };

  const getIconComponent = (iconName: string) => {
    // Try SimpleIcons first
    const SimpleIconComponent = (SimpleIcons as any)[iconName];
    if (SimpleIconComponent) return SimpleIconComponent;
    
    // Try FontAwesome
    const FontAwesomeComponent = (FontAwesome as any)[iconName];
    if (FontAwesomeComponent) return FontAwesomeComponent;
    
    // Try LucideIcons
    const LucideComponent = (LucideIcons as any)[iconName];
    if (LucideComponent) return LucideComponent;
    
    // Default fallback
    return LucideIcons.Code2;
  };

  const CARD_WIDTH = 180;
  const CARD_GAP = 20;
  const SPEED = 0.5;

  const InfiniteSkillTrack: React.FC<{ 
    skills: typeof skillCategories.technical;
    direction?: 'left' | 'right';
  }> = ({ skills, direction = 'left' }) => {
    const x = useMotionValue(0);
    const isPaused = useRef(false);

    // Duplicate skills for seamless loop
    const allSkills = [...skills, ...skills];
    const totalWidth = (CARD_WIDTH + CARD_GAP) * skills.length;

    useAnimationFrame(() => {
      if (isPaused.current) return;
      const current = x.get();
      const speed = direction === 'left' ? -SPEED : SPEED;
      const next = current + speed;
      
      if (direction === 'left') {
        x.set(next <= -totalWidth ? 0 : next);
      } else {
        x.set(next >= 0 ? -totalWidth : next);
      }
    });

    return (
      <div
        className="relative overflow-hidden"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' 
        }}
      >
        <motion.div
          style={{ x, display: 'flex', gap: CARD_GAP, willChange: 'transform' }}
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          {allSkills.map((skill, i) => {
            const IconComponent = getIconComponent(skill.icon);
            const brandColor = brandColors[skill.name] || '#10b981';
            
            return (
              <motion.div
                key={`${skill.name}-${i}`}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{ minWidth: CARD_WIDTH }}
                className="group relative"
              >
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl 
                             bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                             border border-gray-200/50 dark:border-gray-700/50
                             hover:bg-white/80 dark:hover:bg-gray-800/80
                             hover:border-emerald-500/30 dark:hover:border-emerald-400/30
                             transition-all duration-300 cursor-pointer
                             hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10
                             h-full">
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                    style={{ color: brandColor }}
                  >
                    <IconComponent className="w-12 h-12" />
                  </motion.div>
                  
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  const ScrollingSection: React.FC<{ 
    title: string; 
    skills: typeof skillCategories.technical;
    direction?: 'left' | 'right';
  }> = ({ title, skills, direction = 'left' }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-6"
    >
      <motion.div 
        variants={itemVariants}
        className="flex items-center space-x-4"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
      </motion.div>

      <InfiniteSkillTrack skills={skills} direction={direction} />
    </motion.div>
  );

  const SoftSkillItem: React.FC<{ skill: typeof skills[0]; index: number }> = ({ skill, index }) => {
    const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.Code2;
    
    return (
      <motion.div
        variants={itemVariants}
        className="group relative"
      >
        <div className="flex items-center py-4 px-6 rounded-2xl 
                       bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                       border border-gray-200/50 dark:border-gray-700/50
                       hover:bg-white/80 dark:hover:bg-gray-800/80
                       hover:border-emerald-500/30 dark:hover:border-emerald-400/30
                       transition-all duration-300 cursor-pointer
                       hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10">
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30
                     flex items-center justify-center mr-4 flex-shrink-0
                     group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/40
                     transition-colors duration-300"
          >
            <IconComponent className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
          
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100
                         group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                         transition-colors duration-300">
              {skill.name}
            </h4>
          </div>
        </div>
      </motion.div>
    );
  };

  const SoftSkillsSection: React.FC<{ 
    title: string; 
    skills: typeof skillCategories.soft;
  }> = ({ title, skills }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-6"
    >
      <motion.div 
        variants={itemVariants}
        className="flex items-center space-x-4"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SoftSkillItem key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden
                 bg-white dark:bg-black
                 transition-colors duration-300">
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-900/20 
                       rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-900/10 
                       rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Skills & <span className="text-emerald-600 dark:text-emerald-400">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern digital experiences
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          <ScrollingSection
            title="Technical Skills"
            skills={skillCategories.technical}
            direction="left"
          />
          
          <ScrollingSection
            title="Tools & Technologies"
            skills={skillCategories.tools}
            direction="right"
          />
          
          <SoftSkillsSection
            title="Core Strengths"
            skills={skillCategories.soft}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 
                         bg-emerald-100 dark:bg-emerald-900/30 
                         rounded-full text-sm text-emerald-700 dark:text-emerald-300">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Continuously learning and growing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;