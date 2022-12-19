import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBarItem({ text, path, active = false }) {
  return (
    <div
      className={`${
        styles.mobile_menu_item
      } sm:mr-12 underline-offset-8 hover:underline decoration-gray-600 dark:decoration-gray-100 decoration-4 ${
        active ? "underline" : ""
      }`}
    >
      <Link href={path}>{text}</Link>
    </div>
  );
}
