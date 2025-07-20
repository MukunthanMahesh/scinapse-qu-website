import { useState, useEffect, useCallback } from 'react';
import MasonryGrid from './MasonryGrid.jsx';
import ImageLoader from './ImageLoader.jsx';

/**
 * EventSection - Individual event with show/hide functionality
 * @param {Object} event - Event object with title, date, folder, initialShow
 */
export default function EventSection({ event }) {
  const [showAll, setShowAll] = useState(false);
  const [images, setImages] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);

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

  const hasMoreImages = event.folder ? totalImages > (event.initialShow || 4) : false;

  return (
    <section className="mb-6 relative">
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
        <MasonryGrid images={images} />
      </div>
      
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