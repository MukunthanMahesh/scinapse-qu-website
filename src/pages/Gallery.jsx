// Event Gallery Page
import { useState, useRef, useEffect } from 'react';

// Dynamic image loading from folders
const getEventImages = (folderPath, count = 39) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    // Generate filenames based on the pattern in the folder
    const day = i <= 17 ? '09' : '10';
    const baseNum = i <= 17 ? 377 + (i - 1) * 25 : 725 + (i - 18) * 25;
    const filename = `202403${day}-DSCF${baseNum.toString().padStart(4, '0')}.jpg`;
    images.push({
      src: `${folderPath}/${filename}`,
      alt: `Event Photo ${i}`,
      // Random aspect ratio for masonry effect (0.8 to 1.4)
      aspectRatio: 0.8 + Math.random() * 0.6
    });
  }
  return images;
};

const events = [
  {
    title: 'STEM Horizons: AI in Healthcare Summit 2025',
    date: 'January 2025',
    images: [
      { src: '/landing/event_images/stem-horizons.jpg', alt: 'STEM Horizons', aspectRatio: 1.3 },
      { src: '/landing/event_images/uscc.jpg', alt: 'USCC Group', aspectRatio: 1.2 },
    ],
  },
  {
    title: 'Undergraduate Science Case Competition',
    date: '2023-2024',
    folder: '/gallery/SciNapse_USCC_2023-2024',
    imageCount: 39,
    initialShow: 12
  },
];

// Lazy Image Component with masonry support
function LazyImage({ src, alt, aspectRatio, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const height = aspectRatio * 200; // Base width is 200px

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden rounded-lg shadow-lg bg-gray-200 ${className}`}
      style={{ height: `${height}px` }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}

// Masonry Grid Component
function MasonryGrid({ images, columns = 4 }) {
  const [columnHeights, setColumnHeights] = useState(new Array(columns).fill(0));
  const [distributedImages, setDistributedImages] = useState([]);

  useEffect(() => {
    // Distribute images to columns based on height (shortest column gets next image)
    const newColumnHeights = new Array(columns).fill(0);
    const newDistributedImages = images.map((img, index) => {
      const shortestColumn = newColumnHeights.indexOf(Math.min(...newColumnHeights));
      const height = img.aspectRatio * 200;
      newColumnHeights[shortestColumn] += height + 16; // 16px for gap
      return { ...img, column: shortestColumn };
    });
    
    setColumnHeights(newColumnHeights);
    setDistributedImages(newDistributedImages);
  }, [images, columns]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: columns }, (_, colIndex) => (
        <div key={colIndex} className="space-y-4">
          {distributedImages
            .filter(img => img.column === colIndex)
            .map((img, index) => (
              <LazyImage
                key={`${img.src}-${index}`}
                src={img.src}
                alt={img.alt}
                aspectRatio={img.aspectRatio}
                className="hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              />
            ))}
        </div>
      ))}
    </div>
  );
}

// Event Section Component
function EventSection({ event }) {
  const [showAll, setShowAll] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (event.folder) {
      // Dynamic loading for folder-based events
      const eventImages = getEventImages(event.folder, event.imageCount);
      setImages(showAll ? eventImages : eventImages.slice(0, event.initialShow));
    } else {
      // Static images for other events
      setImages(event.images);
    }
  }, [event, showAll]);

  const hasMoreImages = event.folder && event.imageCount > event.initialShow;

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{event.title}</h2>
      <div className="text-gray-500 mb-6">{event.date}</div>
      
      <MasonryGrid images={images} />
      
      {hasMoreImages && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {showAll ? 'Show Less' : `View All ${event.imageCount} Photos`}
          </button>
        </div>
      )}
    </section>
  );
}

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Event Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our events through beautiful, optimized galleries. Images load smoothly as you scroll.
        </p>
      </header>
      
      <div className="max-w-7xl mx-auto px-4">
        {events.map((event) => (
          <EventSection key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
}
