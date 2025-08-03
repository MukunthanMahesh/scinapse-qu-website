import TeamCard from "../components/TeamPage/TeamCard";
import { motion } from "framer-motion";
import { slideUpVariant } from "../utils/motionVariants";
import { teamMembers } from "../data/teamData.js";

export default function Team() {
  // Separate the first two (co-presidents) from the rest
  const coPresidents = teamMembers.slice(0, 2);
  const restOfTeam = teamMembers.slice(2);

  return (
    <div className="min-h-screen bg-brand-white">
      <motion.section
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="text-center">
          {/* Subtitle */}
          <p className="text-brand-teal text-sm uppercase tracking-widest mb-2">
            The SciNapse Network
          </p>
          {/* Main title */}
          <h1 className="text-brand-black font-sans text-4xl md:text-5xl font-bold mb-6">
            Our Executive Team
          </h1>
          {/* Description */}
          <p className="text-md text-gray-800 max-w-3xl mx-auto">
            Our team syncs leadership, logistics,
            outreach, development, and finance to empower undergraduate research at
            Queen’s.
          </p>
        </div>
      </motion.section>

      {/* Co-Presidents Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto mb-12">
        {coPresidents.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>

      {/* Rest of Team */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto ">
        {restOfTeam.map((member, idx) => (
          <TeamCard key={member.name + idx} {...member} />
        ))}
      </div>
    </div>
  );
}
