import { CogIcon, HouseIcon, SunIcon, TimerResetIcon } from "lucide-react";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Menu />
    </>
  );
}

export default App;
