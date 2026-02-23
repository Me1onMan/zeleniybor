import type { ReactNode } from "react";
import styles from "./Header.module.scss";
import NavPanel from "@components/Custom_elements/NavPanel/NavPanel";
import { navLinks } from "@constants/navLinks";
import logo from "@assets/green-tree-logo.png";

const Header = (): ReactNode => {
  return (
    <header className={styles.header}>
      <a className={styles.logoLink}>
        <img src={logo} alt="Зеленое дерево" />
        <h1 className={styles.logoText}>Зеленый бор</h1>
      </a>
      <NavPanel navItems={navLinks} />
    </header>
  );
};

export default Header;
