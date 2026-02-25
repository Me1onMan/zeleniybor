import ScheduleSection from "@/components/ScheduleSection/ScheduleSection";
import VouchersSection from "@/components/VouchersSection/VouchersSection";
import WelcomeSlider from "@/components/WelcomeSlider/WelcomeSlider";

function HomePage() {
  return (
    <>
      <WelcomeSlider />
      <ScheduleSection />
      <VouchersSection />
    </>
  );
}

export default HomePage;
