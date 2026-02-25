import { Project } from '../types';

export const videoProjects: Project[] = [
  {
    id: 'video-0',
    title: 'AI Creative Reel',
    description: 'A professional video editing showcase demonstrating color grading, motion graphics, and visual effects',
    longDescription: 'This video project showcases advanced editing techniques including color grading, motion graphics integration, and seamless transitions.',
    technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    features: ['Color grading', 'Motion graphics', 'Sound design', 'Visual effects'],
    challenges: [
      'Maintaining consistent color palette throughout',
      'Synchronizing audio with visual elements',
      'Optimizing render times for high-quality output',
    ],
    solutions: [
      'Created custom LUTs for color consistency',
      'Used precise timeline markers for audio sync',
      'Implemented proxy workflow for faster editing',
    ],
    imageUrl: '',
    videoUrl: 'https://player.vimeo.com/video/1168034834',
    category: 'video',
    featured: true,
    timeline: '2 weeks',
  },
  
];