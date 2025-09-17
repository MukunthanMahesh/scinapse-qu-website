import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

export default function RippleButton({ children, className = "", size = "md", href, ...props }) {
  const btnRef = useRef();
  const navigate = useNavigate();

  const sizeClasses = {
  sm: "text-sm px-3 py-1",
  md: "px-4 py-2 text-base",
  lg: "text-lg px-6 py-3",
  };    

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
      }, 150); // delay adjuster
    };

    btn.addEventListener("click", handleClick);
    return () => btn.removeEventListener("click", handleClick);
  }, [href]);

  return (
    <a
      ref={btnRef}
      href={href}
      className={`relative overflow-hidden select-none ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}