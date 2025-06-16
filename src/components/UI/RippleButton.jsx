import React, { useRef, useEffect } from "react";

export default function RippleButton({ children, className = "", ...props }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    const createRipple = (e) => {
      const circle = document.createElement("span");
      circle.className = "ripple";
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      circle.style.width = circle.style.height = `${size}px`;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    };

    btn.addEventListener("click", createRipple);
    return () => btn.removeEventListener("click", createRipple);
  }, []);

  return (
    <a
      ref={btnRef}
      className={`relative overflow-hidden select-none ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
