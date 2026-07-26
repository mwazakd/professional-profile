
import React from 'react';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import Section from './Section';

const projects: Project[] = [
  {
    title: 'EduSystem Tracker',
    description: 'A financial and student management app for Zimbabwean tutors to track enrolled students, record payments, issue receipts, monitor outstanding balances, and keep tutoring income organized offline.',
    tags: ['Tutoring', 'React', 'Capacitor', 'Fintech', 'Education'],
    imageUrl: 'https://picsum.photos/seed/edusystem/600/400',
    videoUrl: '/assets/videos/edusystem-tracker.mp4',
  },
  {
    title: 'Interactive Physics Lab',
    description: 'A browser-based physics lab with interactive simulations for refraction, springs, pendulums, diffraction, waves, strings, and projectile motion — built for STEM education when physical lab equipment is not accessible.',
    tags: ['Physics Education', 'React', 'Interactive Simulation', 'E-Learning'],
    imageUrl: 'https://picsum.photos/seed/physicslab/600/400',
    videoUrl: '/assets/videos/pendulum.mp4',
    liveUrl: 'https://interactive-physics-lab.pages.dev/',
  },
  {
    title: 'Water Quality Monitoring System',
    description: 'An automated water quality monitoring system for Zimbabwean water bodies built with Google Earth Engine. Automates the data processing pipeline by calculating monitoring indices and preprocessing satellite images for advanced water quality analysis.',
    tags: ['Google Earth Engine', 'JavaScript', 'Satellite Imagery', 'Data Processing'],
    imageUrl: '/assets/images/water-quality-monitoring.png',
    liveUrl: 'https://kudzaishe.users.earthengine.app/view/zimwaterqualitymonitoring2',
    sourceUrl: 'https://code.earthengine.google.com/0a69ec93fa180eaea5c7bbfcf828ce25',
  },
  {
    title: '3D Titration Simulator',
    description: 'An interactive 3D simulation of titration experiments for chemistry education. Part of a larger e-learning platform project designed to help students understand complex lab procedures when physical lab equipment is not accessible. Features real-time pH visualization and titration curve analysis.',
    tags: ['3D Simulation', 'E-Learning', 'Chemistry Education', 'WebGL'],
    imageUrl: '/assets/images/titration-simulator.png',
    liveUrl: 'https://mwazakd.github.io/STEMAppDev/',
    sourceUrl: 'https://github.com/mwazakd/STEMAppDev',
  },
  {
    title: 'Personal Blog',
    description: 'A sleek, fast, and SEO-friendly personal blog platform built with Next.js and MDX for content creation.',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
