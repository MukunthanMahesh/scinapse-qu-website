import { ArrowRight, Users } from "lucide-react";

const USCCCard = () => {
  return (
    <div className="bg-brand-black text-brand-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-80">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-brand-cyanBlue rounded-lg">
          <Users className="w-6 h-6 text-brand-black" />
        </div>
        <h3 className="text-xl font-bold">USCC Team Registration</h3>
      </div>
      
      <p className="text-gray-300 mb-6 flex-grow">
        Register your team for the University Student Computing Competition. Compete with top students from across Canada.
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="text-sm text-brand-cyanBlue">• Team of 3 members</div>
        <div className="text-sm text-brand-cyanBlue">• Algorithm challenges</div>
        <div className="text-sm text-brand-cyanBlue">• Prizes & recognition</div>
      </div>
      
      <a
        href="/uscc"
        className="inline-flex items-center justify-center gap-2 bg-brand-cyanBlue text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-darkCyan transition-colors duration-200 mt-auto"
      >
        Register Team <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default USCCCard;
