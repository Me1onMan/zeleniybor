import styles from "./AboutSection.module.scss";
import imageAbout from "@assets/img-about-section.png";

function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <img src={imageAbout} alt="Пленочная фотография номера под крышей" />
        <div className={styles.description}>
          <h3>
            О санатории <span>«Зеленый бор»</span>
          </h3>
          <p>
            Санаторий «Зеленый бор» основан в 1968 году, имеет богатую историю и
            традиции. Площадь территории составляет 7,8 га.
            <br />
            Санаторий состоит из благоустроенных корпусов, спортивного зала и
            открытой спортивной площадки, а также столовой. <br />
            Санаторий расположен недалеко от города Минска, в живописном лесном
            массиве смешанного типа.
            <br />
            Санаторий оснащен современным оборудованием для диагностики и
            лечения различных недугов.Территория охраняемая, ограждена по
            периметру.
          </p>
          <a href="/about">Подробнее</a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
