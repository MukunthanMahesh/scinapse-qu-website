import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";

const AboutSection = () => {
  return (
    <motion.section variants={slideUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}className="max-w-7xl mx-auto px-4 py-0">
      <div className="mb-10">
        <p className="font-crimson text-md text-brand-black font-medium">
          Your front row seats to undergrad research and innovation.
        </p>
        <h2 className="font-crimson text-4xl font-bold mt-2 mb-4">Who Are We?</h2>
        <p className="font-crimson text-lg text-gray-800">
          SciNapse Queen's works towards <strong>The Undergraduate Science Case Competition (USCC)</strong>, which is an Ontario-wide competition where groups of 2–4 attempt to create an interdisciplinary novel research proposal for this year's topic. The competition consists of two rounds. In the first round, research proposals will be judged by local professors and PhD students. The top 10% of teams then head to the provincial round in March in Ottawa to compete against universities from across Ontario by presenting their posters at the USCC. Our club is responsible for facilitating the conference for Queen's students, as well as hosting events throughout the year to promote undergraduate research and innovation.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;