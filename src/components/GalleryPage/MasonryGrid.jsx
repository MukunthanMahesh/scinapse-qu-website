import Masonry from 'react-masonry-css';
import GalleryImage from './ClickableImage.jsx';

/**
 * MasonryGrid - Uses react-masonry-css for a true Pinterest-style layout
 * @param {Object[]} images - Array of image objects with src, alt, aspectRatio
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

export default function MasonryGrid({ images }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid flex w-auto"
      columnClassName="masonry-grid_column px-2"
    >
      {images.map((img, index) => {
        // Assign a random aspect ratio for organic look
        const aspectRatio = getRandomAspectRatio((img.src || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + index);
        return (
          <GalleryImage
            key={`${img.src}-${index}`}
            src={img.src}
            alt={img.alt}
            aspectRatio={aspectRatio}
            className="mb-6 hover:shadow-xl transition-shadow duration-300 lazy-image-container"
          />
        );
      })}
    </Masonry>
  );
} 