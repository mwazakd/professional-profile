
import React from 'react';
import Section from './Section';
import TeachingGallery from './TeachingGallery';

interface TeachingSubject {
  title: string;
  subtitle: string;
  description: string;
  period: string;
  borderColor: string;
  badgeColor: string;
}

const teachingSubjects: TeachingSubject[] = [
  {
    title: 'Physics',
    subtitle: 'Mechanics • Electricity & Magnetism • Waves',
    description: 'Tutored 100+ students; built conceptual foundations with problem-solving drills and exam prep. Integrated real-world contexts and lab-style reasoning to strengthen intuition.',
    period: '2020 – Present',
    borderColor: 'border-red-500',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    title: 'Mathematics',
    subtitle: 'Algebra • Calculus • Problem Solving',
    description: 'Designed individualized plans; emphasized conceptual understanding and exam strategy. Encouraged active learning and mathematical confidence through guided discovery, discussion, and adaptive feedback.',
    period: '2020 – Present',
    borderColor: 'border-amber-500',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Programming Fundamentals (College Prep)',
    subtitle: 'Programming Fundamentals',
    description: 'Mentored students on Python basics, problem decomposition, and real-world applications. Integrated AI tools (Copilot, Claude, Cursor) to build computational literacy and independence. Delivered free community lessons and supported peer-learning circles.',
    period: '2020 – Present',
    borderColor: 'border-stone-500',
    badgeColor: 'bg-stone-100 text-stone-700',
  },
];

const Teaching: React.FC = () => {
  return (
    <Section id="teaching" title="Teaching & Mentoring">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-sm font-bold text-red-500 mb-8 tracking-widest">STEM TUTOR</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingSubjects.map((subject, index) => (
            <div key={index} className={`bg-slate-800 p-6 rounded-lg shadow-lg border-l-4 ${subject.borderColor} hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-2`}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-100">{subject.title}</h3>
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Tutor</span>
              </div>
              <h4 className="font-semibold text-slate-300 mb-2 text-sm">{subject.subtitle}</h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{subject.description}</p>
              <div className="flex flex-wrap gap-1">
                <span className={`px-2 py-1 ${subject.badgeColor} text-xs rounded`}>{subject.period}</span>
              </div>
            </div>
          ))}
        </div>
        <TeachingGallery />
      </div>
    </Section>
  );
};

export default Teaching;
