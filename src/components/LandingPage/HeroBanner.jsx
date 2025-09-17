import React from "react";
import RippleButton from "../UI/RippleButton";
import { motion } from "framer-motion";
import FluidText from "../CoreWeb/FluidText";
import { MapPin } from "lucide-react";
import { slideUpVariant } from "../../utils/motionVariants"; // assumed path

export default function HeroBanner() {
  return (
    <>
      {/* Hero Banner */}
      <section className="min-h-[calc(100vh-72px)] md:h-[calc(100vh-72px)] bg-brand-black text-brand-white relative">
        <img
          src="/assets/hero_banner.jpg"
          alt="Hero Banner - SciNapse affiliated professor giving a presentation to students"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
          loading="eager"
        />

        <div className="relative z-10 flex flex-col justify-center grow px-6 py-16 md:px-16 lg:px-32 space-y-8 h-full">
          <div className="max-w-xl text-left space-y-6 md:bg-white/10 md:backdrop-blur-md md:rounded-2xl md:border md:border-white/20 md:shadow-xl p-8">
            {/* Desktop: FluidText */}
            <div className="hidden md:block">
              <FluidText
                text="We prepare undergraduates to lead through research and innovation."
                breakAfterWords={["prepare", "to", "research"]}
              />
            </div>
            {/* Mobile: Static heading */}
            <h1 className="block md:hidden text-2xl font-bold text-center leading-tight">
              We prepare undergraduate students to lead through research and innovation.
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <RippleButton
                href="/links"
                className="bg-brand-cyanBlue text-brand-black px-4 py-2 rounded text-center font-semibold hover:bg-brand-darkCyan transition"
              >
                Get Involved
              </RippleButton>

              <RippleButton
                href="/uscc"
                className="border border-brand-white px-4 py-2 rounded text-center font-semibold hover:border-brand-cyanBlue hover:text-brand-cyanBlue transition"
              >
                USCC
              </RippleButton>
            </div>
          </div>

          <p className="rounded-2xl mt-6 bg-black/40 backdrop-blur-sm p-6 text-sm sm:text-base md:text-lg leading-relaxed w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl border border-white/10 shadow-lg">
            SciNapse is a non-profit led by students from universities across Ontario. We create opportunities for undergraduates to explore science, sharpen their skills, and stand out. Our core initiative is the national Undergraduate Science Case Competition (USCC), hosted annually at the University of Ottawa in partnership with uOttawa's Faculty of Science and Faculty of Medicine.
          </p>
        </div>
      </section>

      {/* Other Chapters Section */}
      {/* White Chapter Bar */}
      <motion.section className="bg-brandw-white text-brand-black py-2 px-4" variants={slideUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-sm sm:text-base font-medium font-serif mb-4">
            We Have Chapters Across Ontario!
          </h2>

          {/* Mobile scroll */}
          <div className="sm:hidden overflow-x-auto whitespace-nowrap">
            <div className="inline-flex gap-6 items-center justify-start px-2">
              <img src="/landing/other_chapters/western.png" alt="Western" className="h-8" />
              <img src="/landing/other_chapters/uoftsc.png" alt="UofT Scarborough" className="h-8" />
              <img src="/landing/other_chapters/mcmaster.png" alt="McMaster" className="h-6" />
              <img src="/landing/other_chapters/uoft.png" alt="UofT" className="h-8" />
              <img src="/landing/other_chapters/uofg.png" alt="Guelph" className="h-8" />
            </div>
          </div>

          {/* Desktop inline logos */}
          <div className="hidden sm:flex justify-center items-center gap-10 pb-2">
            <img src="/landing/other_chapters/western.png" alt="Western" className="hover:scale-125 transition-transform max-h-12 sm:max-h-16 object-contain" />
            <img src="/landing/other_chapters/uoftsc.png" alt="UofT Scarborough" className="hover:scale-125 transition-transform  max-h-12 sm:max-h-16 object-contain" />
            <img src="/landing/other_chapters/mcmaster.png" alt="McMaster" className="hover:scale-125 transition-transform  max-h-12 sm:max-h-13 object-contain" />
            <img src="/landing/other_chapters/uoft.png" alt="UofT" className="hover:scale-125 transition-transform max-h-12 sm:max-h-16 object-contain" />
            <img src="/landing/other_chapters/uofg.png" alt="Guelph" className="hover:scale-125 transition-transform  max-h-12 sm:max-h-16 object-contain" />
          </div>

          { /*Seperate Hero and 'Event Section' with Line*/}
          <hr/>
          <hr/>
          
        </div>
      </motion.section>
    </>
  );
}
