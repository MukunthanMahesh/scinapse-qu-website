import FluidText from "../CoreWeb/FluidText";
import RippleButton from "../UI/RippleButton";
import TimelineSection from "./TimelineSection";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import { FiInfo } from "react-icons/fi";

const USCC_VIDEO_URL = "https://www.youtube.com/embed/PRq35XYDBKE?start=2";

export default function AboutSection() {
  return (
    <motion.section
        variants={slideUpVariant}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 pt-8 pb-0"
      >
        
      {/* Info Box
      <div className="flex justify-center mb-10">
        <div className="bg-gradient-to-r from-brand-cyanBlue/20 via-white to-brand-cyanBlue/10 border border-brand-cyanBlue rounded-2xl shadow-md px-6 py-4 max-w-2xl w-full text-center flex items-center gap-4 hover:bg-brand-cyanBlue/20 transition">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full text-brand-cyanBlue text-2xl">
            <FiInfo />
          </span>
          <p className="lg:block hidden text-brand-black text-lg text-left">
          <h2>USCC dates are being finalized at the moment. Stay tuned!</h2>
          </p>
          <p className="md:hidden text-brand-black text-sm text-left">
          <strong> NOTE: USCC dates are being finalized at the moment. Stay tuned!</strong>
          </p>
        </div>
      </div> */}

      {/* Intro Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Left: Text & CTAs */}
        <div>
          <div className="mb-6 hidden md:block">
            <FluidText
              text="What is the USCC?"
              breakAfterWords={["Science"]}
              color="text-brand-cyanBlue"
              size="text-xl md:text-3xl"
              baseColor="text-brand-black"
            />
          </div>

          {/* Mobile: Static heading */}
          <h1 className="block md:hidden text-2xl font-bold text-brand-black mb-4 leading-tight">
            What is the USCC?
          </h1>

          <p className="text-lg text-gray-800 mb-4 font-sans">
            The <strong>Undergraduate Science Case Competition</strong> (USCC) is a student-led research competition organized to help undergraduates gain early experience within the STEM research field. It’s structured into 2 rounds, involving a written research proposal and a poster presentation in Ottawa! The goal is to foster curiosity and offer mentorship, feedback, and experience similar to professional academic conferences. 
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
            <RippleButton
              href="/links"
              variant="primary"
            >
              Register Your Team
            </RippleButton>
            <RippleButton
              href="https://scinapsescience.com/"
              variant="outlineLight"
            >
              Official USCC Website
            </RippleButton>
          </div>
        </div>
        {/* Right: Video */}
        <div className="w-full">
          <div className="relative w-full pt-[56.25%] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <iframe
              src={USCC_VIDEO_URL}
              title="USCC Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
