import styles from "./NavPanel.module.scss";
import Dropdown from "../Dropdown/Dropdown";

import type { ReactNode } from "react";
import type { IProps } from "./interfaces";

const NavPanel = ({ navItems }: IProps): ReactNode => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Dropdown navItem={navItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPanel;
