const TestimonialCard = ({ name, role, affiliation, quote, imageUrl }) => {
  return (
    <div className="flex flex-col items-start bg-brand-black border border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-200 max-w-md w-full">
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
