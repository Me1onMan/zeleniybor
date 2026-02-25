import styles from "./ScheduleSection.module.scss";

function ScheduleSection() {
  return (
    <section className={styles.section}>
      <a href="/src/assets/Pool_schedule/price2026_11.pdf" target="_blank">
        Расписание бассейна и сауны ДД.ММ.ГГГГ – ДД.ММ.ГГГГ
      </a>
    </section>
  );
}

export default ScheduleSection;
