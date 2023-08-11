import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Head from "next/head";
import TitlePageSecondary from '../components/TypographyElements/TitlePageSecondary'
import LineHR from '../components/LineHR'

const Employer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout
      title={"Вакансии | Служба занятости Херсонской области"}
      description={
        "вакансии службы занятости центра занятости херсонской области, херсона, найти работу"
      }
    >
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Hero />
      <section className="w-full shadow-2xl bg-blue-200 dark:bg-blue-700 dark:text-gray-100 px-8 sm:px-16 py-8 flex-1 text-black dark:text-white">
        <div className='container mx-auto'><TitlePageSecondary text='Важная информация' /></div>
        <div className="flex items-center my-12 flex-col">
          <Slider {...settings} className="w-full lg:w-3/4">
            <img
              alt="employer"
              src="/assets/images/employer_info0.jpg"
              loading="lazy"
            />
            <img
              alt="employer"
              src="/assets/images/employer_info1.jpg"
              loading="lazy"
            />
            <img
              alt="employer"
              src="/assets/images/employer_info2.jpg"
              loading="lazy"
            />
            <img
              alt="employer"
              src="/assets/images/employer_info3.jpg"
              loading="lazy"
            />
            <img
              alt="employer"
              src="/assets/images/employer_info4.jpg"
              loading="lazy"
            />
            <img
              alt="employer"
              src="/assets/images/employer_info5.jpg"
              loading="lazy"
            />
            <img
              alt="employer"
              src="/assets/images/employer_info6.jpg"
              loading="lazy"
            />
            <img
              alt="employer"
              src="/assets/images/employer_info7.jpg"
              loading="lazy"
            />
          </Slider>

          <div className="container mt-24 text-xl">
            <LineHR />
            <TitlePageSecondary text="Сообщение Роскомнадзора об обработке персональных данных" />
            С 1 сентября 2022 года вступили в силу изменения в Федеральный закон от 27 июля 2006 г. № 152 - ФЗ «О персональных данных». Операторы должны уведомлять Роскомнадзор о начале или осуществлении любой обработки персональных данных за исключением случаев, предусмотренных ч. 2. ст. 22 Федерального закона от 27 июля 2006 г. № 152 - ФЗ «О персональных данных», когда данные обрабатываются в целях защиты безопасности государства и общественного порядка, транспортной безопасности, или если оператор обрабатывает данные исключительно без средств автоматизации.
            Формы уведомлений утверждены приказом Роскомнадзора от 28.10.2022 № 180 «Об утверждении форм уведомлений о намерении осуществлять обработку персональных данных, об изменении сведений, содержащихся в уведомлении о намерении осуществлять обработку персональных данных, о прекращении обработки персональных данных».
            В связи с вступлением в силу приказа Роскомнадзора, устанавливающего новую форму уведомления, операторам, уже состоящим в реестре, необходимо направить уведомление о внесении изменений в ранее представленные сведения в реестр операторов, осуществляющих обработку персональных данных, по актуальной утвержденной форме.
            С 1 марта 2023 года вступил в силу новый порядок информирования Роскомнадзора о трансграничной передаче персональных данных. Роскомнадзор рассматривает уведомления операторов и по итогам рассмотрения ведомство вправе принимать решение о запрете или ограничении передачи персональных данных в другие страны. До истечения 10 рабочих дней после подачи такого уведомления запрещено будет передавать данные в страны, не обеспечивающие адекватный уровень защиты прав субъектов персональных данных.
            Операторам, подавшим уведомление о трансграничной передаче до 1 марта, не надо будет подавать новое уведомление после этой даты, до тех пор, пока в их деятельности не произойдут изменения, которые предполагают создание новых трансграничных потоков данных (в новые страны или для новых целей).
            С информацией, касающейся обработки персональных данных, можно ознакомиться на Портале персональных данных Федеральной службы надзора в сфере связи, информационных технологий и массовых коммуникаций <a className="underline" href='https://pd.rkn.gov.ru'>(https://pd.rkn.gov.ru)</a>.

            <div>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Employer;
