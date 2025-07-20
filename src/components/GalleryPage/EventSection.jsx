import { useState, useEffect } from 'react';
import MasonryGrid from './MasonryGrid.jsx';
import ImageLoader from './ImageLoader.jsx';

// Event Section Component
export default function EventSection({ event }) {
  const [showAll, setShowAll] = useState(false);
  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);

  const handleImagesLoaded = (loadedImages) => {
    setTotalImages(loadedImages.length);
    setImages(showAll ? loadedImages : loadedImages.slice(0, event.initialShow || 12));
  };

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
    if (event.folder && totalImages > 0) {
      // Update displayed images when showAll changes
      const allImages = event.images || [];
      setImages(showAll ? allImages : allImages.slice(0, event.initialShow || 12));
    }
  }, [showAll, event, totalImages]);

  const hasMoreImages = event.folder ? totalImages > (event.initialShow || 12) : false;

  return (
    <section className="mb-16 relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{event.title}</h2>
      <div className="text-gray-500 mb-6">{event.date}</div>
      
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
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {showAll ? 'Show Less' : `View All ${totalImages} Photos`}
          </button>
        </div>
      )}
    </section>
  );
} 