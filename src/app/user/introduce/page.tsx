import HeroBanner from "./_components/HeroBanner";
import ChurchIntro from "./_components/ChurchIntro";
import CoreValues from "./_components/CoreValues";
import WorshipSchedule from "./_components/WorshipSchedule";

export default function IntroducePage() {
  return (
    <main>
      <HeroBanner />
      <ChurchIntro />
      <CoreValues />
      <WorshipSchedule />
    </main>
  );
}
