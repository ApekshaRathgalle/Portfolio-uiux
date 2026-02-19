import { Project } from '../types';

export const videoProjects: Project[] = [
  {
    id: 'video-1',
    title: 'Your Video Project Title',
    description: 'Brief description of the video project',
    longDescription: 'Detailed description of the video editing project, including the creative process and techniques used.',
    technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    features: [
      'Color grading',
      'Motion graphics',
      'Sound design',
      'Visual effects'
    ],
    challenges: [
      'Challenge 1',
      'Challenge 2'
    ],
    solutions: [
      'Solution 1',
      'Solution 2'
    ],
    imageUrl: '/path/to/video-thumbnail.jpg',
    videoUrl: 'https://vimeo.com/your-video',
    demoUrl: 'https://vimeo.com/your-video',
    category: 'video',
    featured: true,
    timeline: '2 weeks'
  }
  // Add more video projects
];