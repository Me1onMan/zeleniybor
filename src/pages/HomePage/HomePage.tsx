import AdvantageSection from "@/components/AdvantageSection/AdvantageSection";
import ScheduleSection from "@/components/ScheduleSection/ScheduleSection";
import VouchersSection from "@/components/VouchersSection/VouchersSection";
import WelcomeSlider from "@/components/WelcomeSlider/WelcomeSlider";

function HomePage() {
  return (
    <>
      <WelcomeSlider />
      <ScheduleSection />
      <VouchersSection />
      <AdvantageSection />
    </>
  );
}

export default HomePage;
