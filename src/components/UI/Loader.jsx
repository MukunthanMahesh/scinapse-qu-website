import { useEffect } from 'react';
import { jellyTriangle } from 'ldrs';

export default function Loader({ fadingOut }) {
  useEffect(() => {
    jellyTriangle.register();
  }, []);

  const baseClasses = `fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-out`;
  const fadeClass = fadingOut
    ? "opacity-0 invisible pointer-events-none"
    : "opacity-100 visible";

  return (
    <>
      {/* Mobile */}
      <div className={`md:hidden bg-brand-black ${baseClasses} ${fadeClass}`}>
        <l-jelly-triangle size="40" speed="1.75" color="white" />
      </div>

      {/* Desktop */}
      <div className={`hidden md:flex bg-brand-black ${baseClasses} ${fadeClass}`}>
        <l-jelly-triangle size="50" speed="1.75" color="white" />
      </div>
    </>
  );
}
