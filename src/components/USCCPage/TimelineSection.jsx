import RippleButton from "../UI/RippleButton";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import FluidText from "../CoreWeb/FluidText";

// These dates are used to determine the status of each step in the timeline
// Format: YYYY-MM-DDTHH:mm:ssZ
const uscc_registration_end_date = new Date('2025-10-30T23:59:59Z'); // USCC registration end date
const written_round_start_date = new Date('2025-11-01T23:59:59Z'); // Written round start date
const written_round_submission_date = new Date('2025-11-22T23:59:59Z'); // Written round submission date
const presentation_round_start_date = new Date('2026-03-20T23:59:59Z'); // Presentation round start date
const presentation_round_end_date = new Date('2026-03-22T23:59:59Z'); // Presentation round end date

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
    desc: (
    <>
      Any undergraduate student interested in STEM research is encouraged to apply in teams of 2–4. <strong>
        Register through the <a className="underline" href="https://scinapsescience.com/register/uscc-2020-2021-ht3be-cejga-p5ykc-w4w45-nt6e7" target="_blank" rel="noopener noreferrer">official USCC site</a>
      </strong>, not through SciNapse Queen's. Registration closes on {formatDateNoYear(uscc_registration_end_date)} @ 11:59 PM EDT with a fee of $80 per group (Catering + Hotel Expenses included). 
      <p>
        <br />
      </p>
      After registering for USCC as a team OR if you are looking for potential team members, please fill in this <a className="text-brand-cyanHue" href="https://docs.google.com/forms/d/e/1FAIpQLSfUvGPWO3LaxsORkjUR8gKOA62MR-DFbmsEK2OPvucHQkTbSg/viewform">form</a> to let SciNapse Queen’s know! 
    </>
    ),
    closed: now > uscc_registration_end_date,
  },
  {
    title: "Step Two: Written Round",
    status:
      now < written_round_start_date
        ? `Written rounds will officially begin on ${formatDate(written_round_start_date)}`
        : now > written_round_submission_date
        ? "Written rounds have ended. Thank you for participating!"
        : `Written round submissions are due on ${formatDate(written_round_submission_date)}`,
    desc: (
    <>
      Come up with a novel research proposal within this year’s topic: <strong>reproductive health</strong>! 
      Conduct a literature search and try your best to find any gaps in areas that interest you. With the help of your group, you will complete a written research proposal (abstract, rationale, methodology, etc.) which will be submitted online. Teams will have until {formatDate(written_round_submission_date)} @ 11:59PM EDT to complete their proposal. Feel free to reach out to the SciNapse Queen’s executive team for any support!
    </>
    ),
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
    desc: (
    <>
      The top 10%-15% of teams per university will qualify for Round 2 which consists of a scientific poster presentation at the University of Ottawa from {formatDate(presentation_round_start_date)} - {formatDate(presentation_round_end_date)}. The weekend will consist of poster presentations, workshops, networking, and an award ceremony! The top 10 teams will have their abstracts published, and the overall winner in each division will have their proposals published in the URNCT Journal. If you need more clarification, check out this <a className="text-brand-cyanHue" href="https://docs.google.com/document/d/1ZcS2f30aCVFR0AkIWIk8e19w3OSCb7uD41DSuajMPss/edit?tab=t.0">information doc!</a>
    </>
    ),
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
