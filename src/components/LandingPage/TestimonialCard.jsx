import { Quote } from "lucide-react";

const TestimonialCard = ({ name, role, affiliation, quote, imageUrl }) => {
  return (
    <div className="relative flex flex-col items-start bg-brand-black border border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-200 max-w-md w-full group overflow-hidden">
      {/* Decorative side bar */}
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-brand-cyanBlue rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={imageUrl}
            alt={name ? `Portrait of ${name}` : "User portrait"}
            className="w-14 h-14 rounded-full object-cover border border-gray-700"
          />
          {/* Gradient ring on hover */}
          <div className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-cyan-500 transition duration-300" />
        </div>
        <div>
          <p className="font-semibold text-neutral-100">{name}</p>
          <p className="text-sm text-gray-400">{role}, {affiliation}</p>
        </div>
      </div>

      {/* Quote with icon */}
      <div className="relative pl-6 text-gray-200 text-base leading-relaxed italic">
        <Quote className="absolute left-0 top-0 text-cyan-500 w-5 h-5 opacity-70" />
        “{quote}”
      </div>
    </div>
  );
};

export default TestimonialCard;
