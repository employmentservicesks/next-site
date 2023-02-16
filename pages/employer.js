import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Head from "next/head";

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
        <span className=" block text-4xl my-12">Информация работодателям</span>
        <div className="flex justify-center my-12">
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
        </div>
      </section>
    </Layout>
  );
};

export default Employer;
