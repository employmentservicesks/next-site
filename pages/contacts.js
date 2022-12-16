import Layout from "../components/Layout";

const Contacts = () => {
  return (
    <Layout>
      <Hero />
      <section className="w-full shadow-2xl bg-blue-200 dark:bg-blue-700 dark:text-gray-100 px-16 py-8">
        <div className="container mx-auto">
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
            В нашем Телеграм-канале действует чат-бот Службы занятости
            Херсонской области, где вы можете задать интересующий Вас вопрос
          </span>
          <span className="block text-xl mb-4 text-bold">Наш адрес:</span>
          <span className="block text-lg my-4 text-bold">
            Херсонская обл, г. Скадовск, ул. Александровская, д. 32.
          </span>
          <iframe
            className="w-full h-96 my-12 shadow-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.7238344342907!2d32.90734642591307!3d46.115077883272406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c16a36c5c324d5%3A0xf337f311a629817e!2z0KHQutCw0LTQvtCy0YHQutC40Lkg0YDQsNC50L7QvdC90YvQuSDRhtC10L3RgtGAINC30LDQvdGP0YLQvtGB0YLQuA!5e0!3m2!1sru!2sua!4v1670570454905!5m2!1sru!2sua"
            width={"100%"}
            loading="lazy"
          />
          <hr className="border-2 my-16" />
          <span className="uppercase text-white text-4xl mb-12 block">
            адреса районных управлений
          </span>
          <div className="w-full lg:flex h-96">
            <div className="w-full lg:w-1/2 h-full">
              <span className="block text-xl mb-4 text-bold">
                Чаплынское управление Службы занятости
              </span>
              <span className="block text-lg my-4 text-bold">
                смт. Чаплынка, ул. Грушевского, 38
              </span>
            </div>
            <div className="w-full lg:w-1/2 h-full">
              <iframe
                className="w-full h-full shadow-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.0620812295388!2d33.53759461558807!3d46.368156279122104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c3cf2a46655e5d%3A0x734446b6075be941!2z0KfQsNC_0LvQuNC90YHRjNC60LjQuSDRgNCw0LnQvtC90L3QuNC5INGG0LXQvdGC0YAg0LfQsNC50L3Rj9GC0L7RgdGC0ZY!5e0!3m2!1sru!2sua!4v1670585553981!5m2!1sru!2sua"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <hr className="border-2 my-16" />
          <div className="w-full lg:flex h-96">
            <div className="w-full lg:w-1/2 h-full">
              <span className="block text-xl mb-4 text-bold">
                Новотроицкое управление Службы занятости
              </span>
              <span className="block text-lg my-4 text-bold">
                г. Новотроицк, ул. Соборная 61
              </span>
            </div>
            <div className="w-full lg:w-1/2 h-full">
              <iframe
                className="w-full h-full shadow-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.6583228331887!2d34.333512700506446!3d46.35110016179353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c2421eb3fa0867%3A0x41360b5c62ca7df!2z0LLRg9C70LjRhtGPINCh0L7QsdC-0YDQvdCwLCA2MSwg0J3QvtCy0L7RgtGA0L7Rl9GG0YzQutC1LCDQpdC10YDRgdC-0L3RgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzUzMDA!5e0!3m2!1sru!2sua!4v1670586057044!5m2!1sru!2sua"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
