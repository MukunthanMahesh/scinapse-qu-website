import EventSection from './EventSection.jsx';
import '../../CSS/gallery.css';

// Main Gallery Component
export default function Gallery({ events = [] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 gallery-container">
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Event Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our events through beautiful, optimized galleries. Images load smoothly as you scroll.
        </p>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {events.map((event) => (
          <EventSection key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
} 