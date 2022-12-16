import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  const checkLocation = (location, path) =>
    path === location ? "underline" : "";

  return (
    <nav className="w-full h-24 sm:px-8 bg-gray-300 dark:bg-gray-700">
      <div className="container mx-auto w-full h-full flex  items-center text-gray-600 dark:text-gray-100 sm:text-2xl ">
        <img className="h-12 mr-8 sm:mr-24" src={"/assets/images/logo.png"} />
        <div
          className={`mr-12 underline-offset-8 hover:underline decoration-gray-600 dark:decoration-gray-100 decoration-4 ${checkLocation(
            router.pathname,
            "/"
          )}`}
        >
          <Link href="/">Главная</Link>
        </div>
        <div
          className={`mr-12 underline-offset-8 hover:underline decoration-gray-600 dark:decoration-gray-100 decoration-4 ${checkLocation(
            router.pathname,
            "/jobs"
          )}`}
        >
          <Link href="/jobs">Вакансии</Link>
        </div>
        <div
          className={`mr-12 underline-offset-8 hover:underline decoration-gray-600 dark:decoration-gray-100 decoration-4 ${checkLocation(
            router.pathname,
            "/contacts"
          )}`}
        >
          <Link href="/contacts">Контакты</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
