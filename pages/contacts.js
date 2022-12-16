import Layout from "../components/Layout";
import Hero from "../components/Hero";

const Contacts = () => {
  return (
    <Layout
      title={"Контакты | Служба занятости Херсонской области"}
      description={
        "контакты службы занятости центра занятости херсонской области, херсона"
      }
    >
      <Hero />
      <section className="w-full shadow-2xl bg-blue-200 dark:bg-blue-700 dark:text-gray-100 px-8 sm:px-16 py-8">
        <div className="w-full">
          <span className="uppercase text-white text-4xl mb-12 block">
            контакты
          </span>
          <span className="block text-xl mb-4 text-bold">
            По всем вопросам касательно тродоустройства обращайтесь по единому
            номеру телефона:
          </span>
          <div>
            <a
              className="block text-lg mb-8 text-bold flex items-center"
              href="tel:+79900606773"
            >
              <span className="material-symbols-outlined mr-4">smartphone</span>
              <span className="underline underline-offset-4">
                +7 990 060 67 73
              </span>
            </a>
          </div>

          <span className="block text-xl my-4 text-bold">
            Так же вы можете связаться с нами по электронной почте:
          </span>
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
          <span className="block text-xl my-4 text-bold">
            Кроме того следите за актуальной информацией и новостями в нашем
            телеграм канале:
          </span>
          <a
            className="block text-lg mb-4 text-bold flex items-center"
            href="https://t.me/Slyzhba_Zanyatosti_Kherson_obl"
          >
            <span className="material-symbols-outlined mr-4">public</span>
            <span className="underline underline-offset-4">Наш канал</span>
          </a>
          <span className="block text-xl mb-8 text-bold">
            В нашем Телеграм-канале действует{" "}
            <a
              className="inline-flex text-bold flex items-center"
              href="https://t.me/CZ_infoBot"
            >
              <span className="underline underline-offset-4">
                чат-боте Телеграм.
              </span>
            </a>{" "}
            Службы занятости Херсонской области, где вы можете задать
            интересующий Вас вопрос
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
