import { Theme } from "../theme/Theme";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">devfinder</h1>
      <Theme />
    </header>
  );
}
