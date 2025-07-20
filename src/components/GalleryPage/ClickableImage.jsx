import { useState, useRef, useEffect } from 'react';

/**
 * ProgressiveImage - Progressive image loading with skeleton loader
 * @param {string} src - High-quality image URL
 * @param {string} alt - Alt text
 * @param {number} aspectRatio - Image aspect ratio
 * @param {string} className - Additional CSS classes
 */
export default function ProgressiveImage({ src, alt, aspectRatio, className = "" }) {
  // State to track if high-res image is loaded
  const [isLoaded, setIsLoaded] = useState(false);
  // State to track if image is in viewport
  const [isInView, setIsInView] = useState(false);
  // State to trigger loading of high-res image after thumbnail
  const [isHighQuality, setIsHighQuality] = useState(false);
  // State to track if thumbnail is loaded
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);
  // Ref for intersection observer
  const imgRef = useRef();

  useEffect(() => {
    // Set up intersection observer to detect when image enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Don't disconnect - keep observing to maintain loaded state
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate image height based on aspect ratio
  const height = aspectRatio * 200;

  // Helper to generate thumbnail URL (simulate CDN resizing)
  const getThumbnailUrl = (originalSrc) => {
    return `${originalSrc}?w=400&h=300&q=30&fit=crop`;
  };

  useEffect(() => {
    // After thumbnail loads, trigger high-res image load with slight delay
    if (isThumbnailLoaded && !isHighQuality) {
      const timer = setTimeout(() => {
        setIsHighQuality(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isThumbnailLoaded, isHighQuality]);

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden rounded-lg shadow-lg bg-gray-100 ${className}`}
      style={{ 
        height: `${height}px`,
        minHeight: `${height}px`,
        maxHeight: `${height}px`
      }}
    >
      {/* Skeleton loader while thumbnail loads */}
      {!isThumbnailLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse">
          <div className="absolute inset-0 bg-brand-white opacity-20 animate-shimmer"></div>
        </div>
      )}
      
      {/* Only load images if in view or already loaded */}
      {(isInView || isThumbnailLoaded) && (
        <>
          {/* Thumbnail image (low quality, loads first) */}
          <img
            src={getThumbnailUrl(src)}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isThumbnailLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsThumbnailLoaded(true)}
            loading="lazy"
            style={{ minHeight: `${height}px` }}
          />
          
          {/* High quality image overlays thumbnail after loaded */}
          {isHighQuality && (
            <img
              src={src}
              alt={alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsLoaded(true)}
              style={{ minHeight: `${height}px` }}
            />
          )}
        </>
      )}
    </div>
  );
} 