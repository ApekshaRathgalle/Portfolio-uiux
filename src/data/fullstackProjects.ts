import { Project } from '../types';
import portfolio from '../assets/portfolio.png'
import enigineer from '../assets/enigineer.png'
import salogame from '../assets/salogame.png'
import hotel from '../assets/hotel.png'
import image from '../assets/image.png'
import auto from '../assets/auto.jpg'


export const fullstackProjects: Project[] = [
  {
    id: 'portfolio-builder',
    title: 'Portfolio Builder',
    description: 'A personal portfolio website to showcase projects and skills',
    longDescription: 'A modern portfolio website built with React, TypeScript, and Node.js. Features include a project gallery, skill showcase, contact form, and blog section. The website is fully responsive and optimized for performance.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    features: [
      'Project gallery',
      'Skill showcase',
      'Contact form',
      'Blog section',
      'Responsive design',
      'Performance optimization',
      
    ],
    challenges: [
  'Building a customizable and user-friendly portfolio editor',
  'Ensuring responsive design across devices',
  'Managing media uploads and storage efficiently'
],
solutions: [
  'Implemented drag-and-drop components with React for easy customization',
  'Used Tailwind CSS and CSS Grid/Flexbox for adaptive layouts',
  'Integrated cloud storage (Firebase) for optimized media handling'
],
    imageUrl: portfolio,
    demoUrl: 'https://portfolio-builder-three-zeta.vercel.app/',
    githubUrl: 'https://github.com/ApekshaRathgalle/Portfolio_Builder',
    category: 'fullstack',
    featured: true,
    timeline: '5 Days'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App for Engineers',
    description: 'A comprehensive task management application designed for engineers',
    longDescription: 'A modern task management application featuring project organization, task assignments, deadline tracking, and team collaboration tools. Built with React, Node.js, and MongoDB, it provides a seamless user experience with real-time updates and notifications.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    features: [
      'Project organization',
      'Task assignments',
      'Deadline tracking',
      'Story features',
      'Like & comment system',
      'User profiles',
      'Follow/unfollow functionality',
      'Notification system',
      'Content moderation'
    ],
    challenges: [
      'Implementing real-time updates',
      'Ensuring data consistency across clients',
      'Optimizing performance for large datasets'
    ],
    solutions: [
      'Used Socket.io for real-time communication',
      'Integrated Cloudinary for media management',
      'Implemented efficient database queries with aggregation'
    ],
    imageUrl: enigineer,
    demoUrl: 'https://engineering-task-managemnt-anh2.vercel.app/',
    githubUrl: 'https://github.com/ApekshaRathgalle/Engineering_Task_Managemnt',
    category: 'fullstack',
    featured: true,
    timeline: '2 weeks'
  },
  {
    id: 'Salo Game',
    title: 'Gaming Cafe Management System',
    description: 'Real-time gaming cafe management with user profiles and analytics',
    longDescription: 'A full-stack management platform for gaming cafes, enabling customers to book PCs, select games, subscribe to memberships, and track playtime. The system provides admins with real-time monitoring, revenue analytics, event leaderboards, and role-based user management. Designed with a focus on performance, scalability, and an engaging user experience.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Cloudinary', 'WebSocket', 'Firebase' , 'Google Analytics' , 'Cron jobs' , 'Express'],
    features: [
      'User sign-up with Google or email/password authentication',
    'Email verification before profile creation',
    'PC and game booking system',
    'Event bookings and leaderboard tracking',
    'Membership subscriptions and offers',
    'Role-based dashboards for admins and customers',
    'Real-time updates using WebSockets',
    'Analytics dashboard for revenue and usage insights',
    'Secure file and media handling',
    'Responsive design with Tailwind CSS'
    ],
    challenges: [
  'Implementing secure role-based access for admins and customers',
    'Ensuring real-time synchronization of PC/game bookings',
    'Managing concurrent user sessions during peak hours',
    'Optimizing queries for booking history and analytics',
    'Integrating email verification for both Google and email/password sign-ups'
 ],
solutions: [
 'Used Firebase authentication with custom claims for role-based access control',
    'Integrated WebSocket connections for instant updates on bookings and leaderboards',
    'Implemented Redis-based session management for concurrent users',
    'Created MongoDB indexes and optimized aggregation pipelines for fast analytics',
    'Added email verification flow using Firebase to ensure secure user onboarding'
 ],
    imageUrl: salogame,
    demoUrl: 'https://vimeo.com/1116053409',
    githubUrl: 'https://github.com/example/task-manager',
    category: 'fullstack',
    featured: true,
    timeline: '2.5 months'
  },
  {
    id: 'Hotel Chain management System',
    title: 'Hotel Chain management System ',
    description: 'Hotel management system for booking and managing hotel rooms',
    longDescription: 'A comprehensive hotel management system that allows users to book rooms, manage reservations, and access hotel services. The platform provides an intuitive interface for both customers and hotel staff, ensuring a seamless experience from booking to check-out.',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB' , 'Express' ],
    features: [
      'Hotel room booking',
      'Reservation management',
      'Customer profiles',
      'Payment processing',
      'Admin dashboard',
      'Analytics and reporting',
      'Email notifications',
      'Mobile responsiveness'
    ],
    challenges: [
      'Implementing secure role-based access for admins and customers',
      'Ensuring real-time synchronization of bookings',
      'Managing concurrent user sessions during peak hours',
      'Optimizing queries for booking history and analytics'
      
    ],
    solutions: [
      'ho'
    ],
    imageUrl: hotel,
     demoUrl: 'https://weather-demo.example.com',
    githubUrl: 'https://github.com/ApekshaRathgalle/Hotel_Reservation_Managemnt-system',
    category: 'fullstack',
    featured: false,
    timeline: '2 weeks'
  },
  {
    id: 'SocioPedia',
    title: 'SocioPedia - Social Media Platform',
    description: 'A social media platform with real-time updates, user profiles, and content sharing',
    longDescription: 'A full-featured blogging platform with a rich text editor, content management capabilities, SEO optimization, and social sharing features. Built for content creators who need a powerful yet user-friendly publishing solution.',
    technologies: ['React', 'JavaScript', 'Next.js', 'Node.js', 'MongoDB', 'Material UI', 'Tailwind CSS'],
    features: [
      'Rich text editor',
      'Content scheduling',
      'SEO optimization',
      'Social media integration',
      'Comment system',
      'Tag management',
      'Analytics dashboard',
      'Multi-author support'
    ],
    challenges: [
      'Building a performant rich text editor',
      'Implementing SEO best practices',
      'Creating efficient content management'
    ],
    solutions: [
      'Integrated modern editor with MDX support',
      'Used Next.js for SSR and SEO optimization',
      'Implemented caching strategies for performance'
    ],
    imageUrl: 'https://www.templateshub.net/uploads/1551446913%20winku.jpg',
    demoUrl: 'https://blog-demo.example.com',
    githubUrl: 'https://github.com/example/blog-platform',
    category: 'fullstack',
    featured: false,
    timeline: '1 month'
  },

];