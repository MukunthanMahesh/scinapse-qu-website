import { FaInstagram, FaLinkedin, FaDiscord, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-[1fr_2fr_1.5fr] gap-6">
        
        {/* COLUMN 1: Footer About Section */}
        <div className="">

          {/* Logo Above (Phone) */}
          <div className="flex sm:hidden justify-center mb-8">
            <img src="/assets/logo.png" alt="SciNapse Logo" className="h-auto w-auto" />
          </div>

          {/* About Text Square */}
          <div className="p-1.5 bg-gradient-to-r from-purple-500 to-brand-cyanBlue mb-4">
            <div className="bg-brand-black text-brand-black p-4 rounded-md flex flex-col justify-center">
              <div className="bg-black text-white p-4 rounded-md sm:min-h-0 self-start sm:self-stretch sm:-mr-[25%] -mr-[10%] content-center">
                <p class="leading-snug text-lg mb-2"> Our mission is to empower Queen's Students to communicate science beyond the lecture halls. </p>
                <p class="leading-snug text-sm mb-1">We offer hands-on research experience to undergraduates every year through cross-club events, the USCC, and STEM Horizons. </p>
                <p class="leading-snug text-sm">Our chapter, based at <strong>Queen’s University in Kingston </strong>, works with national networks to expand science communication across Canada.</p>
              </div>
            </div>
          </div>

          {/* Logo beneath */}
          <div className="hidden sm:flex justify-center">
            <img src="/assets/logo.png" alt="SciNapse Logo" className="h-auto w-auto" />
          </div>
        </div>

        {/* COLUMN 2: Footer Navigation Section */}
        <div className="sm:pl-14 flex flex-col gap-6 sm:gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <p className="text-sm text-brand-white/60 mb-4">Did you miss anything?</p>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/events" className="hover:underline">Events</a></li>
              <li><a href="/get-involved" className="hover:underline">Get Involved</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-brand-white/20" />

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-4 text-sm">
              <p className="text-sm text-brand-white/60 mb-4">Explore our resources</p>
              <li><a href="https://scinapsescience.com/about" className="hover:underline">USCC - Scinapse Science</a></li>
              <li><a href="/uscc-registration" className="hover:underline">USCC Registration</a></li>
              <li><a href="https://scinapsescience.com/" className="hover:underline">Official Scinapse Website</a></li>
            </ul>
          </div>
        </div>

        {/* COLUMN 3: Footer Social Media + Newsletter Section */}
        <div className="sm:pl-14 flex flex-col gap-6 min-h-72">
          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <div className="flex space-x-4 text-xl">
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

          {/* Divider */}
          <hr className="border-t border-brand-white/20" />

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-brand-white/60 mb-2">Get updates on events and opportunities.</p>
            <a href="/newsletter" className="text-sm underline hover:text-brand-cyanBlue">Subscribe here →</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
