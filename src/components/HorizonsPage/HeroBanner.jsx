import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import RippleButton from "../UI/RippleButton";
import { Rocket, Users, Trophy } from "lucide-react";
import FluidText from "../CoreWeb/FluidText";

export default function HeroBanner() {
  return (
    <section className="bg-brand-black text-brand-textMutedDark">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-[calc(100vh-72px)] max-w-8xl mx-auto flex flex-col-reverse md:flex-row items-stretch px-4 lg:px-8"
      >
        {/* Image side */}
        <div className="w-full md:w-1/2 flex-shrink-0 flex items-stretch md:mb-0">
          <div className="relative w-full overflow-hidden shadow-lg">
            <img
              src="/horizons/astronaut.png"
              alt="Astronaut representing STEM Horizons: Space & Medicine"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content side */}
        <div className="w-full md:w-1/2 md:pl-10 flex items-center mb-8 md:mb-0">
          <div className="space-y-3 sm:space-y-4 max-w-xl mx-auto md:mx-0">
            <div className="flex justify-center md:justify-start">
              <a 
              href="https://linktr.ee/qalc"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img
                  src="/horizons/organized-by.png"
                  alt="Organized by SciNapse Queen's and Queen's Astro-Lens Club"
                  className="h-16 w-auto sm:h-26"
                />
              </a>
            </div>
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-brand-white text-center md:text-left">
              March 7, 2026 • Queen&apos;s University
            </p>
            <div className="hidden md:block">
              <FluidText
                text="STEM Horizons: Space & Medicine"
              />
            </div>
            <h1 className="md:hidden text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left">
              STEM Horizons:
                <span className="ml-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left">
                Space &amp; Medicine
              </span>
            </h1>
 
            <p className="text-sm sm:text-base md:text-lg text-brand-white text-center md:text-left">
              Join us for a conference dedicated to exploring the interdisciplinary intersections of STEM through space and astronomy, bringing together expert speakers from engineering, physics, and medicine alongside a competitive case competition with opportunities for an abstract publication and cash prizes.  
            </p>

            <ul className="space-y-1.5 text-xs sm:text-sm md:text-base text-brand-white">
              <li className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <Rocket className="w-4 h-4 text-brand-primary" />
                <span>
                  <span className="font-semibold">Case competition:</span> Poster &amp; Abstract Presentation
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <Users className="w-4 h-4 text-brand-primary" />
                <span>
                  <span className="font-semibold">Speakers &amp; networking:</span> engineers, physicists, clinicians
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <Trophy className="w-4 h-4 text-brand-primary" />
                <span>
                  <span className="font-semibold">Prizes:</span> QSURJ abstract publication &amp; cash
                </span>
              </li>
            </ul>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-3 pt-3 justify-center md:justify-start">
                <RippleButton
                  href="/links"
                  size="md"
                  variant="primary"
                >
                  Get Pass
                </RippleButton>
                <RippleButton
                  href="/uscc"
                  size="md"
                  variant="outlineLight"
                >
                  Learn more
                </RippleButton>
              </div>
              <p className="hidden md:block text-[11px] sm:text-xs text-brand-white/80 text-center md:text-left">
                *Lunch included
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
