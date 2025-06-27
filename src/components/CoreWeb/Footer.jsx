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
        <div class="bg-brand-white">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/get-involved" className="hover:underline">Get Involved</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 3: Footer Social Media + Newsletter Section */}
        <div class="bg-brand-white">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/get-involved" className="hover:underline">Get Involved</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>

        </div>
      </div>
    </footer>
  );
}
