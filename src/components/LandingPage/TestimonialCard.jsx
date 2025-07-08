const TestimonialCard = ({ name, role, affiliation, quote, imageUrl }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <img
        src={imageUrl}
        alt={`Photo of ${name}`}
        className="w-16 h-16 rounded-full object-cover"
      />
      <p className="text-gray-700 italic mb-2">"{quote}"</p>
      <div>
        <p className="font-semibold text-brand-black">{name}</p>
        <p className="text-sm text-gray-600">
          {role}, {affiliation}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
