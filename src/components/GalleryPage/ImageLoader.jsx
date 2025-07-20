import { useState, useEffect } from 'react';

/**
 * ImageLoader - Dynamic image loading from folder paths
 * @param {string} folderPath - Path to image folder
 * @param {Function} onImagesLoaded - Callback when images are loaded
 * @param {number} initialShow - Initial number of images to show
 */
export default function ImageLoader({ folderPath, onImagesLoaded, initialShow = 12 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImagesFromFolder = async () => {
      try {
        setLoading(true);
        setError(null);

        const folderName = folderPath.split('/').pop();
        let folderImages = [];
        
        // Folder image mapping
        const folderImageMap = {
          'SciNapse_USCC_2023-2024': [
            '20240309-DSCF0377.jpg', '20240309-DSCF0402.jpg', '20240309-DSCF0404.jpg',
            '20240309-DSCF0409.jpg', '20240309-DSCF0414.jpg', '20240309-DSCF0422.jpg',
            '20240309-DSCF0425.jpg', '20240309-DSCF0430.jpg', '20240309-DSCF0446.jpg',
            '20240309-DSCF0452.jpg', '20240309-DSCF0467.jpg', '20240309-DSCF0476.jpg',
            '20240309-DSCF0496.jpg', '20240309-DSCF0503.jpg', '20240309-DSCF0521.jpg',
            '20240309-DSCF0527.jpg', '20240309-DSCF0548.jpg', '20240309-DSCF7237.jpg',
            '20240309-DSCF7251.jpg', '20240309-DSCF7263.jpg', '20240309-DSCF7280.jpg',
            '20240309-DSCF7292.jpg', '20240309-DSCF7313.jpg', '20240309-DSCF7341.jpg',
            '20240309-DSCF7369.jpg', '20240309-DSCF7384.jpg', '20240309-DSCF7399.jpg',
            '20240309-DSCF7417.jpg', '20240309-DSCF7431.jpg', '20240309-DSCF7466.jpg',
            '20240309-DSCF7480.jpg', '20240310-DSCF0725.jpg', '20240310-DSCF7541.jpg',
            '20240310-DSCF7670.jpg', '20240310-DSCF7675.jpg', '20240310-DSCF7741.jpg',
            '20240310-DSCF7751.jpg', '20240310-DSCF7762.jpg', '20240310-DSCF7774.jpg'
          ],
        };
        
        const imageFiles = folderImageMap[folderName];
        
        if (imageFiles) {
          folderImages = imageFiles.map((filename, index) => ({
            src: `${folderPath}/${filename}`,
            alt: filename.replace(/\.[^/.]+$/, ''),
            aspectRatio: 0.8 + (index % 7) * 0.1
          }));
        } else {
          console.warn(`No image files defined for folder: ${folderName}`);
        }
          
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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-cyanHue"></div>
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

  return null;
}

export function generateImageList(folderPath, pattern = null) {
  if (pattern && typeof pattern === 'function') {
    return pattern(folderPath);
  }
  return [];
} 