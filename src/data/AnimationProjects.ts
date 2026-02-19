import { Project } from '../types';

export const animationProjects: Project[] = [
  {
    id: 'animation-1',
    title: 'Your Animation Project',
    description: 'Brief description of the animation project',
    longDescription: 'Detailed description of the animation concept, storyboard, and production process.',
    technologies: ['After Effects', 'Blender', 'Cinema 4D', 'Unity'],
    features: [
      '2D/3D animation',
      'Character design',
      'Motion graphics',
      'Visual storytelling'
    ],
    challenges: [
      'Challenge 1',
      'Challenge 2'
    ],
    solutions: [
      'Solution 1',
      'Solution 2'
    ],
    imageUrl: '/path/to/animation-thumbnail.jpg',
    videoUrl: 'https://vimeo.com/your-animation',
    demoUrl: 'https://vimeo.com/your-animation',
    category: 'animation',
    featured: true,
    timeline: '3 weeks'
  }
  // Add more animation projects
];