import Hero from "../components/ProfOrientation/Hero"
import Layout from "../components/Layout"
import Statistics from "../components/ProfOrientation/Statistics"
import Organisations from "../components/ProfOrientation/Organisations"
import Reasons from "../components/ProfOrientation/Reasons"
import HowToStudy from "../components/ProfOrientation/HowToStydy"
import Description from "../components/ProfOrientation/Description"

export default function ProfOrientation() {


    return (
        <Layout
            title={"Профориентация | Служба занятости Херсонской области"}
            description={
                "Переробучение на новую профессию в Херсоне и Херсонской области"
            }
        >
            <Hero />
            <section className="container">
                <Statistics />
            </section>
            <section className="w-full px-12 py-8 bg-gray-300 mb-24">
                <div className="sm:flex w-full justify-around text-xl items-center">
                    <span className="block mb-4 sm:mb-0">Ознакомьтесь с Постановлениями Правительства РФ о реализации проекта</span>
                    <a className="block font-bold py-4 px-8 bg-blue-600 text-gray-100" href='http://publication.pravo.gov.ru/Document/View/0001202105280048'>Читать постановление</a>
                </div>
            </section>
            <section className="container">
                <Organisations />
                <Reasons />
                <HowToStudy />
            </section>
        </Layout>
    )
}