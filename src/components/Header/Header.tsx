import type { ReactNode } from "react";
import styles from "./Header.module.scss";
import NavPanel from "../Custom_elements/NavPanel/NavPanel";
import { navLinks } from "@constants/navLinks";

const Header = (): ReactNode => {
  return (
    <header className={styles.header}>
      <a className={styles.logoLink}>
        {/* <img
          width={58}
          height={54}
          src="/green-tree-logo.png"
          alt="Зеленое дерево. Логотип санатория «Зеленый бор»"
        /> */}
        <h1 className={styles.logoText}>Зеленый бор</h1>
      </a>
      <NavPanel navItems={navLinks} />
    </header>
  );
};

export default Header;
