export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  imageUrl: string;
  videoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'uiux' | 'video' | 'graphic' | 'animation';
  featured: boolean;
  timeline: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'tools';
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}