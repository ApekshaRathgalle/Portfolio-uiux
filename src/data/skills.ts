import { Skill, Education, ContactInfo } from '../types';

export const skills: Skill[] = [

  // Tools
   { name: 'Adobe Illustrator', level: 85, category: 'tools', icon: 'SiAdobeillustrator' },
  { name: 'Adobe Photoshop', level: 80, category: 'tools', icon: 'SiAdobephotoshop' },
  { name: 'Figma', level: 95, category: 'tools', icon: 'SiFigma' },
  { name: 'Git & GitHub', level: 90, category: 'tools', icon: 'SiGithub' },
  

  // Digital Marketing Tools
  { name: 'Google Analytics', level: 85, category: 'tools', icon: 'SiGoogleanalytics' },
  { name: 'Google Ads', level: 80, category: 'tools', icon: 'SiGoogleads' },
  { name: 'Meta Ads Manager', level: 75, category: 'tools', icon: 'SiMeta' },
  { name: 'Mailchimp', level: 70, category: 'tools', icon: 'SiMailchimp' },
  { name: 'HubSpot', level: 65, category: 'tools', icon: 'SiHubspot' },
  { name: 'Google Search Console', level: 80, category: 'tools', icon: 'SiGooglesearchconsole' },

  // Digital Marketing Technical Skills
  { name: 'SEO / SEM', level: 80, category: 'technical', icon: 'TrendingUp' },
  { name: 'Social Media Marketing', level: 85, category: 'technical', icon: 'Share2' },
  { name: 'Content Marketing', level: 75, category: 'technical', icon: 'FileText' },
  { name: 'Email Marketing', level: 75, category: 'technical', icon: 'Mail' },
  { name: 'PPC Advertising', level: 70, category: 'technical', icon: 'MousePointer' },
  { name: 'Digital Analytics', level: 80, category: 'technical', icon: 'BarChart2' },
  
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
    year: '2023 - Present',
    description: 'Specializing in Interactive Media and Digital Marketing'
  },
  {
    degree: 'GCE Advanced Level',
    institution: 'Anuradhapura Central College',
    year: '2021',
    description: 'Bio Science'
  }
];

export const contactInfo: ContactInfo = {
  email: 'apeksharathgalle@gmail.com',
  phone: '+94 70 266 0480',
  linkedin: 'https://www.linkedin.com/in/apeksha-rathgalle-831190314/',
  github: 'https://github.com/ApekshaRathgalle'
};