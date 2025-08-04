import React from "react";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import StatCard from "./StatCard";
import { stats } from "../../data/statData";

const StatSection = () => (
  <div className="relative min-h-screen bg-brand-white overflow-hidden">
    {/* Content */}
    <motion.section
      variants={slideUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-7xl mx-auto px-4 py-16 relative z-10"
    >
      <div className="text-center">
        {/* Subtitle */}
        <p className="text-brand-teal text-sm uppercase tracking-widest mb-2">
          About SciNapse QU's
        </p>
        {/* Main title */}
        <h1 className="text-brand-black font-sans text-4xl md:text-5xl font-bold mb-6">
          Journey of Impact
        </h1>
        {/* Description */}
        <p className="text-md text-gray-800 max-w-3xl mx-auto">
          For over a decade, SciNapse has empowered undergraduate research at Queen’s through annual competitions and initiatives. Here are some key statistics.
        </p>
      </div>
    </motion.section>

    {/* Stat Cards Grid */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 mx-10 justify-center items-end">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  </div>
);

export default StatSection;
