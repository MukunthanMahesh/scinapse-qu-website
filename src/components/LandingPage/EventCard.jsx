import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventCard = ({
  day,
  monthYear,
  title,
  location,
  description,
  fullDetails,
  imageUrl,
  link
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded overflow-hidden shadow-md bg-brand-black text-brand-white flex flex-col cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
      onClick={() => setExpanded((prev) => !prev)}
    >
      {/* Image */}
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Card Content */}
      <div className="p-4 flex flex-col h-full">
        {/* Date badge */}
        <div className="bg-brand-white text-brand-black w-16 text-center py-1 rounded mb-2">
          <div className="text-sm font-bold">{day}</div>
          <div className="text-xs">{monthYear}</div>
        </div>

        {/* Title & Location */}
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm mb-1">📍 {location}</p>

        {/* Short description always shown */}
        <p className="text-sm text-gray-200">{description}</p>

        {/* Expandable full details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-gray-300 mt-2">{fullDetails}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-brand-cyanBlue hover:underline text-sm"
              >
                Learn more →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventCard;
