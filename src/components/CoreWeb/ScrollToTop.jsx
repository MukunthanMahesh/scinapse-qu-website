import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollSmoother } from "gsap/all";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const smoother = ScrollSmoother.get();
    const hash = location.hash;

    if (hash) {
      const id = hash.replace("#", "");
      const target = document.getElementById(id);

      const scrollToTarget = () => {
        if (target) {
          if (smoother) {
            smoother.scrollTo(target, true);
          } else {
            const rect = target.getBoundingClientRect();
            const offset = window.pageYOffset + rect.top - 80; // account for navbar
            window.scrollTo({ top: offset, behavior: "smooth" });
          }
        } else {
          if (smoother) {
            smoother.scrollTo(0, true);
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }
      };

      // Small delay to ensure layout is ready
      setTimeout(scrollToTarget, 50);
    } else {
      if (smoother) {
        smoother.scrollTo(0, true);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [location.pathname, location.hash]);

  return null;
}
