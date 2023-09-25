export default function Reasons() {

    return (
        <section className="w-full mb-24">
            <span className="font-bold text-3xl mb-14 block">6 причин принять участие</span>
            <div className="w-full flex flex-col md:flex-row gap-14 md:gap-24 flex-wrap mx-auto justify-center">
                <ReasonItem imgSrc={'assets/images/prof/Group_110.svg'} header={'Получите новую профессию'} text={'Или повысьте квалификацию вашей профессии'} />
                <ReasonItem imgSrc={'assets/images/prof/Group_111.svg'} header={'Востребованные специальности'} text={'Обучение по самым актуальным профессиям на рынке труда'} />
                <ReasonItem imgSrc={'assets/images/prof/Group_112.svg'} header={'Удобный онлайн-формат'} text={'Для большинства программ обучения нужен лишь доступ в Интернет'} />
                <ReasonItem imgSrc={'assets/images/prof/Group_113.svg'} header={'Качественное обучение'} text={'Лекции и семинары проводят преподаватели ведущих вузов и образовательных организаций России'} />
                <ReasonItem imgSrc={'assets/images/prof/Group_114.svg'} header={'Документ об образовании'} text={'После обучения вы получите удостоверение или диплом установленного образца'} />
                <ReasonItem imgSrc={'assets/images/prof/Group_115.svg'} header={'Помощь с трудоустройством'} text={'Карьерная консультация, помощь с оформлением резюме и его передача компаниям-партнерам проекта'} />
            </div>
        </section>
    )
}