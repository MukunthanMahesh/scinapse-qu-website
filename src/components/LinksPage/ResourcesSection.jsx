import { ExternalLink, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdScience } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import { CiTimer } from "react-icons/ci";

const ResourcesSection = () => {
  const resources = [
    {
      category: "USCC Resources",
      items: [
        { name: "USCC - SciNapse Science", link: "https://scinapsescience.com/about", icon: <MdScience className="w-4 h-4" /> },
        { name: "USCC - Team Registration", link: "#", icon: <GiArchiveRegister className="w-4 h-4" /> },
        { name: "USCC - Official Website", link: "https://scinapsescience.com/", icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      category: "Workshops & Templates",
      items: [
        { name: "Coming Soon", icon: <CiTimer className="w-4 h-4" /> },
        { name: "Coming Soon", icon: <CiTimer className="w-4 h-4" /> },
        { name: "Coming Soon", icon: <CiTimer className="w-4 h-4" /> }
      ]
    },
    {
      category: "Community Links",
      items: [
        { name: "Our Instagram", link: "https://www.instagram.com/scinapsequ/", icon: <FiInstagram className="w-4 h-4" /> },
        { name: "Our LinkedIn", link: "https://www.linkedin.com/company/scinapse-queen-s-university/", icon: <FiLinkedin className="w-4 h-4" /> },
        { name: "Our Facebook", link: "https://www.facebook.com/scinapseuscc/", icon: <FiFacebook className="w-4 h-4" /> }
      ]
    }
  ];

return (
  <motion.div
    className="text-center"
    variants={slideUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* keep this background */}
    <div className="rounded-xl p-8 bg-brand-cyanBlue/10 shadow-lg">
      <div className="grid md:grid-cols-3 gap-8 text-left">
        {resources.map((category, i) => (
          <div key={i} className="space-y-4">
            <h3
              className="
                text-xl font-semibold
                text-slate-900
                border-b pb-2
                border-slate-200"
            >
              {category.category}
            </h3>

            <div className="space-y-3">
              {category.items.map((item, j) => (
                <a
                  key={j}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative flex items-center gap-3
                    rounded-lg p-3
                    bg-white ring-1 ring-slate-200 shadow-sm
                    hover:bg-white hover:ring-brand-cyanBlue/40 hover:shadow-md
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyanBlue
                    transition-colors duration-200
                  "
                >
                  <div
                    className="
                      text-brand-cyanBlue
                      group-hover:text-brand-darkCyan
                    "
                  >
                    {item.icon}
                  </div>

                  <span
                    className="
                      flex-grow
                      text-slate-800
                      group-hover:text-brand-darkCyan
                    "
                  >
                    {item.name}
                  </span>

                  <ExternalLink
                    className="
                      w-4 h-4
                      text-slate-400
                      group-hover:text-brand-darkCyan
                    "
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);
};

export default ResourcesSection;
