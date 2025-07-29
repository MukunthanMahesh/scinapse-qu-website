import { useState } from "react";
import { motion } from "framer-motion";
import FluidText from "../CoreWeb/FluidText";
import { slideUpVariant } from "../../utils/motionVariants";

const faqs = [
  {
    question: "Who judges the competition?",
    answer: "Professors, researchers, and graduate students from hospitals, universities and research institutes who are studying the area of interest.",
  },
  {
    question: "What is the competition topic and challenge like?",
    answer: `This year’s topic is: Gut microbiome!

The topic varies from year to year. Do not be concerned if the case topic is not your “specialty”. The challenge is designed so that all participants have an equal opportunity of succeeding. 

Past competition topics: Mycology, Neuroscience, Climate Crisis, Antimicrobial Resistance, Augmented Biology, Cannabis, Hydrofracturing, Zika Virus, The Global Food Crisis & Nutrition, Epilepsy, and Cystic Fibrosis.`,
  },
  {
    question: "Who is eligible for the competition?",
    answer: `All undergraduate university students in North America are eligible to enter the competition. 

USCC is offered in 2 divisions. The Lower Division encompasses 1st and 2nd year students, while the Upper Division is for 3rd year undergraduate students and above. Any student who already has or who is currently taking more than 3 third year courses as of Nov 1st must participate in the Upper Division. However, 1st and 2nd year students can register with upper year students in the Upper Division. Both divisions are judged and awarded separately. 

Students from any background are encouraged to participate, as interdisciplinary ideas are considered an advantage in this competition.

*Teams will be randomly checked to ensure eligibility in their own division. Those competing in the incorrect division will be removed from the competition and competitor fees will not be refunded.`,
  },
  {
    question: "I’ve already participated in the USCC in a previous year, can I participate again this year?",
    answer: "Of course!",
  },
  {
    question: "When and how can I register?",
    answer: "The registration period is now closed.",
  },
  {
    question: "Is there a competition fee?",
    answer: `Yes, the registration fee applies to all teams (1-4 members) that register and is the same no matter the size of the team. Please note that the fee must only be paid once per team and not per individual team member. Therefore, the more people in your team, the cheaper it is for each individual!

The registration fee for the 2024-2025 competition year is 100$.`,
  },
  {
    question: "I’ve never written a research proposal or created a scientific poster before, can I still participate? Do you offer any guidance?",
    answer: `Rest assured, you don’t need prior research and/or writing experience to participate in the USCC! In fact, our aim is to help students like you get introduced to the world of scientific research and practice those skills, so we highly encourage you to sign up!

We also have a mentorship team here to guide you and help you throughout the competition. They offer information sessions for both rounds where they explain the key parts and how to go about each task, as well as Q&A periods to answer your specific questions.`,
  },
  {
    question: "How are Round 1 submissions scored to select the finalist teams?",
    answer: `Previously, the finalist teams compromised the top 10% scoring teams of each affiliated campus, for each division. However, since removing the restriction that prevented students of different schools from forming teams together, we have noticed that more and more students are forming “multi-campus” teams. As such, we feel that it no longer makes sense to score the competition this way. 

Instead, this year we will select the top teams across the board to qualify for the final round. The exact percentage will be determined based on the number of registered teams (to ensure that a reasonable number of teams participate in Round 2), but will likely range between 10-25%. The lower and upper divisions will continue to be judged and awarded separately.`,
  },
  {
    question: "What happens to our submissions?",
    answer: `The submissions are your own intellectual property. Hence you are free to use it in labs, applications, and publications. We will ask for your explicit permission should your work be chosen for a publication by us or any of our affiliates.`,
  },
  {
    question: "What is the discord channel used for?",
    answer: `The Discord server helps us communicate with you (interested students and participants)! It is a space for us to post announcements and updates, share information, and answer any general questions you may have about the case competition.  We also offer the partner-finding channels to help with searching for a partner/extra member if you are interested in participating in the competition.`,
  },
  {
    question: "Can I request a refund? ",
    answer: `We can issue refunds prior to the registration deadline if your team is no longer able to participate in the competition. Typically, we are unable to offer refunds after registration closes and the case package is sent out. However, we may consider refund requests for any immediate emergencies and inquiries should be sent to contact@scinapsescience.com.`,
  },
];

const ChevronIcon = ({ open }) => (
  <svg
    className={`w-5 h-5 inline-block transition-transform duration-300 ${open ? 'rotate-180 text-brand-cyanBlue' : 'text-gray-400'}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <motion.section
      variants={slideUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-7xl mx-auto px-4 pt-8 pb-0"
    >
      <div className="mb-6 hidden md:block">
        <FluidText
          text="Frequently Asked Questions"
          color="text-brand-cyanBlue"
          size="text-xl md:text-3xl"
          baseColor="text-brand-black"
        />
      </div>
      {/* Mobile: Static heading */}
      <h2 className="block md:hidden text-2xl font-bold text-brand-black mb-4 leading-tight">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl w-full space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="border border-brand-white rounded-2xl shadow-md overflow-hidden transition-all bg-brand-black hover:bg-brand-black/90"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-brand-white focus:outline-none"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="flex-1 break-words text-left">{faq.question}</span>
                <span className="ml-4 flex-shrink-0 flex items-center">
                  <ChevronIcon open={isOpen} />
                </span>
              </button>
              <div
                className="transition-all duration-300 ease-in-out px-6"
                style={{
                  maxHeight: isOpen ? '300px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  paddingBottom: isOpen ? '1rem' : '0',
                }}
              >
                <div className="text-gray-300 text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
} 