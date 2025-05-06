import Navigation from "../_components/Navigation";
import Logo from "../_components/Logo";
import { ColorSchemeScript } from "@mantine/core";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl max-auto">
        <Logo />
        <Navigation />
        <ColorSchemeScript />
      </div>
    </header>
  );
}

export default Header;
