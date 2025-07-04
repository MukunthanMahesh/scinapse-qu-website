import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";

const testimonials = [
  {
    name: "Ava Chen",
    role: "Biomedical Computing Student",
    affiliation: "Queen’s University",
    quote:
      "SciNapse gave me the opportunity to explore AI in medicine in a way that lectures never could. It’s been a game-changer for my career path.",
    imageUrl: "/testimonial_images/ava.jpg"
  },
  {
    name: "Daniel Iqbal",
    role: "Computer Science Major",
    affiliation: "University of Toronto",
    quote:
      "The USCC was the most exciting and intense academic event I’ve attended. Our team walked away more connected and inspired.",
    imageUrl: "/testimonial_images/daniel.jpg"
  },
  {
    name: "Meera Patel",
    role: "Life Sciences Student",
    affiliation: "McMaster University",
    quote:
      "I never thought I’d be this involved in undergrad research. SciNapse helped me find the confidence and the community to grow.",
    imageUrl: "/testimonial_images/meera.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <motion.section
      variants={slideUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      <div className="mb-10">
        <p className="text-brand-teal text-sm uppercase tracking-widest mb-2">
          Words of Praise By Our Network
        </p>
        <h2 className="text-brand-black font-sans text-4xl font-bold mt-2 mb-4">
          What Our Alumni Say
        </h2>
        <p className="font-sans text-lg max-w-2xl text-gray-800">
          Hear from our past alumns who’ve taken part in SciNapse Queens U's events, research showcases, and learning opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
