import { useState, useEffect } from 'react';
import GalleryImage from './ClickableImage.jsx';

/**
 * MasonryGrid - Responsive masonry layout for images
 * @param {Object[]} images - Array of image objects with src, alt, aspectRatio
 * @param {number} columns - Number of columns (default: 4)
 */
export default function MasonryGrid({ images, columns = 4 }) {
  // Track the height of each column for layout balancing
  const [columnHeights, setColumnHeights] = useState(new Array(columns).fill(0));
  // Store images with assigned columns for rendering
  const [distributedImages, setDistributedImages] = useState([]);

  useEffect(() => {
    // Distribute images to columns to balance column heights
    const newColumnHeights = new Array(columns).fill(0);
    const newDistributedImages = images.map((img, index) => {
      // Find the column with the smallest height
      const shortestColumn = newColumnHeights.indexOf(Math.min(...newColumnHeights));
      const height = img.aspectRatio * 200;
      newColumnHeights[shortestColumn] += height + 24;
      return { ...img, column: shortestColumn };
    });
    
    setColumnHeights(newColumnHeights);
    setDistributedImages(newDistributedImages);
  }, [images, columns]);

  return (
    // Render columns and place images in their assigned columns
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 masonry-grid ${
      images.length === 0 ? 'min-h-0' : ''
    }`}>
      {Array.from({ length: columns }, (_, colIndex) => (
        <div key={colIndex} className="space-y-6">
          {distributedImages
            .filter(img => img.column === colIndex)
            .map((img, index) => (
              <GalleryImage
                key={`${img.src}-${index}`}
                src={img.src}
                alt={img.alt}
                aspectRatio={img.aspectRatio}
                className="hover:shadow-xl transition-shadow duration-300 lazy-image-container"
              />
            ))}
        </div>
      ))}
    </div>
  );
} 