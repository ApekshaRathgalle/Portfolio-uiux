import { Project } from '../types';
import video1 from '../assets/Video.mp4';

export const videoProjects: Project[] = [
  {
    id: 'video-1',
    title: 'Creative Video Project',
    description: 'A professional video editing showcase demonstrating color grading, motion graphics, and visual effects',
    longDescription: 'This video project showcases advanced editing techniques including color grading, motion graphics integration, and seamless transitions. The project demonstrates proficiency in professional video production workflows.',
    technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    features: [
      'Color grading',
      'Motion graphics',
      'Sound design',
      'Visual effects'
    ],
    challenges: [
      'Maintaining consistent color palette throughout',
      'Synchronizing audio with visual elements',
      'Optimizing render times for high-quality output'
    ],
    solutions: [
      'Created custom LUTs for color consistency',
      'Used precise timeline markers for audio sync',
      'Implemented proxy workflow for faster editing'
    ],
    imageUrl: '', // Empty string - no thumbnail needed
    videoUrl: video1,
    category: 'video',
    featured: true,
    timeline: '2 weeks'
  }
];