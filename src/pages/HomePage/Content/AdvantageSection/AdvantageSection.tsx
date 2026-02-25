import styles from "./AdvantageSection.module.scss";
import establishedImg from "@assets/Advantages/established.png";
import forestImg from "@assets/Advantages/forest.png";
import swimmingImg from "@assets/Advantages/swimming.png";

function AdvantageSection() {
  return (
    <section className={styles.section}>
      <h3>Преимущества нашего санатория</h3>
      <ul>
        <li>
          <img src={establishedImg} alt="Лес, палатка, ночь" />
          <p>Основан в 1968 году</p>
        </li>
        <li>
          <img src={forestImg} alt="Деревья" />
          <p>Хвойно-лиственный лес</p>
        </li>
        <li>
          <img src={swimmingImg} alt="Пловец в воде" />
          <p>Специальные программы</p>
        </li>
      </ul>
    </section>
  );
}

export default AdvantageSection;
