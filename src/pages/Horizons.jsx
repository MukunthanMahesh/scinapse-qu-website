import HeroBanner from "../components/HorizonsPage/HeroBanner";
import ConferenceSchedule from "../components/HorizonsPage/ConferenceSchedule";
import PartnerSection from "../components/HorizonsPage/PartnerSection";

export default function HorizonsPage() {
  return (
    <div className="bg-brand-black">
      <HeroBanner />
      <ConferenceSchedule />
      <PartnerSection />
    </div>
  );
}
