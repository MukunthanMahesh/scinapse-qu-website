import React from "react";

export default function TeamCard({ name, role, image, yearProgram, funFact }) {
  return (
    <div className="relative h-full">
      <div className="relative h-full w-full bg-brand-black/90 rounded-2xl shadow-md border border-brand-white/12 flex flex-col items-center px-5 py-6 sm:px-6 sm:py-7 transition-colors duration-200 hover:border-brand-cyanBlue/60 text-center">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-brand-cyanBlue/70 shadow-md"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="mt-4 flex flex-col items-center flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-brand-white">
            {name}
          </h3>
          <p className="text-[11px] uppercase tracking-[0.18em] text-brand-white/50 mt-1">
            {role}
          </p>
          <p className="mt-1 text-xs sm:text-sm text-brand-white/70 w-full text-center">
            {yearProgram || "Year & program"}
          </p>
          <div className="mt-4 w-10 h-0.5 bg-brand-cyanBlue/40 rounded-full" />
          <div className="mt-3 text-xs sm:text-sm text-brand-white/70 w-full">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-white/50 mb-1">
              Fun fact
            </p>
            <p>{funFact || "Add a short fun fact here."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
