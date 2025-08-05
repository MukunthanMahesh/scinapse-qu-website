import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, animate } from "framer-motion";

export default function StatCard({ value, label, icon: IconComponent, suffix = "+" }) {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate(latest) {
              setDisplayCount(Math.floor(latest));
            },
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, count]);

  return (
    <section
      ref={ref}
      className="bg-brand-black relative px-6 py-6 flex flex-col items-center w-full rounded-xl shadow-md hover:shadow-xl hover:bg-brand-black/90 transition duration-300 hover:scale-105 group"
    >
      {/* Interactive Background Icon */}
      {IconComponent && (
        <IconComponent className="absolute top-4 right-4 text-3xl md:text-5xl text-brand-cyanBlue transition-transform duration-500 group-hover:text-brand-cyanBlue/90 group-hover:rotate-12 group-hover:hue-rotate-15" />
      )}

      <span className="text-5xl font-bold text-brand-white z-10">
        {displayCount}
        {suffix && <span className="text-2xl font-normal text-white/90 ml-1">{suffix}</span>}
      </span>
      <span className="text-md text-brand-white/90 mt-2 tracking-wide z-10">{label}</span>
    </section>
  );
}
