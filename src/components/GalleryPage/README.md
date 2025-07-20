# GalleryPage Components

A modular gallery system for displaying event photos with lazy loading, masonry layout, and progressive image loading.

## 📁 Component Structure

```
GalleryPage/
├── Gallery.jsx          # Main gallery page component
├── EventSection.jsx     # Individual event section with show/hide logic
├── MasonryGrid.jsx      # Masonry layout for images
├── LazyImage.jsx        # Lazy loading individual images
├── ProgressiveImage.jsx # Progressive image loading with skeleton
├── ImageLoader.jsx      # Dynamic image loading from folders
└── README.md           # This file
```

## 🚀 Quick Start

```jsx
// In your page component
import Gallery from '../components/GalleryPage/Gallery.jsx';

const events = [
  {
    title: 'Event Name',
    date: '2024',
    folder: '/gallery/event_folder',
    initialShow: 8
  }
];

export default function GalleryPage() {
  return <Gallery events={events} />;
}
```

## 📋 Components

### Gallery.jsx
**Main gallery page component**

**Props:**
- `events` (array): Array of event objects

**Event Object Structure:**
```jsx
{
  title: string,        // Event title
  date: string,         // Event date
  folder: string,       // Folder path (e.g., '/gallery/event_name')
  initialShow: number   // Number of images to show initially
}
```

**Features:**
- Responsive header with motion animations
- Renders multiple event sections
- Uses brand colors from Tailwind config

---

### EventSection.jsx
**Individual event section with show/hide functionality**

**Props:**
- `event` (object): Event object with title, date, folder, initialShow

**Features:**
- Dynamic image loading from folder
- Show/hide toggle for images
- Masonry grid layout
- Brand-colored button styling

---

### MasonryGrid.jsx
**Masonry layout component for optimal image display**

**Props:**
- `images` (array): Array of image objects
- `columns` (number): Number of columns (default: 3)

**Image Object Structure:**
```jsx
{
  src: string,          // Image URL
  alt: string,          // Alt text
  aspectRatio: number   // Image aspect ratio (0.8-1.4)
}
```

**Features:**
- Responsive column layout
- Dynamic height calculation
- Even image distribution
- Smooth spacing between images

---

### LazyImage.jsx
**Lazy loading individual images with intersection observer**

**Props:**
- `src` (string): Image URL
- `alt` (string): Alt text
- `aspectRatio` (number): Image aspect ratio

**Features:**
- Intersection Observer for lazy loading
- Smooth opacity transitions
- Fixed aspect ratios to prevent layout shifts
- Error handling for broken images

---

### ProgressiveImage.jsx
**Progressive image loading with skeleton loader**

**Props:**
- `src` (string): High-quality image URL
- `alt` (string): Alt text
- `aspectRatio` (number): Image aspect ratio

**Features:**
- Skeleton loader while loading
- Low-quality thumbnail first
- Automatic high-quality image loading
- Smooth transitions between states

---

### ImageLoader.jsx
**Dynamic image loading from folder paths**

**Props:**
- `folderPath` (string): Path to image folder
- `onImagesLoaded` (function): Callback when images are loaded
- `initialShow` (number): Initial number of images to show

**Features:**
- Folder-based image loading
- Configurable image lists per folder
- Error handling and loading states
- Easy to add new folders

## 🔧 Adding New Galleries

### 1. Add Images to Public Folder
```
public/gallery/
├── event_name_1/
│   ├── image1.jpg
│   ├── image2.jpg
│   └── image3.jpg
└── event_name_2/
    ├── photo1.jpg
    └── photo2.jpg
```

### 2. Update ImageLoader.jsx
```jsx
const folderImageMap = {
  'SciNapse_USCC_2023-2024': [
    '20240309-DSCF0377.jpg',
    '20240309-DSCF0402.jpg',
    // ... more images
  ],
  'event_name_1': [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ],
  'event_name_2': [
    'photo1.jpg',
    'photo2.jpg'
  ]
};
```

### 3. Add to Gallery Page
```jsx
const events = [
  {
    title: 'New Event',
    date: '2024',
    folder: '/gallery/event_name_1',
    initialShow: 6
  }
];
```

## 🎨 Styling

### Brand Colors
All components use brand colors from `tailwind.config.js`:
- `bg-brand-cyanBlue`
- `text-brand-black`
- `text-brand-teal`
- `hover:bg-brand-darkCyan`

### CSS Files
- `src/CSS/gallery.css`: Custom styles for skeleton loaders and animations

## 🔄 State Management

### EventSection State
- `images`: Array of loaded images
- `showAll`: Boolean for show/hide toggle
- `loading`: Loading state indicator

### Image Loading Flow
1. `ImageLoader` loads images from folder
2. `EventSection` receives images via callback
3. `MasonryGrid` distributes images into columns
4. `LazyImage`/`ProgressiveImage` handle individual image loading

## 🚨 Common Issues

### Images Not Loading
- Check folder path in `ImageLoader.jsx`
- Verify image files exist in public folder
- Check browser console for errors

### Layout Shaking
- Fixed aspect ratios prevent layout shifts
- Skeleton loaders maintain consistent heights
- CSS containment prevents overflow issues

### Performance Issues
- Reduce `initialShow` number
- Use smaller image files
- Consider image compression

## 📝 Best Practices

1. **Image Optimization**: Use compressed images (1-3MB max)
2. **Aspect Ratios**: Keep between 0.8-1.4 for best layout
3. **Folder Names**: Use descriptive, consistent naming
4. **Initial Show**: Start with 6-8 images for good performance
5. **Alt Text**: Provide descriptive alt text for accessibility 