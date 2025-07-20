import { useState, useEffect } from 'react';

/**
 * ImageLoader - Dynamic image loading from folder paths
 * @param {string} folderPath - Path to image folder
 * @param {Function} onImagesLoaded - Callback when images are loaded
 * @param {number} initialShow - Initial number of images to show
 */
export default function ImageLoader({ folderPath, onImagesLoaded, initialShow = 12 }) {
  // State for loaded images
  const [images, setImages] = useState([]);
  // State for loading spinner
  const [loading, setLoading] = useState(true);
  // State for error messages
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load images from the specified folder
    const loadImagesFromFolder = async () => {
      try {
        setLoading(true);
        setError(null);

        // Extract folder name from path
        const folderName = folderPath.split('/').pop();
        let folderImages = [];
        
        // Map folder names to image file lists
        const folderImageMap = {
          'SciNapse_USCC_2023-2024': [
            '20240309-DSCF0377.jpg', '20240309-DSCF0402.jpg', '20240309-DSCF0404.jpg',
            '20240309-DSCF0409.jpg', '20240309-DSCF0414.jpg', '20240309-DSCF0422.jpg',
            '20240309-DSCF0425.jpg', '20240309-DSCF0430.jpg', '20240309-DSCF0446.jpg',
            '20240309-DSCF0452.jpg', '20240309-DSCF0467.jpg', '20240309-DSCF0476.jpg',
            '20240309-DSCF0496.jpg', '20240309-DSCF0503.jpg', '20240309-DSCF0521.jpg',
            '20240309-DSCF0527.jpg', '20240309-DSCF0548.jpg',
          ],
        };
        
        // Get image file list for the folder
        const imageFiles = folderImageMap[folderName];
        
        if (imageFiles) {
          // Build image objects with src, alt, and aspectRatio
          folderImages = imageFiles.map((filename, index) => ({
            src: `${folderPath}/${filename}`,
            alt: filename.replace(/\.[^/.]+$/, ''),
            aspectRatio: 0.8 + (index % 7) * 0.1
          }));
        } else {
          console.warn(`No image files defined for folder: ${folderName}`);
        }
          
          setImages(folderImages);
          // Notify parent component of loaded images
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

  // Show loading spinner while images are loading
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-cyanHue"></div>
      </div>
    );
  }

  // Show error message if loading fails
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

  // This component only loads images and not render them directly
  return null;
}

// Utility to generate image list from a folder and pattern
export function generateImageList(folderPath, pattern = null) {
  if (pattern && typeof pattern === 'function') {
    return pattern(folderPath);
  }
  return [];
} 