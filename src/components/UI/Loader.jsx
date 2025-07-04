import { useEffect } from 'react';
import { jellyTriangle } from 'ldrs';

// Register the component once on mount
export default function Loader() {
  useEffect(() => {
    jellyTriangle.register();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-brand-white">
      <l-jelly-triangle size="40" speed="1.75" color="black" />
    </div>
  );
}
