import RippleButton from "../UI/RippleButton";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";

const stepImages = [
  "/assets/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0377.jpg",
  "/assets/gallery/SciNapse_USCC_2023-2024/20240309-DSCF0458.jpg",
  "/assets/gallery/SciNapse_USCC_2023-2024/20240310-DSCF7670.jpg",
];

const steps = [
  {
    title: "Step One: Register",
    status: "Registration for the USCC 2024-2025 is now closed.",
    desc: "Register for the competition in teams of 1-4. We highly encourage participating in teams to develop collaboration skills which are an important part of scientific research! You can find potential team mates using our Discord partner-finding channels (more information below).",
    closed: true,
  },
  {
    title: "Step Two: Written Round",
    status: "Nov 1 – Nov 22, 2024",
    desc: "Propose an original research idea to tackle a real-world issue, supported by current scientific literature. The first round is a written round submitted online, to be completed in 3 weeks. The case will be released on November 1st and team submissions will be due on November 22nd at midnight EST. Registered teams will receive the case booklet.",
  },
  {
    title: "Step Three: Presentation Round",
    status: "March 7–9, 2025 (University of Ottawa)",
    desc: "Top scoring teams from each division will advance to the next round and present their novel research proposal to judges at our scientific conference. The second round will take place March 7th-9th, 2025 in person at the University of Ottawa! The weekend includes poster sessions, presentations, workshops, and an awards ceremony. The exact schedule will be released to finalists in January.",
  },
];

export default function TimelineSection() {
  return (
      <motion.section
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
      <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-10 font-sans text-center md:text-left">How does it work?</h2>
      <div className="flex flex-col gap-12">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Step Image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={stepImages[idx]}
                alt={step.title}
                className="rounded-xl shadow-md object-cover w-full h-48 md:h-56"
                loading="lazy"
              />
            </div>
            {/* Step Content */}
            <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg ${step.closed ? 'bg-red-100 text-red-500' : 'bg-brand-cyanBlue text-brand-black'}`}>{idx+1}</div>
                <h3 className="font-bold text-lg md:text-xl text-brand-black font-sans">{step.title}</h3>
              </div>
              <div className={`text-sm mb-2 ${step.closed ? 'text-red-500 font-semibold' : 'text-brand-cyanBlue font-semibold'}`}>{step.status}</div>
              <p className="text-gray-700 text-sm md:text-base font-sans">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 
