import { Skill, Education, ContactInfo } from '../types';

export const skills: Skill[] = [

  // Tools
   { name: 'Adobe Illustrator', level: 85, category: 'tools', icon: 'SiAdobeillustrator' },
  { name: 'Adobe Photoshop', level: 80, category: 'tools', icon: 'SiAdobephotoshop' },
  { name: 'Figma', level: 95, category: 'tools', icon: 'SiFigma' },
  { name: 'Git & GitHub', level: 90, category: 'tools', icon: 'SiGithub' },
  { name: 'Android Studio', level: 80, category: 'tools', icon: 'SiAndroidstudio' },
  { name: 'VS Code', level: 90, category: 'tools', icon: 'SiVisualstudiocode' },
  { name: 'Canva', level: 90, category: 'tools', icon: 'SiCanva' },
  { name: 'Postman', level: 80, category: 'tools', icon: 'SiPostman' },
  { name: 'Blender', level: 70, category: 'tools', icon: 'SiBlender' },
  { name: 'Unity', level: 75, category: 'tools', icon: 'SiUnity' },
  { name: 'Unreal Engine', level: 70, category: 'tools', icon: 'SiUnrealengine' },
  
  // Soft Skills (keep Lucide icons)
  { name: 'Problem Solving', level: 95, category: 'soft', icon: 'Lightbulb' },
  { name: 'Team Leadership', level: 85, category: 'soft', icon: 'Users' },
  { name: 'Communication', level: 90, category: 'soft', icon: 'MessageCircle' },
  { name: 'Project Management', level: 80, category: 'soft', icon: 'Target' }
];

export const education: Education[] = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology',
    year: '2022 - Present',
    description: 'Specializing in Software Engineering with focus on full-stack development and UI/UX design.'
  },
  {
    degree: 'GCE Advanced Level',
    institution: 'Visakha Vidyalaya, Colombo',
    year: '2021',
    description: 'Physical Science stream with Mathematics, Physics, and Chemistry.'
  }
];

export const contactInfo: ContactInfo = {
  email: 'apeksharathgalle@gmail.com',
  phone: '+94 70 266 0480',
  linkedin: 'https://www.linkedin.com/in/apeksha-rathgalle-831190314/',
  github: 'https://github.com/ApekshaRathgalle'
};