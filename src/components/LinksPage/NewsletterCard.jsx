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
    <div className="bg-brand-black text-brand-white rounded-xl p-6 shadow-lg hover:bg-brand-black/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-80">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-brand-cyanBlue rounded-lg">
          <Mail className="w-6 h-6 text-brand-black" />
        </div>
        <h3 className="text-xl font-bold">Newsletter</h3>
      </div>
      
      <p className="text-gray-300 mb-6 flex-grow">
        Stay in the loop with our monthly newsletter featuring events, opportunities, and tech insights from the computing community.
      </p>
      
      <form onSubmit={handleNewsletterSubmit} className="mt-auto">
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-brand-cyanBlue focus:outline-none transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-cyanBlue text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-darkCyan transition-colors duration-200 disabled:opacity-50"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default NewsletterCard;
