import { useEffect } from 'react';
import { jellyTriangle } from 'ldrs';

export default function Loader({ fadingOut }) {
  useEffect(() => {
    jellyTriangle.register();
  }, []);

  return (
    <div>
      {/* Mobile Loader */}
      <div
        className={`md:hidden fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
          fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <l-jelly-triangle size="40" speed="1.75" color="black" />
      </div>

      {/* Desktop Loader */}
      <div
        className={`hidden md:flex fixed inset-0 z-50 items-center justify-center bg-white transition-opacity duration-500 ${
          fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <l-jelly-triangle size="50" speed="1.75" color="black" />
      </div>
    </div>
  );
}
