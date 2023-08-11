import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBarItem({ text, path, active = false }) {
  return (
    <div
      className={`${styles.mobile_menu_item
        } underline-offset-8 hover:underline dark:decoration-gray-100 decoration-4 text-sm md:text-xl ${active ? "underline" : ""
        }`}
    >
      <Link href={path}>{text}</Link>
    </div>
  );
}
