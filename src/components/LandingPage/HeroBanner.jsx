import React from "react";
import RippleButton from "../UI/RippleButton";
import { motion } from "framer-motion";
import FluidText from "../CoreWeb/FluidText";
import { MapPin } from "lucide-react";

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
            {/* Desktop/Laptop: Show FluidText */}
            <div className="hidden md:block">
              <FluidText
                text="We prepare undergraduates to lead through research and innovation."
                breakAfterWords={["prepare", "to", "research"]}
              />
            </div>
            {/* Mobile: Show simple heading */}
            <h1 className="block md:hidden text-2xl font-bold text-center leading-tight">
              We prepare undergraduate students to lead through research and innovation.
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <RippleButton
                href="/get-invovled"
                className="bg-brand-cyanBlue text-brand-black px-4 py-2 rounded text-center font-semibold hover:bg-brand-darkCyan transition"
              >
                Get Involved
              </RippleButton>

              <RippleButton
                href="/uscc"
                className="border disabled: border-brand-white px-4 py-2 rounded text-center font-semibold hover:border-brand-cyanBlue hover:text-brand-cyanBlue transition"
              >
                USCC
              </RippleButton>
            </div>
          </div>

          <p className="rounded-2xl mt-6 bg-black/40 backdrop-blur-sm p-6 text-sm sm:text-base md:text-lg leading-relaxed w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl border border-white/10 shadow-lg">
            SciNapse is a non-profit led by students from universities across Ontario. We create opportunities for undergraduates to explore science, sharpen their skills, and stand out. Our core initiative is the national Undergraduate Science Case Competition (USCC), hosted annually at the University of Ottawa in partnership with uOttawa's Faculty of Science and Faculty of Medicine.
          </p>
        </div>

        {/* Chapters Bar - white, overlaid, text left, animated logos right */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[95vw] md:w-[30vw] max-w-4xl">
          <div className="flex items-center justify-between bg-white rounded-xl shadow-lg px-6 py-3 border border-gray-200 w-full">
          <span className="hidden md:flex items-center text-gray-800 text-base tracking-wide whitespace-nowrap">
            <MapPin className="h-5 w-5 text-cyan-500 mr-2" />
            Chapters Across Ontario
          </span>
          <span className="md:hidden items-center text-gray-800 text-base tracking-wide whitespace-nowrap">
            Chapters in:
          </span>
            <div className="relative overflow-hidden flex-1 ml-6">
              <motion.div
                className="flex items-center gap-8 min-w-max"
                initial={{ x: 0 }}
                animate={{ x: [0, -240, 0] }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              >
                <img src="/other_chapters/western.png" alt="Western" className="h-8 w-auto" />
                <img src="/other_chapters/uoftsc.png" alt="UofT Scarborough" className="h-8 w-auto" />
                <img src="/other_chapters/mcmaster.png" alt="McMaster" className="h-8 w-auto" />
                <img src="/other_chapters/uoft.png" alt="UofT" className="h-8 w-auto" />
                <img src="/other_chapters/uofg.png" alt="Guelph" className="h-8 w-auto" />
                {/* Repeat for infinite effect */}
                <img src="/other_chapters/western.png" alt="Western" className="h-8 w-auto" />
                <img src="/other_chapters/uoftsc.png" alt="UofT Scarborough" className="h-8 w-auto" />
                <img src="/other_chapters/mcmaster.png" alt="McMaster" className="h-8 w-auto" />
                <img src="/other_chapters/uoft.png" alt="UofT" className="h-8 w-auto" />
                <img src="/other_chapters/uofg.png" alt="Guelph" className="h-8 w-auto" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
