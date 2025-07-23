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
    imageUrl: "/landing/event_images/nintendo.jpg",
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
    imageUrl: "/landing/event_images/uscc.jpg",
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
    imageUrl: "/landing/event_images/stem-horizons.jpg",
    link: "#"
  }
];

const EventsSection = () => {
  return (
    <motion.section variants={slideUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="flex items-center">
        <p className="text-brand-teal text-sm uppercase tracking-widest mb-2">
          Grab Your Front Row Seat to Undergraduate Research and mentorship at
        </p>
        <img src="/assets/queenslogo.jpg" alt="SciNapse Logo" className="h-6 w-auto ml-4 mb-2 hover:scale-125 transition-transform duration-300" />
        </div>
        <h2 className="text-brand-black font-sans text-4xl font-bold mt-2 mb-4 ">Mark Your Calendar</h2>
        <p className="font-sans text-lg max-w-2xl text-gray-800">
          Connect, collaborate, and kickstart your research journey with SciNapse events all year round. Whether you’re here to make friends, find a mentor, or launch your first research project. From casual socials to hands-on workshops, faculty panels, and the USCC case competition, there’s something for every stage of your journey.
          <span className="block mt-4">
            Want reminders? {" "} 
            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=SciNapse+Events&dates=20250723T180000Z/20250723T190000Z&location=Queen's+University&pli=1&sf=true&output=xml#eventpage_6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-darkCyan hover:underline"
            >
              Add us to your Google Calendar
            </a>
            .
          </span>
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
