import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function TeamCard({ name, role, image, linkedin }) {
  return (
    <div className="group bg-brand-white rounded-xl shadow-md border flex flex-col items-center px-4 py-6 sm:px-6 sm:py-8 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 w-full max-w-xs mx-auto">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 rounded-full object-cover border border-brand-black shadow-md"
          draggable={false}
        />
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-0 bg-brand-black hover:bg-brand-cyanBlue text-white rounded-full p-2 shadow-lg transition-colors duration-150"
            aria-label={`${name}'s LinkedIn`}
            tabIndex={-1}
          >
            <FaLinkedin size={18} />
          </a>
        )}
      </div>
      <div className="mt-5 flex flex-col items-center">
        <h3 className="text-lg font-bold text-brand-black">{name}</h3>
        <span className="text-cyan-700 font-medium text-sm mb-2">{role}</span>
        <div className="w-8 h-1 bg-cyan-200 rounded-full mb-3" />
      </div>
    </div>
  );
}