import EventSection from '../components/GalleryPage/EventSection.jsx';
import { motion } from "framer-motion";
import { slideUpVariant } from "../utils/motionVariants";
import '../CSS/gallery.css';

// To add a new event, add an object to this array with title, date, and an images array.
// Each image should have src, alt, and aspectRatio.
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
    images: [
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0377.jpg', alt: 'USCC 2023-2024 - 1', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0402.jpg', alt: 'USCC 2023-2024 - 2', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0404.jpg', alt: 'USCC 2023-2024 - 3', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0409.jpg', alt: 'USCC 2023-2024 - 4', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0414.jpg', alt: 'USCC 2023-2024 - 5', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0422.jpg', alt: 'USCC 2023-2024 - 6', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0425.jpg', alt: 'USCC 2023-2024 - 7', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0430.jpg', alt: 'USCC 2023-2024 - 8', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0446.jpg', alt: 'USCC 2023-2024 - 9', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0452.jpg', alt: 'USCC 2023-2024 - 10', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0467.jpg', alt: 'USCC 2023-2024 - 11', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0476.jpg', alt: 'USCC 2023-2024 - 12', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0496.jpg', alt: 'USCC 2023-2024 - 13', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0503.jpg', alt: 'USCC 2023-2024 - 14', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0521.jpg', alt: 'USCC 2023-2024 - 15', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0527.jpg', alt: 'USCC 2023-2024 - 16', aspectRatio: 1.33 },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0548.jpg', alt: 'USCC 2023-2024 - 17', aspectRatio: 1.33 },
    ],
  },
];

// Main Gallery Page component (now also the main gallery UI)
export default function GalleryPage() {
  return (
    // Main container for the gallery page
    <div className="min-h-screen bg-brand-white gallery-container">
      {/* Animated section for the gallery header */}
      <motion.section
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="text-center">
          {/* Subtitle */}
          <p className="text-brand-teal text-sm uppercase tracking-widest mb-2">
            Capturing moments of innovation
          </p>
          {/* Main title */}
          <h1 className="text-brand-black font-sans text-4xl md:text-5xl font-bold mb-6">
            Event Gallery
          </h1>
          {/* Description */}
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Explore our past events and memorable moments through our photo gallery.
          </p>
        </div>
      </motion.section>
      {/* Render each event section using the EventSection component */}
      <div className="max-w-7xl mx-auto px-4 relative">
        {events.map((event) => (
          <EventSection key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
}
