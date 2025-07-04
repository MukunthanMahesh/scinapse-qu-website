import { useEffect } from "react";
import { jellyTriangle } from "ldrs";
import Typewriter from "typewriter-effect";

export default function Loader({ fadingOut }) {
  useEffect(() => {
    jellyTriangle.register();
  }, []);

  // Disable scroll bar during load
  useEffect(() => {
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = "auto";
  };
}, []);

  const baseClasses = `fixed inset-0 z-50 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out`;
  const fadeClass = fadingOut
    ? "opacity-0 invisible pointer-events-none"
    : "opacity-100 visible";

  return (
    <>
      {/* Mobile Loader */}
      <div className={`md:hidden flex flex-col items-center bg-brand-black ${baseClasses} ${fadeClass}`}>
        <l-jelly-triangle size="40" speed="1.2" color="#74DCDF" />
        <div className="mt-16 text-white text-base font-medium tracking-wide">
          <Typewriter
            options={{
              strings: ['Welcome to SciNapse!', 'Cha Gheill'],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 30,
            }}
          />
        </div>
      </div>
      {/* Desktop Loader */}
      <div className={`hidden md:flex flex-col items-center bg-brand-black ${baseClasses} ${fadeClass}`}>
        <l-jelly-triangle size="40" speed="1.2" color="#74DCDF" />
        <div className="mt-16 text-white text-base font-medium tracking-wide">
          <Typewriter
            options={{
              strings: ['Welcome to Scinapse!', 'Cha Gheill'],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 30,
            }}
          />
        </div>
      </div>
    </>
  );
}
