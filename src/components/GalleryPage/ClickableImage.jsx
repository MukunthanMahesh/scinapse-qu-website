import { useState, useRef, useEffect } from 'react';

/**
 * ProgressiveImage - Progressive image loading with skeleton loader
 * @param {string} src - High-quality image URL
 * @param {string} alt - Alt text
 * @param {number} aspectRatio - Image aspect ratio
 * @param {string} className - Additional CSS classes
 */
export default function ProgressiveImage({ src, alt, aspectRatio, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isHighQuality, setIsHighQuality] = useState(false);
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);
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

  const height = aspectRatio * 200;

  const getThumbnailUrl = (originalSrc) => {
    return `${originalSrc}?w=400&h=300&q=30&fit=crop`;
  };

  useEffect(() => {
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
      {!isThumbnailLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse">
          <div className="absolute inset-0 bg-brand-white opacity-20 animate-shimmer"></div>
        </div>
      )}
      
      {isInView && (
        <>
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