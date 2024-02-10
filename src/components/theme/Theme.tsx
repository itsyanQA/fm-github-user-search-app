import "./Theme.scss";
import { useState, useEffect } from "react";
import SunIcon from "../../assets/icon-sun.svg?react";
import MoonIcon from "../../assets/icon-moon.svg?react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("theme") as Theme;

  if (savedTheme) {
    return savedTheme;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}
export function Theme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const clickHandler = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const handleThemeChange = () => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    handleThemeChange();
  }, [theme]);

  return (
    <div className="theme" onClick={clickHandler}>
      <span className="theme__text">{theme === "light" ? "dark" : "light"}</span>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </div>
  );
}
