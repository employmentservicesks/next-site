export default function Reasons() {


    return (
        <section className="w-full mb-24">
            <span className="font-bold text-3xl mb-14 block">6 причин принять участие</span>
            <div className="w-full flex flex-col md:flex-row gap-14 md:gap-24 flex-wrap mx-auto justify-center">
                <div className="p-8 rounded-xl bg-gray-300 md:max-w-xs h-42 items-center relative">
                    <img width={50} className="absolute -top-6 left-8" src='assets/images/prof/Group_110.svg' />
                    <span className="block mt-2 font-bold">Получите новую профессию</span>
                    <span className="mt-2 block">Или повысьте квалификацию вашей профессии</span>
                </div>
                <div className="p-8 rounded-xl bg-gray-300 md:max-w-xs h-42 items-center relative">
                    <img width={50} className="absolute -top-6 left-8" src='assets/images/prof/Group_111.svg' />
                    <span className="block mt-2 font-bold">Востребованные специальности</span>
                    <span className="mt-2 block">Обучение по самым актуальным профессиям на рынке труда</span>
                </div>
                <div className="p-8 rounded-xl bg-gray-300 md:max-w-xs h-42 items-center relative">
                    <img width={50} className="absolute -top-6 left-8" src='assets/images/prof/Group_112.svg' />
                    <span className="block mt-2 font-bold">Удобный онлайн-формат</span>
                    <span className="mt-2 block">Для большинства программ обучения нужен лишь доступ в Интернет</span>
                </div>
                <div className="p-8 rounded-xl bg-gray-300 md:max-w-xs h-42 items-center relative">
                    <img width={50} className="absolute -top-6 left-8" src='assets/images/prof/Group_113.svg' />
                    <span className="block mt-2 font-bold">Качественное обучение</span>
                    <span className="mt-2 block">Лекции и семинары проводят преподаватели ведущих вузов и образовательных организаций России</span>
                </div>
                <div className="p-8 rounded-xl bg-gray-300 md:max-w-xs h-42 items-center relative">
                    <img width={50} className="absolute -top-6 left-8" src='assets/images/prof/Group_114.svg' />
                    <span className="block mt-2 font-bold">Документ об образовании</span>
                    <span className="mt-2 block">После обучения вы получите удостоверение или диплом установленного образца</span>
                </div>
                <div className="p-8 rounded-xl bg-gray-300 md:max-w-xs h-42 items-center relative">
                    <img width={50} className="absolute -top-6 left-8" src='assets/images/prof/Group_115.svg' />
                    <span className="block mt-2 font-bold">Помощь с трудоустройством</span>
                    <span className="mt-2 block">Карьерная консультация, помощь с оформлением резюме и его передача компаниям-партнерам проекта</span>
                </div>
            </div>
        </section>
    )
}