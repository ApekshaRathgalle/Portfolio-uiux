import { Project } from '../types';

export const graphicProjects: Project[] = [
  {
    id: 'graphic-1',
    title: 'Your Graphic Design Project',
    description: 'Brief description of the graphic design project',
    longDescription: 'Detailed description of the design concept, process, and final deliverables.',
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Canva'],
    features: [
      'Brand identity',
      'Logo design',
      'Marketing materials',
      'Social media graphics'
    ],
    challenges: [
      'Challenge 1',
      'Challenge 2'
    ],
    solutions: [
      'Solution 1',
      'Solution 2'
    ],
    imageUrl: '/path/to/graphic-design.jpg',
    demoUrl: 'https://behance.net/your-project',
    category: 'graphic',
    featured: true,
    timeline: '1 month'
  }
  // Add more graphic design projects
];