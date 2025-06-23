import EventCard from "./EventCard";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";

// This code defines an EventsSection component that displays a list of events using the EventCard component.
// This ‘EventCard’ component should accept the following props: date, day, monthYear, title, location, description, imageUrl, link

const events = [
  {
    day: "04",
    weekday: "Tue",
    monthYear: "Feb 2024",
    title: "Nintendo Game Night",
    location: "Jefferey Room 204, Queen's University",
    // description: "Join us for Nintendo games like Smash Bros...",
    fullDetails:
      "Come join us for an evening of Nintendo games, featuring Super Smash Bros, Mario Kart Deluxe, and more! Free snacks, no registration needed.",
    imageUrl: "/event_images/nintendo.jpg",
    link: "#"
  },
  {
    day: "07",
    weekday: "Mon",
    monthYear: "March 2025",
    title: "The Undergraduate Science Case Competition (USCC)",
    location: "The University of Ottawa",
    // description: "Do you want an opportunity to explore your scientific creativity?",
    fullDetails:
      "The Undergraduate Science Case Competition is a chance to solve research problems and network with peers. Open to all undergraduates.",
    imageUrl: "/event_images/uscc.jpg",
    link: "#"
  },
  {
    day: "23",
    weekday: "Sun",
    monthYear: "March 2025",
    title: "STEM Horizons: AI & Healthcare Summit",
    location: "Queen`s University",
    // description: "SciNapse is teaming up with QMind for STEM Horizons!",
    fullDetails:
      "Whether you're passionate about AI, medicine, or research, this event is for you. Join industry experts and students for a full day of innovation.",
    imageUrl: "/event_images/stem-horizons.jpg",
    link: "#"
  }
];

const EventsSection = () => {
  return (
    <motion.section variants={slideUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="font-crimson text-md text-brand-black font-medium">
          Your front row seats to undergrad research and innovation.
        </p>
        <h2 className="font-crimson text-4xl font-bold mt-2 mb-4 ">Mark Your Calendar</h2>
        <p className="font-crimson text-lg max-w-2xl text-gray-800">
          SciNapse hosts <strong>year-round events</strong> designed to engage undergraduates in scientific discovery,
          skill-building, and collaboration. From panels to case competition—
          <strong> we’ve got something for every aspiring innovator</strong>.
        </p>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </motion.section>
  );
};

export default EventsSection;
