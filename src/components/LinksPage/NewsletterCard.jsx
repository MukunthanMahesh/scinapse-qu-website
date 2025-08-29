import { useState } from "react";
import { Mail } from "lucide-react";

const NewsletterCard = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Newsletter signup logic would go here
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thank you for subscribing to our newsletter!");
    }, 1000);
  };

  return (
    <div className="bg-yellow-600 text-brand-white rounded-xl p-6 shadow-lg hover:bg-yellow-600/90 hover:shadow-xl transition-all duration-300  flex flex-col h-80">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white/25 backdrop-blur-sm rounded-lg">
          <Mail className="w-6 h-6 text-yellow-800" />
        </div>
        <h3 className="text-xl font-bold text-yellow-900">Newsletter</h3>
      </div>
      
      <p className="text-yellow-900/80 mb-6 flex-grow">
        Stay in the loop with our monthly newsletter featuring events, opportunities, and insights from the scinapse community.
      </p>
      
      <form onSubmit={handleNewsletterSubmit} className="mt-auto">
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-yellow-900 placeholder-yellow-800/70 border border-yellow-700/30 focus:border-yellow-800 focus:outline-none transition-colors backdrop-blur-sm"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-900 transition-colors duration-200 disabled:opacity-50 shadow-md"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default NewsletterCard;
