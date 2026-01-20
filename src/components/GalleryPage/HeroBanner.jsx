import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import RippleButton from "../UI/RippleButton";

export default function HeroBanner() {
  return (
    <section className="bg-zinc-950 text-brand-white">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        animate="visible"
        className="min-h-[calc(100vh-72px)] max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 flex flex-col-reverse md:flex-row items-stretch gap-10"
      >
        {/* Right: Image / collage on desktop */}
        <div className="w-full md:w-1/2 flex-shrink-0 flex items-stretch">
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-zinc-900/70">
            <img
              src="/assets/hero_banner.jpg"
              alt="Participants at SciNapse events"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Left: Text + CTAs */}
        <div className="w-full md:w-1/2 flex items-center mb-8 md:mb-0">
          <div className="space-y-4 max-w-xl mx-auto md:mx-0 text-left">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-brand-cyanBlue">
              Event Gallery
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-white">
              Highlights from past SciNapse events
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-brand-white/80">
              Browse photo sets from conferences, case competitions, and workshops hosted by SciNapse and our partners. Use the gallery to get a feel for what it&apos;s like to participate.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <RippleButton href="/#events" variant="primary">
                See upcoming events
              </RippleButton>
              <RippleButton href="/team" variant="outlineLight">
                Meet the team
              </RippleButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
