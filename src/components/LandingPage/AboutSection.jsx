import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import { Link } from "react-router-dom"; // Optional for CTA
import RippleButton from "../UI/RippleButton";

const AboutSection = () => {
  return (
    <motion.section
      variants={slideUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      {/* Grid: Text + Video */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-brand-teal text-sm uppercase tracking-widest mb-2">
            Ontario's gateway to student-driven science
          </p>

          <h2 className="text-brand-black font-sans text-4xl font-bold mb-6">
            Empowering Undergraduate Research at Queen’s
          </h2>

          <p className="font-sans text-lg text-gray-800 mb-8 max-w-prose">
            SciNapse Queen’s leads Queen’s University’s participation in the{" "}
            <strong>Undergraduate Science Case Competition (USCC)</strong>—an
            Ontario-wide challenge where teams of 2–4 students develop innovative
            interdisciplinary research proposals.
            <br /><br />
            In Round 1, submissions are reviewed by professors and PhD students.
            The top 10% move on to the provincial finals in Ottawa. SciNapse
            organizes Queen’s internal round and hosts events throughout the year
            to inspire, prepare, and support student researchers.
          </p>

          <RippleButton
            href="/links"
            size="lg"
            variant="dark"
          >
            Get Involved
          </RippleButton>
        </div>

        {/* Right - YouTube Embed */}
        <div className="w-full">
          <div className="relative w-full pt-[56.25%] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <iframe
              src="https://www.youtube.com/embed/PRq35XYDBKE?start=2"
              title="USCC Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {[
          { title: "👥 Teams of 2–4", desc: "Students work collaboratively" },
          { title: "🏆 Top 10% Advance", desc: "To the Ottawa provincial finals" },
          { title: "📍 Provincial Round", desc: "Held in March, in Ottawa" },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
export default AboutSection;
