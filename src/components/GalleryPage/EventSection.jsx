import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MasonryGrid from './MasonryGrid.jsx';
import ImageLoader from './ImageLoader.jsx';

/**
 * EventSection - Individual event with show/hide functionality
 * @param {Object} event - Event object with title, date, folder, initialShow
 */
export default function EventSection({ event }) {
  // Track if all images should be shown or just initial set
  const [showAll, setShowAll] = useState(false);
  // Images currently displayed
  const [images, setImages] = useState([]);
  // All images loaded (for folder-based events)
  const [allImages, setAllImages] = useState([]);
  // Total number of images for this event
  const [totalImages, setTotalImages] = useState(0);

  // Callback for when images are loaded from ImageLoader
  const handleImagesLoaded = useCallback((loadedImages) => {
    setAllImages(loadedImages);
    setTotalImages(loadedImages.length);
    // Always start with initial count, let useEffect handle showAll logic
    setImages(loadedImages.slice(0, event.initialShow || 4));
  }, [event.initialShow]);

  useEffect(() => {
    if (event.folder) {
      // Images will be loaded by ImageLoader component
      return;
    } else {
      // Static images for other events
      setImages(event.images);
      setTotalImages(event.images.length);
    }
  }, [event]);

  useEffect(() => {
    if (allImages.length > 0) {
      // Update displayed images when showAll changes
      setImages(showAll ? allImages : allImages.slice(0, event.initialShow || 4));
    }
  }, [showAll, allImages, event.initialShow]);

  // Only show the toggle button if there are more images than initially shown
  const hasMoreImages = event.folder ? totalImages > (event.initialShow || 4) : false;

  return (
    <section className="mb-6 relative" data-event={event.title}>
      {/* Event title and date */}
      <h2 className="text-3xl font-bold text-brand-black mb-1">{event.title}</h2>
      <div className="text-gray-500 mb-3">{event.date}</div>
      
      {/* Load images dynamically if folder is specified */}
      {event.folder && (
        <ImageLoader 
          folderPath={event.folder} 
          onImagesLoaded={handleImagesLoaded}
          initialShow={event.initialShow}
        />
      )}
      
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
          <MasonryGrid images={images} />
        </motion.div>
      </div>
      
      {/* Show toggle button if there are more images to display */}
      {hasMoreImages && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-brand-cyanBlue text-brand-black px-4 py-2 rounded text-center font-semibold hover:bg-brand-darkCyan transition relative overflow-hidden select-none"
          >
            {showAll ? 'Show Less' : `View All ${totalImages} Photos`}
          </button>
        </div>
      )}
    </section>
  );
} 