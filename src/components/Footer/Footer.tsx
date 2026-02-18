import { navLinksFooter } from "@/constants/navLinksFooter";
import styles from "./Footer.module.scss";
import type { INavLink } from "@/constants/navLinks";

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.sectionContacts}>
        <h2 className={styles.headerContacts}>Контакты и основные ссылки</h2>

        <address className={styles.phoneContainer}>
          <h3>Телефон</h3>
          <a href="tel:+375 44 711-89-56">+375 44 711-89-56</a>
          <button>Заказать звонок</button>
        </address>

        <nav>
          <ul>
            {navLinksFooter.map(({ title, link }: INavLink) => (
              <li>
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <address className={styles.addressContainer}>
          <h3>Адрес</h3>
          Республика Беларусь,
          <br />
          Минская область, Минский р-н., Ждановичский с/с, 69,
          <br />
          район д. Воловщина
        </address>
      </section>

      <section className={styles.sectionCopyright}>
        <h2 className={styles.headerCopyrights}>Copyrights</h2>
        <a href="https://zeleniybor.by/site-map">Карта сайта</a>
        <p>Какие-то права защищены © 2026</p>
        <a href="https://github.com/me1onman">me1onman</a>
      </section>
    </footer>
  );
}

export default Footer;
