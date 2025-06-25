export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">SciNapse</h2>
          <p className="mt-2 text-sm">
            Queen’s University’s science communication hub. Empowering students through outreach, research, and collaboration.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/get-involved" className="hover:underline">Get Involved</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">Queen’s University, Kingston, ON</p>
          <p className="text-sm">Email: <a href="mailto:scinapse@queensu.ca" className="underline">scinapse@queensu.ca</a></p>
        </div>
      </div>

      <div className="mt-8 border-t border-brand-white/20 pt-4 text-center text-xs text-brand-white/60">
        &copy; {new Date().getFullYear()} SciNapse Queen's University. All rights reserved.
      </div>
    </footer>
  );
}
