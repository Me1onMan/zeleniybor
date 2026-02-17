import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.sectionContacts}>
        <h2 className={styles.headerContacts}>Контакты и основные ссылки</h2>
      </section>
      <section className={styles.sectionCopyright}>
        <h2 className={styles.headerCopyrights}>Copyrights</h2>
        <a className={styles.link} href="https://zeleniybor.by/site-map">
          Карта сайта
        </a>
        <p className={styles.text}>Какие-то права защищены © 2026</p>
        <a className={styles.link} href="https://github.com/me1onman">
          me1onman
        </a>
      </section>
    </footer>
  );
}

export default Footer;
