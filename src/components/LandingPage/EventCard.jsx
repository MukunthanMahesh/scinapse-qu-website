import { useState } from "react";
import { ArrowRight } from "lucide-react";

const EventCard = ({
  day,
  monthYear,
  title,
  location,
  fullDetails,
  imageUrl,
  link
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="overflow-hidden shadow rounded-xl bg-brand-black hover:bg-brand-black/90 text-brand-white border-brand-black hover:-translate-y-1 transition-transform duration-300 flex flex-col h-[400px]">

        {/* Image + Date Badge */}
        <div
          className="relative h-48 bg-cover bg-center border border-brand-black"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute top-2 right-2 rounded bg-brand-white text-brand-black px-2 py-1 text-sm font-semibold border border-brand-black">
            {day} <span className="font-normal ml-1">{monthYear}</span>
          </div>
        </div>

        {/* Text */}
        <div className="font-sans p-4 flex flex-col gap-2 text-white">
          <h3 className="text-xl font-bold leading-snug">{title}</h3>

          {/* Location */}
          <p className="text-sm text-gray-400 flex items-center gap-1">
            <span role="img" aria-label="location">📍</span>
            {location}
          </p>

          {/* Description */}
          <p className="text-md text-gray-300 line-clamp-3">{fullDetails}</p>

          {/* Read More CTA */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-auto flex items-center gap-1 text-md text-brand-cyanBlue hover:underline"
          >
            Read more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="bg-brand-white text-black p-6 max-w-lg w-full rounded shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-700 mb-4"> Location: {location}</p>
            <p className="text-base text-gray-800">{fullDetails}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-brand-black hover:underline text-sm"
            >
              Learn more →
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
