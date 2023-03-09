import Hero from "../components/Hero";
import Layout from "../components/Layout";

import { jobs } from "../helpers/jobs";
import AccordionItem from "../components/AccordionItem";

const Jobs = () => {
  const createHeader = (jobsList, first) => {
    const sorted = Object.keys(jobsList).sort();
    let headers;

    if (first) headers = sorted.slice(0, 7);
    else headers = sorted.slice(7, 13);
    const DOMHeaders = [];

    for (const header of headers) {
      DOMHeaders.push(<AccordionItem region={header} />);
    }
    return DOMHeaders;
  };

  return (
    <Layout
      title={"Вакансии | Служба занятости Херсонской области"}
      description={
        "вакансии службы занятости центра занятости херсонской области, херсона, найти работу"
      }
    >
      <Hero />
      <section className="w-full shadow-2xl bg-blue-200 dark:bg-blue-700 dark:text-gray-100 px-8 sm:px-16 py-8 flex-1 text-black dark:text-white">
        <span className=" block text-4xl my-12">
          Вакансии в Херсонской области (обновлено 20.02.2023)
        </span>
        <span className=" block text-2xl my-6">
          На данной странице вы можете ознакомиться с актуальными вакансиями по
          районам Херсонской области. Если вас заинтересовали какие-либо из
          вакансий, Вы можете обратиться по номеру тел.{" "}
          <a
            className="inline-flex flex items-center text-blue-600 dark:text-gray-300"
            href="tel:+79900606773"
          >
            <span className="underline underline-offset-4">
              +7 990 060 67 73
            </span>
          </a>
          , для получения дополнительной информации. Так же вы можете задать
          свои вопросы и получить электонные бланки резюме и заявления в нашем{" "}
          <a
            className="inline-flex text-bold flex items-center text-blue-600 dark:text-gray-300"
            href="https://t.me/CZ_infoBot"
          >
            <span className="underline underline-offset-4">
              чат-боте Телеграм.
            </span>
          </a>
        </span>
        <div className="flex flex-wrap gap-2 justify-center">
          <div className="w-full md:max-w-md lg:max-w-lg 2xl:max-w-3xl">
            {createHeader(jobs, true)}
          </div>
          <div className="w-full md:max-w-md lg:max-w-lg 2xl:max-w-3xl">
            {createHeader(jobs)}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
