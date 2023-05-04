import Hero from "../components/Hero";
import Layout from "../components/Layout";

import { jobs } from "../helpers/jobs";
import AccordionItem from "../components/AccordionItem";
import LineHR from "../components/LineHR";
import TitlePageSecondary from "../components/TypographyElements/TitlePageSecondary";

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
        <TitlePageSecondary text="Высокооплачиваемая работа для настоящих мужчин в сфере охраны" />
        <div className="w-full">
          <div className="w-full md:flex">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="w-2/3"
                src="/assets/images/job1.png"
                alt="работа охрана херсонская область"
              />
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4">
              <span className="block font-bold text-2xl">Обязанности:</span>

              <span className="block text-2xl mt-8">
                - охрана и защита гражданских объектов на территории одного из
                субъектов РФ;{" "}
              </span>
              <span className="block text-2xl">
                - поддержание работоспособности систем транспорта, связи и
                коммуникаций;
              </span>
              <span className="block text-2xl">- охрана правопорядка.</span>
            </div>
          </div>
          <div className="w-full md:flex mt-8">
            <div className="w-full md:w-1/2">
              <span className="block font-bold text-2xl">Условия:</span>

              <span className="block text-2xl mt-8">
                - заработная плата 205 000 рублей + премии и всевозможные
                доплаты;{" "}
              </span>
              <span className="block text-2xl">
                - официальное трудоустройство и трудовой стаж;
              </span>
              <span className="block text-2xl">
                - страхование здоровья и жизни, гарантия всех выплат;
              </span>
              <span className="block text-2xl">
                - предоставляется современная спецодежда и снаряжение.{" "}
              </span>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <span className="block font-bold text-2xl">Требования:</span>

              <span className="block text-2xl mt-8">- возраст до 50 лет; </span>
              <span className="block text-2xl">
                - хорошая физическая форма и отсутствие вредных привычек;
              </span>
              <span className="block text-2xl">- служба в армии;</span>
              <span className="block text-2xl">
                - опыт работы: от 1 года до 3 лет ;
              </span>
              <span className="block text-2xl">
                - возраст от 21 до 50 лет.{" "}
              </span>
            </div>
          </div>

          <div className="w-full flex mt-8">
            <div>
              <span className="block text-2xl">
                Контактные данные: <br />
                номер телефона + 7990-132-11-97
              </span>
              <span className="block text-2xl">
                электронная почта margelova-00@mail.ru
              </span>
            </div>
          </div>
        </div>
        <LineHR />
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
