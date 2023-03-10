import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Link from "next/link";
import LineHR from "../components/LineHR";
import TitlePageMain from "../components/TypographyElements/TitlePageMain";
import TitlePageSecondary from "../components/TypographyElements/TitlePageSecondary";

export default function Home() {
  return (
    <Layout
      title={"Главная | Служба занятости Херсонской области"}
      description={
        "службы занятости херсонской области, херсона, работа херсон"
      }
    >
      <Hero />
      <div className="w-full shadow-2xl bg-blue-200 dark:bg-blue-700 text-black dark:text-gray-100 px-8 sm:px-16 py-8 flex justify-center">
        <div className="container">
          <TitlePageMain text={"главная"} />
          <LineHR />
          <TitlePageSecondary text="Информация для руководителей и бухгалтеров хозяйствующих субъектов!" />
          <span className="text-xl md:text-2xl mb-12 block text-justify">
            В 2023 году Территориальный орган Федеральной службы государственной
            статистики по Херсонской области осуществляется сбор статистической
            отчетности по месячным и квартальным формам федерального
            статистического наблюдения начиная с отчетов за январь и 1 квартал.
            Узнать персональный перечень форм для предоставления в органы
            статистики можно по адресу https://websbor.gks.ru/online/info или на
            портале Росстата https://rosstat.gov.ru/ вкладка Респондентам_
            Индивидуальный перечень форм по ИНН_ Внести ИНН_ Получить, а так же
            через уведомления в Telegram-канале ВГА. Бланки форм размещены на
            портале Росстата https://rosstat.gov.ru/ вкладка Респондентам_ Формы
            федерального статистического наблюдения и формы бухгалтерской
            (финансовой) отчетности_ Альбом форм федерального статистического
            наблюдения_ поиск по индексу формы_ документы в формах DOC и XML.
            Способы предоставления статистической отчетности: - на бумажном
            носителе - через спецоператора связи - по системе web-сбора с сайта
            Росстата one-line - допускается представление отчетных данных по
            телефону с дальнейшим подтверждением, представление электронных
            образов отчетов по почте или мессенджеру.
          </span>
          <span className="text-xl md:text-2xl font-bold mb-12 block">
            {" "}
            +7(990) 125 25 00
          </span>
          <span className="text-xl md:text-2xl font-bold mb-12 block">
            p84_stat@gks.ru{" "}
          </span>
          <span className="text-xl md:text-2xl font-bold mb-12 block">
            https://t.me/khstat
          </span>
          <LineHR />
          <TitlePageSecondary
            text="Узнайте подробнее о процессе подбора подходящей работы при оффлайн
            обращении в Службу занятости, посмотрев видео ниже."
          />
          <div className="flex w-full justify-center my-12">
            <video
              className="w-full md:w-2/3 xl:w-1/2 drop-shadow-2xl"
              src="/assets/videos/main_video.MP4"
              controls
              width={"100%"}
            />
          </div>
          <LineHR />
          <TitlePageSecondary text="Этапы дистанционного обращения" />
          <div className="flex flex-wrap mt-8">
            <div className="flex flex-col items-center w-full md:w-1/2 xl:w-1/4 p-4 text-center">
              <img
                alt=""
                width={"100%"}
                src={"/assets/images/checking_jobs.PNG"}
                className="mb-4"
              />
              <span className="text-lg">Заполните и вышлите онлайн резюме</span>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/2 xl:w-1/4 p-4 text-center">
              <img
                alt=""
                width={"100%"}
                src={"/assets/images/serach_jobs.PNG"}
                className="mb-4"
              />
              <span className="text-lg">
                Наши специалисты подберут для вас вакансии
              </span>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/2 xl:w-1/4 p-4 text-center">
              <img
                alt=""
                width={"100%"}
                src={"/assets/images/online-interview.PNG"}
                className="mb-4"
              />
              <span className="text-lg">
                Пройдите онлайн собеседование с работодателем
              </span>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/2 xl:w-1/4 p-4 text-center">
              <img
                alt=""
                width={"100%"}
                src={"/assets/images/employing.PNG"}
                className="mb-4"
              />
              <span className="text-lg">
                Получите предложение о трудоустройстве
              </span>
            </div>
          </div>
          <LineHR />
          <TitlePageSecondary text="Советы по написанию резюме" />
          <ul className="list-disc pl-8 pt-8">
            <li className="my-2">
              Начните с описания себя, состоящего из пары предложений, где
              отражена ключевая информация, навыки и компетенции,
              характеризующие вас как профессионала и/или эксперта. Прикрипите
              свое фото.
            </li>
            <li className="my-2">
              Укажите уровень Вашего образования и законченые учебные заведения,
              курсы, имеющиеся дипломы и сертификаты.
            </li>
            <li className="my-2">
              Распишите Ваши предыдущие места работы с указанием периодов работы
              и занимаемых должностей
            </li>
            <li className="my-2">
              Расписшите ваши задачи и обязанности, распределите их в порядке
              убывания от супер важных к менее важным на каждом месте работы.
            </li>
            <li className="my-2">
              Обязательно указывайте ваши успехи (достижения) для каждого места
              работы. Они должны отражать ваш профессионализм и соответствовать
              должности.
            </li>
            <li className="my-2">Расскажите о Ваших ключевых навыках</li>
            <li className="my-2">
              Укажите желаемую должность и заработную плату.
            </li>
            <li className="my-2">
              Не забудьте указать всю контактную информацию чтобы с Вами можно
              было связаться.
            </li>
          </ul>
          <LineHR />
          <span className="block text-xl mb-4 text-bold">
            Для подачи документов в Службу занятости в электронном виде скачайте
            бланки резюме и заявления, которые размещены ниже. После этого
            отправьте заполненные документы на электронную почту Службы
            занятости Херсонской области:{" "}
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
              className="h-12 mb-4 uppercase dark:text-blue-200 font-bold flex items-center border-black dark:border-blue-200 rounded-md hover:bg-blue-200 hover:text-gray-600 dark:hover:text-black justify-center  border border-2 w-48"
              href="/docs/резюме.docx"
              download=""
            >
              <span className="material-symbols-outlined mr-4">
                description
              </span>
              резюме
            </a>
            <a
              className="sm:ml-2 h-12 uppercase dark:text-blue-200 font-bold flex items-center border-black dark:border-blue-200 rounded-md hover:bg-blue-200 hover:text-gray-600 dark:hover:text-black justify-center  border border-2 w-48"
              href="/docs/анкета.docx"
              download=""
            >
              <span className="material-symbols-outlined mr-4">
                description
              </span>
              заявление
            </a>
          </div>
          <span className="block text-xl mt-6 text-bold">
            Ознакомится со списком актуальных вакансий вы можете на
            соответствующей{" "}
            <Link className="text-xl mb-4 text-bold underline" href={"/jobs"}>
              странице
            </Link>
          </span>
        </div>
      </div>
    </Layout>
  );
}
