import { CogIcon, HouseIcon, SunIcon, TimerResetIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <>
      <nav className={styles.menu}>
        <a className={styles.menuLink} href="#">
          <HouseIcon />
        </a>

        <a className={styles.menuLink} href="#">
          <TimerResetIcon />
        </a>

        <a className={styles.menuLink} href="#">
          <CogIcon />
        </a>

        <a className={styles.menuLink} href="#">
          <SunIcon />
        </a>
      </nav>
    </>
  );
}
