import { useState, useEffect } from 'react';
import LazyImage from './LazyImage.jsx';

// Masonry Grid Component
export default function MasonryGrid({ images, columns = 4 }) {
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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen masonry-grid">
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
                className="hover:shadow-xl transition-shadow duration-300 cursor-pointer lazy-image-container"
              />
            ))}
        </div>
      ))}
    </div>
  );
} 