import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // if you're using React Router

export default function RippleButton({ children, className = "", href, ...props }) {
  const btnRef = useRef();
  const navigate = useNavigate(); // ignore/remove this line if you're not using React Router

  useEffect(() => {
    const btn = btnRef.current;

    const handleClick = (e) => {
      e.preventDefault(); // stop instant navigation

      // Ripple
      const ripple = document.createElement("span");
      ripple.className = "ripple";

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);

      // Delay navigation
      setTimeout(() => {
        if (href.startsWith("/")) {
          navigate(href); // internal routing
        } else {
          window.location.href = href; // full page load
        }
      }, 150); // adjust delay if needed
    };

    btn.addEventListener("click", handleClick);
    return () => btn.removeEventListener("click", handleClick);
  }, [href]);

  return (
    <a
      ref={btnRef}
      className={` transition relative overflow-hidden select-none ${className}`}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}
