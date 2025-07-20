import { useState, useEffect } from 'react';

// Image Loader Component - handles dynamic image loading from folders
export default function ImageLoader({ folderPath, onImagesLoaded, initialShow = 12 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImagesFromFolder = async () => {
      try {
        setLoading(true);
        setError(null);

        // For now, we'll use a simple approach that works with the current structure
        // In a production app, you might want to:
        // 1. Use a server endpoint to scan folders
        // 2. Use a build-time script to generate image lists
        // 3. Use a static JSON file with image metadata
        
        // Dynamically load all images from the folder
        const imageModules = import.meta.glob('/public/**/*.{jpg,jpeg,png,gif,webp}', { eager: true });
        
        // Filter images from the specific folder
        const folderImages = Object.entries(imageModules)
          .filter(([path]) => path.includes(folderPath.replace('/public', '')))
          .map(([path, module], index) => ({
            src: path.replace('/public', ''),
            alt: path.split('/').pop().replace(/\.[^/.]+$/, ''),
            aspectRatio: 0.8 + (index % 7) * 0.1 // Fixed aspect ratios: 0.8 to 1.4
          }))
          .sort((a, b) => a.src.localeCompare(b.src)); // Sort by filename
          
          setImages(folderImages);
          onImagesLoaded?.(folderImages);
      } catch (err) {
        console.error('Error loading images:', err);
        setError('Failed to load images');
      } finally {
        setLoading(false);
      }
    };

    if (folderPath) {
      loadImagesFromFolder();
    }
  }, [folderPath, onImagesLoaded]);

  // Return loading state or error
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p>{error}</p>
        <p className="text-sm text-gray-500 mt-2">
          Make sure the folder path is correct and images are accessible.
        </p>
      </div>
    );
  }

  return null; // This component doesn't render anything, it just loads data
}

// Alternative: Simple image list generator for known patterns
export function generateImageList(folderPath, pattern = null) {
  // This is a fallback for when dynamic loading isn't available
  // You can pass a pattern function to generate image paths
  if (pattern && typeof pattern === 'function') {
    return pattern(folderPath);
  }
  
  return [];
} 