import Hero from "../components/Hero";
import Layout from "../components/Layout";

import { jobs } from "../helpers/jobs";
import { otherJobs } from "../helpers/otherJobs";
import Accordion from "../components/ProfOrientation/Accordion/Accordion";
import LineHR from "../components/LineHR";
import TitlePageSecondary from "../components/TypographyElements/TitlePageSecondary";

const createHeader = (jobsList, collection) => {
  const sorted = Object.keys(jobsList).sort();

  const DOMHeaders = [];
  for (const header of sorted) {
    DOMHeaders.push(<Accordion region={header} collection={collection} />);
  }
  return DOMHeaders;
};

const Jobs = () => {

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
          Вакансии в Херсонской области (обновлено{" "}
          {new Date().toLocaleString([], {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
          )
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
        <LineHR />
        <div className="grid md:grid-cols-2 gap-x-24">
          {createHeader(jobs, true)}
        </div>
        <TitlePageSecondary text='Другие регионы Российской Федерации' />
        <div className="grid md:grid-cols-2 gap-x-24">
          {createHeader(otherJobs)}
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
