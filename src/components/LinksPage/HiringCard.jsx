import { ArrowRight, Briefcase } from "lucide-react";

const HiringCard = () => {
  return (
    <div className="bg-brand-black text-brand-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-80">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-brand-cyanBlue rounded-lg">
          <Briefcase className="w-6 h-6 text-brand-black" />
        </div>
        <h3 className="text-xl font-bold">Hiring for 2025</h3>
      </div>
      
      <p className="text-gray-300 mb-6 flex-grow">
        Join our team and help shape the future of computing at Queen's. We're looking for passionate students to fill various roles.
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="text-sm text-brand-cyanBlue">• Executive Positions</div>
        <div className="text-sm text-brand-cyanBlue">• Event Coordinators</div>
        <div className="text-sm text-brand-cyanBlue">• Technical Leads</div>
      </div>
      
      <a
        href="#"
        className="inline-flex items-center justify-center gap-2 bg-brand-cyanBlue text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-darkCyan transition-colors duration-200 mt-auto"
      >
        Apply Now <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default HiringCard;
