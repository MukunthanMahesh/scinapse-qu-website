import RippleButton from "../UI/RippleButton";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import FluidText from "../CoreWeb/FluidText";

// These dates are used to determine the status of each step in the timeline
// Format: YYYY-MM-DDTHH:mm:ssZ
const uscc_registration_end_date = new Date('2024-09-08T23:59:59Z'); // USCC registration end date
const written_round_start_date = new Date('2024-11-01T23:59:59Z'); // Written round start date
const written_round_submission_date = new Date('2024-11-22T23:59:59Z'); // Written round submission date
const presentation_round_start_date = new Date('2024-03-07T23:59:59Z'); // Presentation round start date
const presentation_round_end_date = new Date('2024-03-09T23:59:59Z'); // Presentation round end date

const stepImages = [
  "/uscc/undraw_email-consent_j36b.svg", // Registration step
  "/uscc/undraw_engineering-team_13ax.svg", // Written round step
  "/uscc/undraw_presentation_qn18.svg", // Presentation round step
];

const now = new Date();

// Helper function to format dates nicely
const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
});
};

// Helper function to format dates without year
const formatDateNoYear = (date) => {
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric' 
  });
};

const steps = [
  {
    title: "Step One: Register",
    status: now > uscc_registration_end_date
      ? "Registration for this year's USCC is closed."
      : `Registration for this year's USCC is now open! (Ends ${formatDate(uscc_registration_end_date)})`,
    desc: `Register for the competition in teams of 1-4. We highly encourage participating in teams to develop collaboration skills which are an important part of scientific research! You can find potential team mates using our Discord partner-finding channels (more information below). Registration closes on ${formatDateNoYear(uscc_registration_end_date)}.`,
    closed: now > uscc_registration_end_date,
  },
  {
    title: "Step Two: Written Round",
    status:
      now < written_round_start_date
        ? `Written round case details will be announced on ${formatDate(written_round_start_date)}`
        : now > written_round_submission_date
        ? "Written rounds have ended. Thank you for participating!"
        : `Written round submissions are due on ${formatDate(written_round_submission_date)}`,
    desc: `Propose an original research idea to tackle a real-world issue, supported by current scientific literature. The first round is a written round submitted online, to be completed in 3 weeks. The case will be released on ${formatDateNoYear(written_round_start_date)} and team submissions will be due on ${formatDateNoYear(written_round_submission_date)} at midnight EST. Registered teams will receive the case booklet.`,
    closed: now > written_round_submission_date,
  },
  {
    title: "Step Three: Presentation Round",
    status:
      now < presentation_round_start_date
        ? `Presentation rounds will begin on ${formatDate(presentation_round_start_date)} @ The University of Ottawa`
        : now > presentation_round_end_date
        ? "Presentation rounds have closed. Thank you for joining us this year!"
        : `Presentation rounds will finish on ${formatDate(presentation_round_end_date)} @ The University of Ottawa`,
    desc: `Top scoring teams from each division will advance to the next round and present their novel research proposal to judges at our scientific conference. The second round will take place between ${formatDateNoYear(presentation_round_start_date)}-${formatDateNoYear(presentation_round_end_date)} in person at the University of Ottawa! The weekend includes poster sessions, presentations, workshops, and an awards ceremony. The exact schedule will be released to finalists in January.`,
    closed: now > presentation_round_end_date,
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
      {/*Heading*/}
      <div className="mb-12 hidden md:block">
        <FluidText
          text="USCC 2025-2026 Timeline"
          color="text-brand-cyanBlue"
          size="text-xl md:text-3xl"
          baseColor="text-brand-black"
        />
      </div>
      {/* Mobile: Static heading */}
      <h1 className="block md:hidden text-2xl font-bold text-brand-black mb-12 leading-tight">
        USCC 2025-2026 Timeline
      </h1>
      <div className="flex flex-col gap-12">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Step Image */}
            <div className="w-full md:w-1/3 flex-shrink-0 hover:rotate-3 transition">
              <img
                src={stepImages[idx]}
                alt={step.title}
                className="w-full h-48 md:h-56"
                loading="lazy"
              />
            </div>
            {/* Step Content */}
            <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg ${step.closed ? 'bg-red-100 text-red-500' : 'bg-brand-cyanBlue/50 text-brand-black'}`}>{idx+1}</div>
                <h3 className="font-bold text-lg md:text-xl text-brand-black font-sans">{step.title}</h3>
              </div>
              <div className={`text-sm mb-2 ${step.closed ? 'text-red-800 font-semibold' : 'text-brand-teal font-semibold'}`}>{step.status}</div>
              <p className="text-gray-700 text-sm md:text-base font-sans">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
