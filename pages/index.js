import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <Layout
      title={"Главная | Служба занятости Херсонской области"}
      description={
        "службы занятости центра занятости херсонской области, херсона, работа херсон"
      }
    >
      <Hero />
      <section className="w-full shadow-2xl bg-blue-200 dark:bg-blue-700 dark:text-gray-100 px-8 sm:px-16 py-8">
        <span className="block text-xl mb-4 text-bold">
          Для подачи документов в Службу занятости в электронном виде скачайте
          бланки резюме и шаблонов, которые размещены ниже. После этого отправте
          их нам на электронную почту:{" "}
          <a
            className="block text-lg mb-8 text-bold flex items-center"
            href="mailto:sluzhba_z@khogov.ru"
          >
            <span className="material-symbols-outlined mr-4">
              alternate_email
            </span>
            <span className="underline underline-offset-4">
              sluzhba_z@khogov.ru
            </span>
          </a>
        </span>
        <div className="flex flex-wrap justify-around w-full">
          <a
            className="h-12 mb-4 uppercase text-blue-200 font-bold flex items-center border-blue-200 rounded-md hover:bg-blue-200 hover:text-gray-600 justify-center  border border-2 w-48"
            href="/docs/резюме.docx"
            download=""
          >
            <span class="material-symbols-outlined mr-4">description</span>
            резюме
          </a>
          <a
            className="sm:ml-2 h-12 uppercase text-blue-200 font-bold flex items-center border-blue-200 rounded-md hover:bg-blue-200 hover:text-gray-600 justify-center  border border-2 w-48"
            href="/docs/анкета.docx"
            download=""
          >
            <span class="material-symbols-outlined mr-4">description</span>
            анкета
          </a>
        </div>
        <span className="block text-xl mt-6 text-bold">
          Ознакомится со списком актуальных вакансий вы можете на
          соответствующей{" "}
          <Link className="text-xl mb-4 text-bold underline" href={"/jobs"}>
            странице
          </Link>
        </span>
      </section>
    </Layout>
  );
}
