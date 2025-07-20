import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineMagnifyingGlass, HiOutlineArrowDownTray, HiOutlineXMark } from 'react-icons/hi2';

/**
 * GalleryImage - Lazy loads and displays a high-quality image with a customizable placeholder
 * - Uses intersection observer to only load when in view
 * - Shows a skeleton or simple placeholder until loaded
 * - Includes hover effects with dark overlay and enlarge icon
 * - Opens image in full viewport modal on click using portal
 * @param {string} src - Image URL
 * @param {string} alt - Alt text
 * @param {number} aspectRatio - Image aspect ratio
 * @param {string} className - Additional CSS classes
 * @param {string} placeholderType - 'skeleton' | 'simple' (default: 'skeleton')
 */
export default function GalleryImage({ src, alt, aspectRatio, className = "", placeholderType = 'skeleton' }) {
  // Track if the image has loaded
  const [isLoaded, setIsLoaded] = useState(false);
  // Track if the image is in the viewport
  const [isInView, setIsInView] = useState(false);
  // Track modal state
  const [showModal, setShowModal] = useState(false);
  // Ref for the image container (for intersection observer)
  const imgRef = useRef();

  useEffect(() => {
    // Set up intersection observer to detect when image enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  // Handle download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = alt || 'image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculate image height based on aspect ratio
  const height = aspectRatio * 200;

  return (
    <>
      <div
        ref={imgRef}
        className={`relative overflow-hidden rounded-lg shadow-lg bg-gray-100 group cursor-pointer transition-all duration-300 hover:shadow-xl ${className}`}
        style={{
          height: `${height}px`,
          minHeight: `${height}px`,
          maxHeight: `${height}px`
        }}
        onClick={() => setShowModal(true)}
      >
        {/* Placeholder while image loads */}
        {!isLoaded && (
          placeholderType === 'skeleton' ? (
            <div className="absolute inset-0 bg-gray-100 animate-pulse">
              <div className="absolute inset-0 bg-brand-white opacity-20 animate-shimmer"></div>
            </div>
          ) : (
            <div className="absolute inset-0 image-placeholder"></div>
          )
        )}
        {/* Only load image if in view or already loaded */}
        {(isInView || isLoaded) && (
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            style={{ minHeight: `${height}px` }}
          />
        )}
        
        {/* Hover Effects on Image: */}
        
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        {/* "Magnifying Glass" icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-brand-cyanBlue bg-opacity-90 rounded-full p-3 shadow-lg">
            <HiOutlineMagnifyingGlass className="w-6 h-6 text-gray-800" />
          </div>
        </div>
      </div>

      {/* Viewport Modal using Portal */}
      {showModal && createPortal(
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center transition-all duration-300"
          onClick={() => setShowModal(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={() => setShowModal(false)}
          >
            <HiOutlineXMark className="w-5 h-5" />
          </button>
          
          {/* Download button */}
          <button
            className="absolute top-4 right-16 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handleDownload}
          >
            <HiOutlineArrowDownTray className="w-5 h-5" />
          </button>
          
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
} 