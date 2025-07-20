import Masonry from 'react-masonry-css';
import GalleryImage from './ClickableImage.jsx';

/**
 * MasonryGrid - Uses react-masonry-css for a true Pinterest-style layout
 * @param {Object[]} images - Array of image objects with src, alt, aspectRatio
 * @param {boolean} showAll - Whether to show all images or just the initial set
 * @param {number} initialShow - Number of images to show initially
 * @param {boolean} keepAll - Whether to keep all images rendered after first show all
 */
function getRandomAspectRatio(seed) {
  // Generate a pseudo-random aspect ratio between 0.9 and 1.5
  const min = 0.9, max = 1.5;
  const x = Math.abs(Math.sin(seed) * 10000) % 1;
  return min + (max - min) * x;
}

// Responsive breakpoints for columns
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

export default function MasonryGrid({ images, showAll = false, initialShow = 4, keepAll = false }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid flex w-auto"
      columnClassName="masonry-grid_column px-2"
    >
      {images.map((img, index) => {
        // Only render all images if showAll or keepAll, otherwise only up to initialShow
        if (!showAll && !keepAll && index >= initialShow) return null;
        const aspectRatio = getRandomAspectRatio((img.src || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + index);
        // Hide images beyond initialShow unless showAll is true
        const hidden = !showAll && index >= initialShow;
        return (
          <div key={`${img.src}-${index}`} className={hidden ? 'hidden' : ''}>
            <GalleryImage
              src={img.src}
              alt={img.alt}
              aspectRatio={aspectRatio}
              className="mb-6 hover:shadow-xl transition-shadow duration-300 lazy-image-container"
            />
          </div>
        );
      })}
    </Masonry>
  );
} 