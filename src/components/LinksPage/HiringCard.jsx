import { ArrowRight, Briefcase } from "lucide-react";

const HiringCard = () => {
  return (
    <div className="bg-blue-800 text-brand-white rounded-xl p-6 shadow-lg hover:bg-blue-800/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-auto relative">
      
      {/* Blinking Green Light - Hiring Open */}
      <div className="absolute top-3 right-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg">
          <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
        </div>
      </div>
     
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">2025 Executive Team Hiring</h3>
      </div>
      
      <p className="text-blue-100 mb-6 flex-grow">
        Join the SciNapse Team and help shape our community! We're looking for passionate students to fill various roles.
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="text-sm text-blue-200 font-medium">• Logistics Team</div>
        <div className="text-sm text-blue-200 font-medium">• Conference Team</div>
        <div className="text-sm text-blue-200 font-medium">• Outreach Team</div>
        <div className="text-sm text-blue-200 font-medium">• First Year Representative</div>

      </div>
      
      <a
        href="#"
        className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 mt-auto shadow-md"
      >
        Apply Now <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default HiringCard;
