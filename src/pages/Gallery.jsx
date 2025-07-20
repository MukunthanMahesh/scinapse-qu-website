// Event Gallery Page
const events = [
  {
    title: 'SciNapse USCC 2023-2024',
    date: 'March 2024',
    images: [
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0377.jpg', alt: 'USCC Event Photo 1' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0402.jpg', alt: 'USCC Event Photo 2' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0404.jpg', alt: 'USCC Event Photo 3' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0409.jpg', alt: 'USCC Event Photo 4' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0414.jpg', alt: 'USCC Event Photo 5' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0422.jpg', alt: 'USCC Event Photo 6' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0425.jpg', alt: 'USCC Event Photo 7' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0430.jpg', alt: 'USCC Event Photo 8' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0446.jpg', alt: 'USCC Event Photo 9' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0452.jpg', alt: 'USCC Event Photo 10' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0467.jpg', alt: 'USCC Event Photo 11' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0476.jpg', alt: 'USCC Event Photo 12' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0496.jpg', alt: 'USCC Event Photo 13' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0503.jpg', alt: 'USCC Event Photo 14' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0521.jpg', alt: 'USCC Event Photo 15' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0527.jpg', alt: 'USCC Event Photo 16' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0548.jpg', alt: 'USCC Event Photo 17' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7237.jpg', alt: 'USCC Event Photo 18' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7251.jpg', alt: 'USCC Event Photo 19' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7263.jpg', alt: 'USCC Event Photo 20' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7280.jpg', alt: 'USCC Event Photo 21' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7292.jpg', alt: 'USCC Event Photo 22' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7313.jpg', alt: 'USCC Event Photo 23' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7341.jpg', alt: 'USCC Event Photo 24' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7369.jpg', alt: 'USCC Event Photo 25' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7384.jpg', alt: 'USCC Event Photo 26' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7399.jpg', alt: 'USCC Event Photo 27' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7417.jpg', alt: 'USCC Event Photo 28' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7431.jpg', alt: 'USCC Event Photo 29' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7466.jpg', alt: 'USCC Event Photo 30' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240309-DSCF7480.jpg', alt: 'USCC Event Photo 31' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240310-DSCF0725.jpg', alt: 'USCC Event Photo 32' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240310-DSCF7541.jpg', alt: 'USCC Event Photo 33' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240310-DSCF7670.jpg', alt: 'USCC Event Photo 34' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240310-DSCF7675.jpg', alt: 'USCC Event Photo 35' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240310-DSCF7741.jpg', alt: 'USCC Event Photo 36' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240310-DSCF7751.jpg', alt: 'USCC Event Photo 37' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240310-DSCF7762.jpg', alt: 'USCC Event Photo 38' },
      { src: '/gallery/SciNapse_USCC_2023-2024/20240310-DSCF7774.jpg', alt: 'USCC Event Photo 39' },
    ],
  },
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
