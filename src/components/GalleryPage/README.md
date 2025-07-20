# Gallery Page Components

This directory contains modular components for building event galleries with lazy loading and masonry layouts.

## Components

### `Gallery.jsx`
Main gallery component that renders the entire gallery page.

**Props:**
- `events` (array): Array of event objects

### `EventSection.jsx`
Renders a single event section with title, date, and image grid.

**Props:**
- `event` (object): Event object with title, date, and image configuration

### `MasonryGrid.jsx`
Creates a responsive masonry grid layout for images.

**Props:**
- `images` (array): Array of image objects
- `columns` (number, optional): Number of columns (default: 4)

### `LazyImage.jsx`
Individual image component with lazy loading and intersection observer.

**Props:**
- `src` (string): Image source URL
- `alt` (string): Image alt text
- `aspectRatio` (number): Aspect ratio for masonry layout
- `className` (string, optional): Additional CSS classes

### `ImageLoader.jsx`
Handles dynamic image loading from folders.

**Props:**
- `folderPath` (string): Path to the image folder
- `onImagesLoaded` (function): Callback when images are loaded
- `initialShow` (number, optional): Number of images to show initially

## Usage Example

```jsx
import Gallery from '../components/GalleryPage/Gallery.jsx';

const events = [
  {
    title: 'Event Title',
    date: 'Event Date',
    // For static images:
    images: [
      { src: '/path/to/image.jpg', alt: 'Description', aspectRatio: 1.2 }
    ],
    // OR for folder-based images:
    folder: '/gallery/event-folder',
    initialShow: 12
  }
];

function GalleryPage() {
  return <Gallery events={events} />;
}
```

## Event Object Structure

```javascript
{
  title: string,           // Event title
  date: string,           // Event date
  images?: array,         // Static image array (if not using folder)
  folder?: string,        // Folder path for dynamic loading
  initialShow?: number    // Number of images to show initially (default: 12)
}
```

## Image Object Structure

```javascript
{
  src: string,           // Image source URL
  alt: string,           // Image alt text
  aspectRatio: number    // Aspect ratio for masonry layout (0.8 to 1.4 recommended)
}
```

## Features

- ✅ Lazy loading with intersection observer
- ✅ Responsive masonry grid layout
- ✅ Dynamic image loading from folders
- ✅ Show more/less functionality
- ✅ Loading states and error handling
- ✅ Optimized performance with React hooks
- ✅ No hardcoded image counts
- ✅ Modular component architecture 