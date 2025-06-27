export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-[1fr_2fr_1.5fr] gap-6">
        
        {/* COLUMN 1: Footer About Section */}
        <div>
          {/* About Text Square */}
          <div className="p-1.5 bg-gradient-to-r from-purple-500 to-brand-cyanBlue mb-4">
            <div className="bg-brand-black text-brand-black p-4 rounded-md flex flex-col justify-center">
              <div className="bg-black text-white p-4 rounded-md self-start sm:self-stretch sm:-mr-[25%] -mr-[10%]">
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
