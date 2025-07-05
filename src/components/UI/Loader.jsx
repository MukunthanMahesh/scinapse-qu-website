import { useEffect } from "react";
import { helix } from "ldrs";
import Typewriter from "typewriter-effect";
import useAppBoot from "../../hooks/useAppBoot";

export default function Loader({ fadingOut }) {
  useEffect(() => {
    helix.register();
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

  const bootProgress = useAppBoot();
  const bootDone = bootProgress === 100;


  return (
    <>
      {/* Mobile Loader */}
      <div className={`md:hidden flex flex-col items-center bg-brand-black ${baseClasses} ${fadeClass}`}>
        <l-helix size="70" speed="1.2" color="#5FC6C9 " />
        <div className="mt-16 text-gray-100 text-sm tracking-wide">
          <p>Loading Resources... {bootProgress}%</p>
          <div className="w-48 mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5FC6C9] transition-all duration-300 ease-out"
              style={{ width: `${bootProgress}%` }}
            />
          </div>
        </div>
      </div>
      {/* Desktop Loader */}
    
      <div className={`hidden md:flex flex-col items-center bg-brand-black ${baseClasses} ${fadeClass}`}>
        <l-helix size="80" speed="1.2" color="#5FC6C9 " />
        <div className="mt-16 text-gray-100 text-sm tracking-wide">
          <p>Loading Resources... {bootProgress}%</p>
          <div className="w-48 mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5FC6C9] transition-all duration-300 ease-out"
              style={{ width: `${bootProgress}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
