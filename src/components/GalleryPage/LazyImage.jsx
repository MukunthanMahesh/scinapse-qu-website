import { useState, useRef, useEffect } from 'react';

/**
 * LazyImage - Lazy loading image with intersection observer
 * @param {string} src - Image URL
 * @param {string} alt - Alt text
 * @param {number} aspectRatio - Image aspect ratio
 * @param {string} className - Additional CSS classes
 */
export default function LazyImage({ src, alt, aspectRatio, className = "" }) {
  // Track if the image has loaded
  const [isLoaded, setIsLoaded] = useState(false);
  // Track if the image is in the viewport
  const [isInView, setIsInView] = useState(false);
  // Ref for the image container (for intersection observer)
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

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden rounded-lg shadow-lg bg-gray-200 ${className}`}
      style={{ 
        height: `${height}px`,
        minHeight: `${height}px`,
        maxHeight: `${height}px`
      }}
    >
      {/* Placeholder while image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 image-placeholder"></div>
      )}
      {/* Only load image if in view or already loaded */}
      {(isInView || isLoaded) && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          style={{ minHeight: `${height}px` }}
        />
      )}
    </div>
  );
} 