// FIX: Import React to make React types like `React.FC` available in this file.
import React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Skill {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ResearchItem {
    title: string;
    authors: string[];
    journal: string;
    year: number;
    pdfUrl?: string;
    projectUrl?: string;
}

export interface TeachingCourse {
    code: string;
    title: string;
    description: string;
    semester: string;
}

export interface NewsItem {
    date: string;
    content: React.ReactNode;
}
