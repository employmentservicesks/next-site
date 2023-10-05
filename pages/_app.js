import { createContext, useEffect, useRef, useState } from "react";
export const ThemeContext = createContext();
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  const [siteTheme, setSiteTheme] = useState();
  let html = useRef(null);

  const changeTheme = (value) => {
    setSiteTheme(value);
    localStorage.setItem("theme", value);
    html.current.className = value;
  }

  const handleTheme = (value) => {
    if (value == "light") {
      changeTheme('dark')
    } else {
      changeTheme('dark')
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
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
