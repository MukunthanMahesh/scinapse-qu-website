import React from "react";

export default function HeroBanner() {
  return (
    <section className="min-h-[calc(100vh-72px)] md:h-[calc(100vh-72px)] bg-black text-white relative">
      <img
        src="/hero_banner.jpg"
        alt="Hero Banner - SciNapse affiliated professor giving a presentation to students"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
      />

      <div className="relative z-10 flex flex-col justify-center grow px-6 py-16 md:px-16 lg:px-32 space-y-8 h-full">
        <div className="max-w-xl text-left space-y-6">
          {/* Responsive Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-md sm:max-w-lg">
            We prepare undergraduates to lead through research and innovation.
          </h1>

          {/* Responsive Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="/get-involved"
              className="bg-brand-cyanBlue text-brand-black px-4 py-2 rounded text-center font-semibold hover:bg-brand-darkCyan"
            >
              Get Involved
            </a>
            <a
              href="/uscc"
              className="border border-white px-4 py-2 rounded text-center font-semibold hover:bg-white hover:text-black"
            >
              USCC
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-6 bg-black bg-opacity-60 p-4 text-sm sm:text-base md:text-lg leading-relaxed w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          SciNapse is a non-profit led by students from universities across Ontario. We create opportunities for undergraduates to explore science, sharpen their skills, and stand out. Our core initiative is the national Undergraduate Science Case Competition (USCC), hosted annually at the University of Ottawa in partnership with uOttawa’s Faculty of Science and Faculty of Medicine.
        </p>
      </div>
    </section>
  );
}
