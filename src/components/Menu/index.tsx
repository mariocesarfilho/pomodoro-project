import { CogIcon, HouseIcon, SunIcon, TimerResetIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

type ThemePage = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<ThemePage>("dark");

  function handleClickTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }
  return (
    <>
      <nav className={styles.menu}>
        <a className={styles.menuLink} href="#" aria-label="Home" title="Home">
          <HouseIcon />
        </a>

        <a
          className={styles.menuLink}
          href="#"
          aria-label="Histórico"
          title="Histórico"
        >
          <TimerResetIcon />
        </a>

        <a
          className={styles.menuLink}
          href="#"
          aria-label="Configurações"
          title="Configurações"
        >
          <CogIcon />
        </a>

        <a
          className={styles.menuLink}
          href="#"
          aria-label="Tema"
          title="Tema"
          onClick={handleClickTheme}
        >
          <SunIcon />
        </a>
      </nav>
    </>
  );
}
