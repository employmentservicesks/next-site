import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";
import { ThemeContext } from "../pages/_app";

function NavBar() {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [navPosition, setNavPosition] = useState(0);
  const { theme, clickHandler } = useContext(ThemeContext);

  useEffect(() => {
    let prevPos = 0;

    window.addEventListener("scroll", function () {
      if (window.scrollY > prevPos) {
        setNavPosition("-96px");
      } else setNavPosition(0);
      prevPos = this.scrollY;
    });
  }, []);

  const handleShowMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <nav
      className="w-full h-24 sm:px-8 bg-gray-300 dark:bg-gray-700 fixed left-0 duration-300 z-50"
      style={{ top: navPosition }}
    >
      <div className="container mx-auto w-full h-full flex  items-center text-black dark:text-gray-100 text-2xl justify-between px-2">
        <img className="h-12 mr-8 sm:mr-24" src={"/assets/images/logo.png"} />
        <div
          id="themeBtn"
          onClick={() => clickHandler(theme)}
          className="flex justify-center items-center rounded-full w-10 h-10 border-2 border-black dark:border-white cursor-pointer mr-12"
        >
          {theme !== "light" ? (
            <span className="material-symbols-outlined select-none">sunny</span>
          ) : (
            <span className="material-symbols-outlined select-none">
              nightlight
            </span>
          )}
        </div>
        <div className={`${styles.desktop_menu}`}>
          <NavBarItem
            text={"Главная"}
            path="/"
            active={router.pathname === "/"}
          />
          <NavBarItem
            text={"Вакансии"}
            path="/jobs"
            active={router.pathname === "/jobs"}
          />
          <NavBarItem
            text={"Работодателям"}
            path="/employer"
            active={router.pathname === "/employer"}
          />
          <NavBarItem
            text={"Контакты"}
            path="/contacts"
            active={router.pathname === "/contacts"}
          />
        </div>
        <div className={styles.mobile_menu}>
          <span
            onClick={handleShowMenu}
            className={`material-symbols-outlined mr-2 cursor-pointer  `}
          >
            menu
          </span>
        </div>

        {showMobileMenu && (
          <div className="w-screen h-screen fixed bg-black/60 top-0 left-0 flex items-center justify-center">
            <span
              onClick={handleShowMenu}
              className="material-symbols-outlined absolute top-8 right-8 cursor-pointer"
            >
              close
            </span>
            <div className={"flex flex-col items-center"}>
              <NavBarItem
                text={"Главная"}
                path="/"
                active={router.pathname === "/"}
              />
              <NavBarItem
                text={"Вакансии"}
                path="/jobs"
                active={router.pathname === "/jobs"}
              />
              <NavBarItem
                text={"Работодателям"}
                path="/employer"
                active={router.pathname === "/employer"}
              />
              <NavBarItem
                text={"Контакты"}
                path="/contacts"
                active={router.pathname === "/contacts"}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
