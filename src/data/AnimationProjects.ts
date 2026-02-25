import { Project } from '../types';
//import animation1 from '../assets/animation1.jpg'; // Add your local images
import g9 from '../assets/g9.png';
export const animationProjects: Project[] = [
  {
    id: 'animation-1',
    title: '3D Character Animation',
    description: 'Dynamic character rigging and animation showcasing advanced movement and expression techniques',
    longDescription: 'This 3D character animation demonstrates advanced rigging systems, facial expressions, and fluid motion dynamics. The project showcases professional character animation workflows and attention to detail in bringing characters to life.',
    technologies: ['Blender', 'Maya', 'After Effects', 'Cinema 4D'],
    features: [
      '3D character rigging',
      'Facial animation system',
      'Motion capture integration',
      'Dynamic simulations'
    ],
    challenges: [
      'Creating realistic facial expressions',
      'Maintaining smooth motion transitions',
      'Optimizing rig performance'
    ],
    solutions: [
      'Implemented advanced blend shape system',
      'Used motion path constraints for fluid movement',
      'Optimized bone structure for better performance'
    ],
    imageUrl: g9,
    videoUrl: 'https://player.vimeo.com/video/1168034834', // Replace with your Vimeo video ID
    category: 'animation',
    featured: true,
    timeline: '3 weeks'
  },
  {
    id: 'animation-2',
    title: 'Motion Graphics Explainer',
    description: 'Engaging 2D motion graphics for brand storytelling and product explanation',
    longDescription: 'A comprehensive motion graphics project combining typography, shapes, and illustrations to create an engaging brand story. Features smooth transitions and dynamic visual elements.',
    technologies: ['After Effects', 'Illustrator', 'Premiere Pro'],
    features: [
      '2D motion graphics',
      'Typography animation',
      'Shape morphing',
      'Brand storytelling'
    ],
    challenges: [
      'Synchronizing multiple animated elements',
      'Maintaining brand consistency',
      'Creating smooth transitions'
    ],
    solutions: [
      'Used parent-child linking for synchronized movement',
      'Created style guide for consistent animations',
      'Implemented easing curves for natural motion'
    ],
    imageUrl: '', // Local image path if you have one
    videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID', // Replace with actual ID
    category: 'animation',
    featured: true,
    timeline: '2 weeks'
  },
  {
    id: 'animation-3',
    title: 'Lottie Animation Library',
    description: 'Interactive web animations optimized for performance and cross-platform compatibility',
    longDescription: 'A collection of lightweight, scalable animations built with Lottie for seamless integration into web and mobile applications. Optimized for performance without compromising visual quality.',
    technologies: ['After Effects', 'Lottie', 'Bodymovin'],
    features: [
      'Vector-based animations',
      'Interactive elements',
      'Cross-platform compatibility',
      'Optimized file sizes'
    ],
    challenges: [
      'Keeping file sizes minimal',
      'Ensuring cross-browser compatibility',
      'Maintaining animation quality'
    ],
    solutions: [
      'Used shape layers instead of masks',
      'Optimized keyframes and expressions',
      'Tested across multiple platforms'
    ],
    imageUrl: g9, // Use local image
    category: 'animation',
    featured: false,
    timeline: '1 week'
  },
  {
    id: 'animation-4',
    title: 'Product Showcase Animation',
    description: '3D product animation with photorealistic rendering and dynamic camera movements',
    longDescription: 'Professional product animation featuring realistic materials, lighting, and camera work. Created to showcase product features and design details in an engaging visual format.',
    technologies: ['Cinema 4D', 'Octane Render', 'After Effects'],
    features: [
      'Photorealistic rendering',
      'Dynamic camera animations',
      'Material design',
      'Lighting setup'
    ],
    challenges: [
      'Achieving photorealistic materials',
      'Optimizing render times',
      'Creating dynamic camera movements'
    ],
    solutions: [
      'Used PBR materials with proper textures',
      'Implemented render passes for compositing',
      'Created camera rigs for smooth movements'
    ],
    imageUrl: '',
    videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID',
    category: 'animation',
    featured: true,
    timeline: '4 weeks'
  }
];