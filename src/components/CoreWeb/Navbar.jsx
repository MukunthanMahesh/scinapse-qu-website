import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-black text-brand-white px-4 md:px-6 py-3 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="SciNapse Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li><Link to="/" className="hover:text-brand-darkCyan">Home</Link></li>
          <li><Link to="/uscc" className="hover:text-brand-darkCyan">USCC</Link></li>
          <li><Link to="/gallery" className="hover:text-brand-darkCyan">Gallery</Link></li>
          <li><Link to="/team" className="hover:text-brand-darkCyan">Our Team</Link></li>
          <li><Link to="/about" className="hover:text-brand-darkCyan">About Us</Link></li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/get-involved"
            className="bg-brand-cyanBlue hover:bg-brand-darkCyan text-brand-black px-4 py-1.5 rounded text-sm font-semibold"
          >
            Get Involved
          </Link>
          <Link
            to="/contact"
            className="border border-brand-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-brand-white hover:text-brand-black transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-black text-brand-white px-6 pt-6 pb-8 space-y-6 rounded-b-lg shadow-lg z-50">

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 text-base font-medium">
            <Link to="/" className="hover:text-brand-darkCyan">Home</Link>
            <Link to="/uscc" className="hover:text-brand-darkCyan">USCC</Link>
            <Link to="/gallery" className="hover:text-brand-darkCyan">Gallery</Link>
            <Link to="/team" className="hover:text-brand-darkCyan">Our Team</Link>
            <Link to="/about" className="hover:text-brand-darkCyan">About Us</Link>
          </nav>

          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-3">
            <Link
              to="/get-involved"
              className="text-center bg-brand-cyanBlue hover:bg-brand-darkCyan text-brand-black font-semibold px-4 py-2 rounded hover:brightness-110 transition"
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="text-center border border-brand-white text-brand-white font-semibold px-4 py-2 rounded hover:bg-brand-white hover:text-brand-black transition"
            >
              Contact Us!
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
