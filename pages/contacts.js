import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ContactField from "../components/Contacts/ContactField";
import TitlePageMain from '../components/TypographyElements/TitlePageMain'

const Contacts = () => {
  return (
    <Layout
      title={"Контакты | Служба занятости Херсонской области"}
      description={
        "контакты службы занятости центра занятости херсонской области, херсона"
      }
    >
      <Hero />
      <section className="w-full shadow-2xl bg-blue-200 dark:bg-blue-700 text-black dark:text-gray-100 px-8 sm:px-16 py-8 flex justify-center">
        <div className="container">
          <div className="w-full">
            <TitlePageMain text={'Контакты'} />
            <ContactField text={'По всем вопросам касательно тродоустройства обращайтесь по единому номеру телефона:'} linkHref={'tel:+79900606773'} icon={'smartphone'} linkLabel={'+7 990 060 67 73'} />
            <ContactField text={'Так же вы можете связаться с нами по электронной почте:'} linkHref={'mailto:sluzhba_z@khogov.ru'} icon={'alternate_email'} linkLabel={'sluzhba_z@khogov.ru'} />
            <ContactField text={'Кроме того следите за актуальной информацией и новостями в нашем телеграм канале:'} linkHref={'https://t.me/Slyzhba_Zanyatosti_Kherson_obl'} icon={'public'} linkLabel={'Наш канал'} />
            <ContactField text={'В нашем Телеграм-канале действует чат-поддержки Службы занятости Херсонской области, где вы можете задать интересующий Вас вопрос'} linkHref={'https://t.me/CZ_infoBot'} icon={'sms'} linkLabel={'Написать в поддержку'} />
            <ContactField text={'Присоединяйтесь к нашей официальной группе'} linkHref={'https://vk.com/slyzhba_zanyatosti_ks'} icon={'groups'} linkLabel={'Вконтакте'} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
