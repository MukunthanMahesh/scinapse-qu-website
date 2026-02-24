export default function SpeakerCard({ name, title, image, onReadMore }) {
  return (
    <article className="h-full rounded-2xl p-4 sm:p-5 flex flex-col">
      <div className="w-full max-w-[414px] mb-4 h-[350px] md:h-[300px] flex items-center justify-center overflow-hidden mx-auto">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="text-xl font-semibold text-brand-white text-left tracking-tight">
        {name}
      </h3>
      {title && (
        <p className="mt-1 text-sm font-medium text-brand-cyanBlue text-left">
          {title}
        </p>
      )}
      <div className="mt-3">
        <button
          type="button"
          onClick={onReadMore}
          className="inline-flex items-center text-sm font-semibold text-brand-teal hover:text-brand-cyanBlue/80 transition-colors duration-150"
        >
          <span className="underline underline-offset-4">Read more</span>
          <span className="ml-1 text-base leading-none">→</span>
        </button>
      </div>
    </article>
  );
}
