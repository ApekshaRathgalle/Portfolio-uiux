import { Project } from '../types';
import video1 from '../assets/Video.mp4';
import video2 from '../assets/Video2.mp4';
import Lovestory from '../assets/Lovestory.mp4';
import AI from '../assets/AI.mp4';

export const videoProjects: Project[] = [
    {
    id: 'video-0',
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
    videoUrl: AI,
    category: 'video',
    featured: true,
    timeline: '2 weeks'
  },
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
  },
   {
    id: 'video-2',
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
    videoUrl: video2,
    category: 'video',
    featured: true,
    timeline: '2 weeks'
  },
   {
    id: 'video-3',
    title: 'Love Story',
    description: 'A cinematic love story showcasing emotional storytelling and visual artistry',
    longDescription: 'This cinematic love story demonstrates advanced storytelling techniques, emotional cinematography, and visual artistry. The project highlights the power of visual narrative in conveying deep emotional connections.',
    technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    features: [
      'Emotional storytelling',
      'Cinematography',
      'Visual artistry',
      'Narrative structure'
    ],
    challenges: [
      'Creating authentic emotional moments',
      'Maintaining visual consistency throughout the story',
      'Balancing dialogue with visual storytelling'
    ],
    solutions: [
      'Used close-up shots to emphasize emotional moments',
      'Implemented consistent color grading for visual continuity',
      'Employed strategic pacing to enhance narrative flow'
    ],
    imageUrl: '', // Empty string - no thumbnail needed
    videoUrl: Lovestory,
    category: 'video',
    featured: false,
    timeline: '3 weeks'
  }

];