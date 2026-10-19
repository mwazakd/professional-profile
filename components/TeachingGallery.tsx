import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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
  const touchStart = useRef({ x: 0, y: 0 });

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
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      return;
    }
    document.documentElement.style.overflow = 'hidden';
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

  const onTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length !== 1) return;
    touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (event.changedTouches.length !== 1) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    if (deltaX > 0) showPrev();
    else showNext();
  };

  const lightbox =
    active && activeIndex !== null
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] h-[100dvh] w-full bg-slate-950/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Teaching photo gallery"
            onClick={close}
          >
            <button
              type="button"
              className="absolute top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] z-20 text-slate-200 hover:text-white p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close gallery"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <button
              type="button"
              className="absolute left-[max(0.25rem,env(safe-area-inset-left))] top-1/2 -translate-y-1/2 z-20 text-slate-200 hover:text-white p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 transition-colors hidden sm:flex"
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
              className="absolute right-[max(0.25rem,env(safe-area-inset-right))] top-1/2 -translate-y-1/2 z-20 text-slate-200 hover:text-white p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 transition-colors hidden sm:flex"
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
            <div
              className="flex h-full w-full flex-col pt-[max(3.5rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] px-3 sm:px-16"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="flex min-h-0 flex-1 items-center justify-center touch-pan-y">
                <img
                  src={active.src}
                  alt={active.alt}
                  draggable={false}
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl select-none"
                />
              </div>
              <p className="shrink-0 text-center text-slate-400 text-sm mt-3 px-2 sm:mt-4">
                {activeIndex + 1} / {images.length} — {active.alt}
              </p>
              <p className="shrink-0 text-center text-slate-500 text-xs mt-1 sm:hidden">Swipe left or right for more photos</p>
            </div>
          </div>,
          document.body
        )
      : null;

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
      {lightbox}
    </div>
  );
};

export default TeachingGallery;
