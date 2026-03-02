import AboutSection from "./Content/AboutSection/AboutSection";
import AdvantageSection from "./Content/AdvantageSection/AdvantageSection";
import RequestSection from "./Content/RequestSection/RequestSection";
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
      <RequestSection />
    </>
  );
}

export default HomePage;
