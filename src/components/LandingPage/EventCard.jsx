import { ArrowRight } from "lucide-react";
import RippleButton from "../UI/RippleButton";

const EventCard = ({
  day,
  monthYear,
  title,
  location,
  fullDetails,
  imageUrl,
  link
}) => {

  return (
    <>
      {/* Row-style card (no image) */}
      <div className="rounded-2xl bg-zinc-900/70 hover:bg-zinc-900 text-brand-white border border-white/10 hover:border-white/20 transition-colors duration-200 px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex gap-4 sm:gap-6 items-start">
          {/* Date block */}
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-lg border border-white/25 bg-black/60 flex flex-col items-center justify-center text-[11px] sm:text-xs uppercase tracking-wide">
              <span className="text-lg sm:text-xl font-semibold leading-none">
                {day}
              </span>
              <span className="mt-1 text-[9px] sm:text-[10px] text-gray-400">
                {monthYear}
              </span>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 flex flex-col gap-1.5 sm:gap-2 font-sans">
            <h3 className="text-base sm:text-lg font-semibold leading-snug">
              {title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-400">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-cyanBlue hover:underline transition-colors"
              >
                {location}
              </a>
            </p>

            <p className="text-xs sm:text-sm text-gray-300">
              {fullDetails}
            </p>

            {link && (
              <div className="mt-3">
                <RippleButton
                  size="sm"
                  href={link}
                  variant="outlineLight"
                  className="px-3 py-1 text-xs sm:text-sm inline-flex items-center gap-1 border-white/30"
                >
                  VIEW <ArrowRight className="w-3 h-3" />
                </RippleButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
