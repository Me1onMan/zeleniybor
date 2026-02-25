import image1 from "@assets/WelcomeSliderImages/slide-1.jpg";
import styles from "./WelcomeSlider.module.scss";
import Slider from "../../../../components/Custom_elements/Slider/Slider";

function WelcomeSlider() {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>
        ЗЕЛЕНЫЙ БОР
        <br />
        санитарно-оздоровительный комплекс
      </h2>
      {/* <img src={image1} alt="Номер под крышей" className={styles.img} /> */}
      <Slider width="%" height="%" isAutoplay={true} autoplayTime={5000} />
    </section>
  );
}

export default WelcomeSlider;
