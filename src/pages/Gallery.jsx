import EventSection from '../components/GalleryPage/EventSection.jsx';
import { motion } from "framer-motion";
import { slideUpVariant } from "../utils/motionVariants";
import '../CSS/gallery.css';
import { events } from '../data/galleryEvents.js';

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
