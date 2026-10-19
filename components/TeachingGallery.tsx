import React, { useCallback, useEffect, useState } from 'react';
import { teachingGalleryImages, type TeachingGalleryImage } from '../data/teachingGallery';

interface TeachingGalleryProps {
  images?: TeachingGalleryImage[];
  intro?: string;
}

const TeachingGallery: React.FC<TeachingGalleryProps> = ({
  images = teachingGalleryImages,
  intro = 'Snapshots from tutoring physics, mathematics, and programming — supporting Zimbabwean learners with exam prep, conceptual foundations, and hands-on STEM mentoring.',
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + images.length - 1) % images.length);
  }, [activeIndex, images.length]);
  const showNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <div className="mt-14">
      <h3 className="text-center text-sm font-bold text-sky-400 mb-3 tracking-widest uppercase">Teaching Gallery</h3>
      <p className="text-center text-slate-400 mb-8 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">{intro}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative overflow-hidden rounded-lg bg-slate-800 ring-1 ring-slate-700/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label={`View photo ${index + 1}: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-36 sm:h-40 md:h-44 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors pointer-events-none" />
          </button>
        ))}
      </div>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Teaching photo gallery"
          onClick={close}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={close}
            aria-label="Close gallery"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl mx-auto" />
            <figcaption className="text-center text-slate-400 text-sm mt-4 px-4">
              {activeIndex + 1} / {images.length} — {active.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default TeachingGallery;
