import { useState } from 'react';
import { motion } from 'framer-motion';
import MasonryGrid from './MasonryGrid.jsx';
import FluidText from '../CoreWeb/FluidText.jsx';

/**
 * EventSection - Individual event with show/hide functionality
 * @param {Object} event - Event object with title, date, images
 */
export default function EventSection({ event }) {
  // Track if all images should be shown or just initial set
  const [showAll, setShowAll] = useState(false);

  // Number of images to show initially (default 4)
  const initialShow = 4;

  // Images to display (all or just initial set)
  const imagesToShow = showAll ? event.images : event.images.slice(0, initialShow);

  // Only show the toggle button if there are more images than initially shown
  const hasMoreImages = event.images.length > initialShow;

  return (
    <section className="mb-6 relative" data-event={event.title}>
      {/* Event title and date */}
      {/* Show FluidText only on md+ screens, normal h2 on mobile */}
      <div>
        <span className="hidden md:block">
          <FluidText text={event.title} baseColor="text-brand-black" size="text-3xl" />
        </span>
        <span className="block md:hidden">
          <h2 className="text-2xl font-bold text-brand-black leading-tight mb-1">{event.title}</h2>
        </span>
      </div>
      <div className="text-gray-500 mb-3">{event.date}</div>
      <div className="relative">
        {/* Animate the height of the image grid when toggling showAll */}
        <motion.div
          initial={false}
          animate={{ 
            maxHeight: showAll ? '2000px' : '600px',
            opacity: 1 
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          onAnimationComplete={() => {
            const element = document.querySelector(`[data-event="${event.title}"]`);
            if (element) {
              if (showAll) {
                // Scroll to show the newly revealed content
                element.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'end',
                  inline: 'nearest'
                });
              } else {
                // Scroll back to top of section when showing less with some space above
                const rect = element.getBoundingClientRect();
                const scrollTop = window.pageYOffset + rect.top - 100; // 100px above
                window.scrollTo({
                  top: scrollTop,
                  behavior: 'smooth'
                });
              }
            }
          }}
        >
          {/* Masonry grid for event images */}
          <MasonryGrid images={imagesToShow} />
        </motion.div>
      </div>
      {/* Show toggle button if there are more images to display */}
      {hasMoreImages && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-brand-black text-brand-white px-4 py-2 rounded text-center hover:bg-brand-cyanBlue disabled:opacity-50 transition relative overflow-hidden select-none"
          >
            {showAll ? 'Show Less' : `View All Photos`}
          </button>
        </div>
      )}
    </section>
  );
} 