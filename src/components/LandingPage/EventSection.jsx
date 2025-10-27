import EventCard from "./EventCard";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";

// This code defines an EventsSection component that displays a list of events using the EventCard component.
// This ‘EventCard’ component should accept the following props: date, day, monthYear, title, location, description, imageUrl, link

const events = [
  {
    day: "27",
    weekday: "Mon",
    monthYear: "Oct 2025",
    title: "USCC Social Night",
    location: "BioSciences Complex, Room 2109",
    // description: "Join us for Nintendo games like Smash Bros...",
    fullDetails:
      " Looking for a research team? Or just want to meet some awesome science students? Join us for SciNapse Queen’s USCC Social Night!",
    imageUrl: "/landing/event_images/uscc-social-night-2025.png",
  },
  {
    day: "20",
    weekday: "Mon",
    monthYear: "March 2026",
    title: "The Undergraduate Science Case Competition (USCC)",
    location: "The University of Ottawa",
    // description: "Do you want an opportunity to explore your scientific creativity?",
    fullDetails:
      "The Undergraduate Science Case Competition (USCC) is a student-led research competition organized to help undergraduates gain early experience within the STEM research field. It’s structured into 2 rounds, involving a written research proposal and a poster presentation in Ottawa! The goal is to foster curiosity and offer mentorship, feedback, and experience similar to professional academic conferences. Registration ends October 30th!",
    imageUrl: "/landing/event_images/uscc.jpg",
  },
  {
    day: "To be announced",
    weekday: "",
    monthYear: "",
    title: "STEM Horizons: AI & Healthcare Summit",
    location: "Queen`s University",
    // description: "SciNapse is teaming up with QMind for STEM Horizons!",
    fullDetails:
      "Whether you're passionate about AI, medicine, or research, this event is for you. Join industry experts and students for a full day of innovation.",
    imageUrl: "/landing/event_images/stem-horizons.jpg",
  }
];

const EventsSection = () => {
  return (
    <motion.section variants={slideUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-7xl mx-auto px-4 py-12" id="events">
      <div className="mb-10">
        <div className="flex items-center">
        <p className="text-brand-teal text-sm uppercase tracking-widest mb-2">
          Discover what's happening at SciNapse
        </p>
        </div>
        <h2 className="text-brand-black font-sans text-4xl font-bold mt-2 mb-4 ">
          Upcoming Events
        </h2>
        <p className="font-sans text-lg max-auto text-gray-800 justify-center">
          From fun hangouts to challenging competitions, SciNapse hosts events that bring
          students together all year long. Whether you’re looking to meet new people,
          connect with mentors, or dive into your first project, there’s always
          something happening. Join us for workshops, socials, panels, and our flagship
          USCC competition—your chance to learn, collaborate, and take the next step in
          your research journey.          
        {/* Hide Calendar Link Till Implemented */}
          {/* <span className="block mt-4">
            Want reminders? {" "} 
            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=SciNapse+Events&dates=20250723T180000Z/20250723T190000Z&location=Queen's+University&pli=1&sf=true&output=xml#eventpage_6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-darkCyan hover:underline"
            >
              <strong>Add our Google Calendar</strong>
            </a>
            .
          </span> */}
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
