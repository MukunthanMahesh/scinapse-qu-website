import HiringCard from "../components/LinksPage/HiringCard";
import NewsletterCard from "../components/LinksPage/NewsletterCard";
import USCCCard from "../components/LinksPage/USCCCard";
import ResourcesSection from "../components/LinksPage/ResourcesSection";
import { motion } from "framer-motion";
import { slideUpVariant } from "../utils/motionVariants";


export default function Links() {

  return (
    <div className="min-h-screen bg-brand-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Main Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <HiringCard />
          <NewsletterCard />
          <USCCCard />
        </div>

        {/* Resources Section */}
        <ResourcesSection />
      </div>
    </div>
  );
}