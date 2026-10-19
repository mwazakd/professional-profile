export interface TeachingGalleryImage {
  src: string;
  alt: string;
}

const altTemplates = [
  'STEM tutoring with high school students',
  'One-on-one mathematics support session',
  'Physics lesson and problem-solving practice',
  'Group tutoring and exam preparation',
  'Mentoring students through lab-style reasoning',
  'Classroom teaching and student engagement',
  'Programming fundamentals mentoring',
  'Tutor supporting learners with conceptual foundations',
];

export const teachingGalleryImages: TeachingGalleryImage[] = Array.from({ length: 28 }, (_, index) => {
  const num = String(index + 1).padStart(2, '0');
  return {
    src: `/assets/images/teaching/teaching-${num}.jpg`,
    alt: altTemplates[index % altTemplates.length],
  };
});
