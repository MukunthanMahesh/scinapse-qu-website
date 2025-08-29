import { ArrowRight, Users } from "lucide-react";

const USCCCard = () => {
  return (
    <div className="bg-red-800 text-brand-white rounded-xl p-6 shadow-lg hover:bg-red-800/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">USCC Team Registration</h3>
      </div>
      
      <p className="text-red-100 mb-6 flex-grow">
        Register your team for the USCC. Compete with top students from across Canada.
      </p>
      
      <div className="space-y-3 mb-12">
        <div className="text-sm text-red-200 font-medium">• Team of 2-4 members</div>
        <div className="text-sm text-red-200 font-medium">• 3 Rounds of Competition</div>
        <div className="text-sm text-red-200 font-medium">• PhD and Industry Judges</div>
      </div>
      
      <a
        href="/uscc"
        className="inline-flex items-center justify-center gap-2 bg-white text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 mt-auto shadow-md"
      >
        Register Team <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default USCCCard;
