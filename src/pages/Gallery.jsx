// Event Gallery Page
const events = [
  {
    title: 'USCC 2024-2025',
    date: 'March 2025',
    images: [
      { src: '/landing/event_images/uscc.jpg', alt: 'USCC Group', },
      { src: '/landing/event_images/nintendo.jpg', alt: 'Nintendo Event', },
      { src: '/landing/event_images/stem-horizons.jpg', alt: 'STEM Horizons', },
    ],
  },
  {
    title: 'STEM Horizons: AI in Healthcare Summit 2025',
    date: 'January 2025',
    images: [
      { src: '/landing/event_images/stem-horizons.jpg', alt: 'STEM Horizons', },
      { src: '/landing/event_images/uscc.jpg', alt: 'USCC Group', },
    ],
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Event Gallery</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse highlights from our latest events and activities. Click on any event to see its photos!</p>
      </header>
      <div className="max-w-5xl mx-auto space-y-16">
        {events.map((event, idx) => (
          <section key={event.title}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">{event.title}</h2>
            <div className="text-gray-500 mb-4">{event.date}</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {event.images.map((img, i) => (
                <div key={img.src + i} className="rounded overflow-hidden shadow bg-white">
                  <img src={img.src} alt={img.alt} className="w-full h-40 object-cover" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
