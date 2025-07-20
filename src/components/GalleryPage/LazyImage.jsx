import { useState, useRef, useEffect } from 'react';

/**
 * LazyImage - Lazy loading image with intersection observer
 * @param {string} src - Image URL
 * @param {string} alt - Alt text
 * @param {number} aspectRatio - Image aspect ratio
 * @param {string} className - Additional CSS classes
 */
export default function LazyImage({ src, alt, aspectRatio, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
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
      {!isLoaded && (
        <div className="absolute inset-0 image-placeholder"></div>
      )}
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