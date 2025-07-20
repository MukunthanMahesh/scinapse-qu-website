import EventSection from '../components/GalleryPage/EventSection.jsx';
import { motion } from "framer-motion";
import { slideUpVariant } from "../utils/motionVariants";
import '../CSS/gallery.css';

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
