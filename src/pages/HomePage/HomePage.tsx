import AboutSection from "./Content/AboutSection/AboutSection";
import AdvantageSection from "./Content/AdvantageSection/AdvantageSection";
import ScheduleSection from "./Content/ScheduleSection/ScheduleSection";
import VouchersSection from "./Content/VouchersSection/VouchersSection";
import WelcomeSlider from "./Content/WelcomeSlider/WelcomeSlider";

function HomePage() {
  return (
    <>
      <WelcomeSlider />
      <ScheduleSection />
      <VouchersSection />
      <AdvantageSection />
      <AboutSection />
    </>
  );
}

export default HomePage;
