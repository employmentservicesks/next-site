import StatisticsItem from './StatisticsItem'

export default function Statistics() {


    return (
        <div className="my-24" id="register">
            <span className="block w-ful md:w-1/2 text-2xl font-bold">Участвуйте в федеральном проекте</span>
            <div className="md:flex w-full mt-8">
                <div className="w-full md:w-1/2">
                    <span className="text-2xl mb-2 block">Кто может участвовать в проекте?</span>
                    <ol>
                        <li>◾️ Люди предпенсионного возраста, а также лица старше 50 лет</li>
                        <li>◾️ Мамы, находящиеся в отпуске по уходу за ребенком до 3 лет</li>
                        <li>◾️ Безработные женщины, имеющие детей до 7 лет включительно</li>
                        <li>◾️ Некоторые категории граждан до 35 лет</li>
                    </ol>
                </div>
                <span className="block w-full md:w-1/2 text-xl mt-8 md:mt-0">«Содействие занятости» — это государственный проект, цель которого помочь гражданам повысить квалификацию и востребованность на рынке труда, сменить профессию или открыть свое дело в качестве ИП или самозанятого.</span>
            </div>
            <div className="flex flex-wrap w-full mt-16 justify-center lg:justify-between">
                <StatisticsItem text={'Обучение на базе Национального исследовательского Томского государственного университета, федерального оператора проекта'} />
                <StatisticsItem text={'Обучение на базе Национального исследовательского Томского государственного университета, федерального оператора проекта'} />
                <StatisticsItem text={'Обучение на базе Национального исследовательского Томского государственного университета, федерального оператора проекта'} />
            </div>
            <div className="pt-12"><a href="https://trudvsem.ru/educational-programs?page=0&titleType=COURSE_NAME" className="text-2xl py-2 px-4 bg-blue-600 font-bold text-gray-100">Записаться на обучение</a></div>
        </div>
    )
}