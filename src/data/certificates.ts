import { Certificate } from '../types';

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'UI/UX Design Specialization',
    issuer: 'Coursera',
    issueDate: 'January 2024',
    credentialId: 'ABC123XYZ',
    credentialUrl: 'https://coursera.org/verify/ABC123XYZ',
    imageUrl: '/path/to/certificate1.jpg', // Optional
    skills: ['Figma', 'User Research', 'Prototyping']
  },
  {
    id: 'cert-2',
    title: 'Advanced Figma Design',
    issuer: 'Udemy',
    issueDate: 'December 2023',
    credentialId: 'UC-XXXXX',
    credentialUrl: 'https://udemy.com/certificate/UC-XXXXX',
    skills: ['Figma', 'Design Systems']
  },
  {
    id: 'cert-3',
    title: 'Adobe Illustrator CC – Advanced Training',
    issuer: 'LinkedIn Learning',
    issueDate: 'November 2023',
    credentialUrl: 'https://linkedin.com/learning/certificates/xxxxx',
    skills: ['Adobe Illustrator', 'Graphic Design']
  }
  // Add more certificates
];