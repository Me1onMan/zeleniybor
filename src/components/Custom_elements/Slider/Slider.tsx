import { useCallback, useEffect, useState } from "react";
import type { IProps } from "./interfaces";
import styles from "./Slider.module.scss";

const slideModules = import.meta.glob(
  "/src/assets/WelcomeSliderImages/slide-*.jpg",
  {
    eager: true,
    import: "default",
  },
);
const images = Object.values(slideModules) as string[];

function Slider({
  width,
  height,
  isAutoplay = true,
  autoplayTime = 5000,
}: IProps) {
  const [slideNumber, setSlideNumber] = useState(0);

  const setNextSlide = useCallback(
    (direction = 1) => {
      const nextSlideNumber = slideNumber + direction;
      if (nextSlideNumber > images.length - 1 || nextSlideNumber < 0)
        setSlideNumber(0);
      else setSlideNumber(nextSlideNumber);
    },
    [slideNumber],
  );

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setNextSlide();
    }, autoplayTime);

    return () => clearInterval(interval);
  }, [isAutoplay, autoplayTime, slideNumber, setNextSlide]);

  return (
    <div className={styles.sliderContainer}>
      <div>
        {images.map((image, i) => (
          <img
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
            src={image}
            alt={`изображение-${i}`}
            key={image}
            onClick={() => setNextSlide()}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
