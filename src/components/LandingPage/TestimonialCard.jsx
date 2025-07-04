const TestimonialCard = ({ name, role, affiliation, quote, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4">
      <img
        src={imageUrl}
        alt={`Photo of ${name}`}
        className="w-16 h-16 rounded-full object-cover"
      />
      <p className="text-gray-700 italic">"{quote}"</p>
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
