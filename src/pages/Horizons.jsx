import HeroBanner from "../components/HorizonsPage/HeroBanner";
import CaseCompetition from "../components/HorizonsPage/CaseCompetition";
import ConferenceSchedule from "../components/HorizonsPage/ConferenceSchedule";
import PartnerSection from "../components/HorizonsPage/PartnerSection";

export default function HorizonsPage() {
  return (
    <div className="bg-brand-black">
      <HeroBanner />
      <CaseCompetition />
      <ConferenceSchedule />
      <PartnerSection />
    </div>
  );
}
