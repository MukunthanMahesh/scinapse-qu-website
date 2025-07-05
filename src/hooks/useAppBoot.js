import { useEffect, useState } from "react";

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
}

export default function useAppBoot() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        setProgress(20); // Step 1
        await preloadImage("/assets/hero_banner.jpg");

        setProgress(60); // Step 2
        await new Promise((res) => setTimeout(res, 200)); // Simulated logic

        setProgress(100); // Done
      } catch (err) {
        console.error("App boot failed:", err);
        setProgress(100); // Fail safe
      }
    };

    bootstrap();
  }, []);

  return progress;
}
