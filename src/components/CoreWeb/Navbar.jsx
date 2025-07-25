import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RippleButton from "../UI/RippleButton";
import { FaInstagram, FaLinkedin, FaDiscord, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Scroll direction state for navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const hideThreshold = 800; // px

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < hideThreshold) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 bg-brand-black text-brand-white px-4 md:px-6 py-3 shadow-md transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/assets/logo.png" alt="SciNapse Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li className="relative">
            <Link
              to="/"
              className={`hover:text-brand-cyanBlue transition-colors duration-300 ${currentPath === "/" ? "text-brand-cyanBlue" : ""} pb-1`}
            >
              Home
              <span
                className={`
                  absolute left-0 -bottom-1 h-1 w-full bg-brand-cyanBlue rounded
                  transition-transform duration-300 ease-in-out
                  ${currentPath === "/" ? "scale-x-100" : "scale-x-0"}
                  origin-left
                  block
                `}
              />
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/uscc"
              className={`hover:text-brand-cyanBlue transition-colors duration-300 ${currentPath === "/uscc" ? "text-brand-cyanBlue" : ""} pb-1`}
            >
              USCC
              <span
                className={`
                  absolute left-0 -bottom-1 h-1 w-full bg-brand-cyanBlue rounded
                  transition-transform duration-300 ease-in-out
                  ${currentPath === "/uscc" ? "scale-x-100" : "scale-x-0"}
                  origin-left
                  block
                `}
              />
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/gallery"
              className={`hover:text-brand-cyanBlue transition-colors duration-300 ${currentPath === "/gallery" ? "text-brand-cyanBlue" : ""} pb-1`}
            >
              Gallery
              <span
                className={`
                  absolute left-0 -bottom-1 h-1 w-full bg-brand-cyanBlue rounded
                  transition-transform duration-300 ease-in-out
                  ${currentPath === "/gallery" ? "scale-x-100" : "scale-x-0"}
                  origin-left
                  block
                `}
              />
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/team"
              className={`hover:text-brand-cyanBlue transition-colors duration-300 ${currentPath === "/team" ? "text-brand-cyanBlue" : ""} pb-1`}
            >
              Our Team
              <span
                className={`
                  absolute left-0 -bottom-1 h-1 w-full bg-brand-cyanBlue rounded
                  transition-transform duration-300 ease-in-out
                  ${currentPath === "/team" ? "scale-x-100" : "scale-x-0"}
                  origin-left
                  block
                `}
              />
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/about"
              className={`hover:text-brand-cyanBlue transition-colors duration-300 ${currentPath === "/about" ? "text-brand-cyanBlue" : ""} pb-1`}
            >
              About Us
              <span
                className={`
                  absolute left-0 -bottom-1 h-1 w-full bg-brand-cyanBlue rounded
                  transition-transform duration-300 ease-in-out
                  ${currentPath === "/about" ? "scale-x-100" : "scale-x-0"}
                  origin-left
                  block
                `}
              />
            </Link>
          </li>
        </ul>

        {/* Buttons and Social Media Icons (Desktop Only, Grouped) */}
        <div className="hidden md:flex items-center gap-6 ml-6">
          {/* CTA Buttons */}
          <div className="flex gap-3">
            <RippleButton
              href="/get-invovled"
              size="sm"
              className="bg-brand-cyanBlue text-brand-black px-4 py-2 rounded text-center font-semibold hover:bg-brand-darkCyan transition"
            >
              Get Involved
            </RippleButton>
            <RippleButton
              href="/uscc"
              size="sm"
              className="border disabled: border-brand-white px-4 py-2 rounded text-center font-semibold hover:border-brand-cyanBlue hover:text-brand-cyanBlue transition"
            >
              USCC
            </RippleButton>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 text-xl">
            <a href="https://www.instagram.com/scinapsequ/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-brand-cyanBlue transition" />
            </a>
            <a href="https://www.linkedin.com/company/scinapse-queen-s-university/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-brand-cyanBlue transition" />
            </a>
            <a href="https://discord.com/invite/rxreXNFhEa" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="hover:text-brand-cyanBlue transition" />
            </a>
            <a href="https://www.facebook.com/scinapseuscc/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-brand-cyanBlue transition" />
            </a>
          </div>
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
        <div className="md:hidden bg-brand-black text-brand-white px-6 pt-6 pb-8 space-y-6 rounded-b-lg shadow-lg z-40">

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 text-base font-medium">
            <Link to="/" className={`hover:text-brand-darkCyan pb-1 border-b-2 transition ${currentPath === "/" ? "border-brand-cyanBlue text-brand-cyanBlue" : "border-transparent"}`}>Home</Link>
            <Link to="/uscc" className={`hover:text-brand-darkCyan pb-1 border-b-2 transition ${currentPath === "/uscc" ? "border-brand-cyanBlue text-brand-cyanBlue" : "border-transparent"}`}>USCC</Link>
            <Link to="/gallery" className={`hover:text-brand-darkCyan pb-1 border-b-2 transition ${currentPath === "/gallery" ? "border-brand-cyanBlue text-brand-cyanBlue" : "border-transparent"}`}>Gallery</Link>
            <Link to="/team" className={`hover:text-brand-darkCyan pb-1 border-b-2 transition ${currentPath === "/team" ? "border-brand-cyanBlue text-brand-cyanBlue" : "border-transparent"}`}>Our Team</Link>
            <Link to="/about" className={`hover:text-brand-darkCyan pb-1 border-b-2 transition ${currentPath === "/about" ? "border-brand-cyanBlue text-brand-cyanBlue" : "border-transparent"}`}>About Us</Link>
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
