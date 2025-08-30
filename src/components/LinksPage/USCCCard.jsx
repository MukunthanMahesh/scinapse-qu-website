import { ArrowRight, Users } from "lucide-react";
import RippleButton from "../UI/RippleButton";

const USCCCard = () => {
  return (
    <div className="bg-brand-black text-brand-white rounded-xl p-6 shadow-lg hover:bg-brand-black/90 hover:shadow-xl transition-all duration-300 flex flex-col h-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-brand-cyanBlue rounded-lg">
          <Users className="w-6 h-6 text-brand-black" />
        </div>
        <h3 className="text-xl font-bold">USCC Team Registration</h3>
      </div>
      
      <p className="text-gray-300 mb-6 flex-grow">
        Register your team for the The Undergraduate Science Case Competition (USCC), an exciting event where students tackle real-world scientific challenges. Uncover a whole new dimension of scientific innovation. 
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="text-sm text-brand-cyanBlue">• Team of 1-4 members</div>
        <div className="text-sm text-brand-cyanBlue">• Written Round and Presentation Round</div>
        <div className="text-sm text-red-400 font-semibold">• Registration ends September 8th</div>
      </div>
      
      <RippleButton
        href="#" // Replace '#' with actual application link
        className="inline-flex items-center justify-center gap-2 bg-brand-cyanBlue text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-darkCyan transition-colors duration-200 mt-auto"
      >
        Register Team <ArrowRight className="w-4 h-4" />
      </RippleButton>
 
    </div>
  );
};

export default USCCCard;
