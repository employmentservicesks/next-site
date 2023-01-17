import { createContext, useEffect, useRef, useState } from "react";
export const ThemeContext = createContext();
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [siteTheme, setSiteTheme] = useState();
  let html = useRef(null);

  const handleTheme = (value) => {
    if (value == "light") {
      setSiteTheme("dark");
      localStorage.setItem("theme", "dark");
      html.current.className = "dark";
    } else {
      localStorage.setItem("theme", "light");
      setSiteTheme("light");
      html.current.className = "light";
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setSiteTheme(theme);
    html.current = document.getElementById("html");
    html.current.className = theme;
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme: siteTheme, clickHandler: handleTheme }}
    >
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
