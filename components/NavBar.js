import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";

function NavBar() {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <nav className="w-full h-24 sm:px-8 bg-gray-300 dark:bg-gray-700">
      <div className="container mx-auto w-full h-full flex  items-center text-gray-600 dark:text-gray-100 text-2xl justify-between px-2">
        <img className="h-12 mr-8 sm:mr-24" src={"/assets/images/logo.png"} />
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
            text={"Контакты"}
            path="/contacts"
            active={router.pathname === "/contacts"}
          />
        </div>
        <span
          onClick={handleShowMenu}
          className={`${styles.mobile_menu} material-symbols-outlined mr-2 cursor-pointer`}
        >
          menu
        </span>
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
