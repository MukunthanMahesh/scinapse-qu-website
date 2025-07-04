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
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        // Add your logic here
        await preloadImage("/assets/hero_banner.jpg");
        await new Promise((res) => setTimeout(res, 200)); // fast logic

        setBootDone(true); // signal real loading is done
      } catch (err) {
        console.error("App boot failed:", err);
        setBootDone(true);
      }
    };

    bootstrap();
  }, []);

  return bootDone;
}
