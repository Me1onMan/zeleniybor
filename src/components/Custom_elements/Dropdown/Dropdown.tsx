import type { ReactNode } from "react";
import styles from "./Dropdown.module.scss";
import type { IProps } from "./interfaces";
import type { INavLink } from "@constants/navLinks";

const Dropdown = ({ navItem }: IProps): ReactNode => {
  return (
    <div className={styles.dropdownContainer}>
      <button className={`${styles.trigger} ${styles.navLink}`}>
        {navItem.title}
      </button>
      {navItem.additionalLinks && (
        <ul className={styles.list}>
          {navItem.additionalLinks.map((link: INavLink) => (
            <li key={link.title}>
              <a className={styles.navLink} href={link.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
