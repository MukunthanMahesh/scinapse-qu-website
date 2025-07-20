import Gallery from '../components/GalleryPage/Gallery.jsx';

// Define the events to be displayed in the gallery page
const events = [
  {
    // STEM Horizons event with static images
    title: 'STEM Horizons: AI in Healthcare Summit 2025',
    date: 'January 2025',
    images: [
      { src: '/landing/event_images/stem-horizons.jpg', alt: 'STEM Horizons', aspectRatio: 1.3 },
      { src: '/landing/event_images/uscc.jpg', alt: 'USCC Group', aspectRatio: 1.2 },
    ],
  },
  {
    // USCC event with images loaded from a folder
    title: 'Undergraduate Science Case Competition',
    date: '2023-2024',
    folder: '/gallery/SciNapse_USCC_2023-2024', // Path to event images
    initialShow: 4 // Number of images to show initially
  },
];

// Main Gallery Page component
export default function GalleryPage() {
  // Pass the events array as a prop to the Gallery component
  return <Gallery events={events} />;
}
