import { Quote } from "lucide-react";

const TestimonialCard = ({ name, role, affiliation, quote, imageUrl }) => {
  return (
    <div className="relative flex flex-col items-start bg-brand-black border hover:bg-brand-black/90 border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 max-w-md w-full">
      
      {/* Decorative quote icon */}
      <Quote className="absolute top-4 right-4 w-6 h-6 text-brand-cyanBlue opacity-80" />

      <div className="flex items-center gap-4 mb-4">
        <img
          src={imageUrl}
          alt={name ? `Portrait of ${name}` : "User portrait"}
          className="w-14 h-14 rounded-full object-cover border border-gray-700"
        />
        <div>
          <p className="font-semibold text-neutral-100">{name}</p>
          <p className="text-sm text-gray-400">{role}, {affiliation}</p>
        </div>
      </div>

      <p className="text-gray-200 text-base leading-relaxed italic">“{quote}”</p>
    </div>
  );
};

export default TestimonialCard;
