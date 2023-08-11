export default function Statistics() {


    return (
        <div className="my-24">
            <span className="block w-1/2 text-2xl font-bold">Участвуйте в федеральном проекте</span>
            <div className="flex w-full mt-8">
                <div className="w-1/2">
                    <span className="text-2xl mb-2 block">Кто может участвовать в проекте?</span>
                    <ol>
                        <li>◾️ Люди предпенсионного возраста, а также лица старше 50 лет</li>
                        <li>◾️ Мамы, находящиеся в отпуске по уходу за ребенком до 3 лет</li>
                        <li>◾️ Безработные женщины, имеющие детей до 7 лет включительно</li>
                        <li>◾️ Некоторые категории граждан до 35 лет</li>
                    </ol></div>

                <span className="block w-1/2 text-xl">«Содействие занятости» — это государственный проект, цель которого помочь гражданам повысить квалификацию и востребованность на рынке труда, сменить профессию или открыть свое дело в качестве ИП или самозанятого.</span>
            </div>
            <div className="flex flex-wrap w-full mt-16 justify-between">
                <div className="flex p-8 rounded-xl bg-gray-300 max-w-sm h-max relative">
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 absolute -top-4 -left-4 flex items-center justify-center font-bold">1</div>
                    <span className="block">Обучение на базе Национального исследовательского Томского государственного университета, федерального оператора проекта</span>
                </div>
                <div className="flex p-8 rounded-xl bg-gray-300 max-w-sm h-max relative">
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 absolute -top-4 -left-4 flex items-center justify-center font-bold">2</div>
                    <span className="block">Обучение на базе Национального исследовательского Томского государственного университета, федерального оператора проекта</span>
                </div>
                <div className="flex p-8 rounded-xl bg-gray-300 max-w-sm h-max relative">
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 absolute -top-4 -left-4 flex items-center justify-center font-bold">3</div>
                    <span className="block">Обучение на базе Национального исследовательского Томского государственного университета, федерального оператора проекта</span>
                </div>
            </div>
            <div className="pt-12"><a href="https://trudvsem.ru/educational-programs?page=0&titleType=COURSE_NAME" className="text-2xl py-2 px-4 bg-blue-600 font-bold text-gray-100">Записаться на обучение</a></div>
        </div>
    )
}