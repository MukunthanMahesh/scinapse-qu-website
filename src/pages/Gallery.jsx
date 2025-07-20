import Gallery from '../components/GalleryPage/Gallery.jsx';

// Event Gallery Page
const events = [
  {
    title: 'STEM Horizons: AI in Healthcare Summit 2025',
    date: 'January 2025',
    images: [
      { src: '/landing/event_images/stem-horizons.jpg', alt: 'STEM Horizons', aspectRatio: 1.3 },
      { src: '/landing/event_images/uscc.jpg', alt: 'USCC Group', aspectRatio: 1.2 },
    ],
  },
  {
    title: 'Undergraduate Science Case Competition',
    date: '2023-2024',
    folder: '/gallery/SciNapse_USCC_2023-2024',
    initialShow: 12
  },
];

export default function GalleryPage() {
  return <Gallery events={events} />;
}
