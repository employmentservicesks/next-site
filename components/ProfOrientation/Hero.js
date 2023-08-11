
export default function Hero() {

    return (
        <section className="h-screen "
            style={{ backgroundImage: 'url(assets/images/prof/bg.jpg)', backgroundSize: 'cover' }}>
            <div className="h-full w-full bg-gradient-to-r from-blue-700 from-30% via-blue-700 pt-48">
                <div className="max-w-6xl ml-12 text-gray-300">
                    <span className="block text-3xl font-bold">Федеральный проект «Содействие занятости»</span>
                    <span className="block text-6xl font-bold mt-6">Бесплатно пройдите обучение и получите помощь с трудоустройством</span>
                    <span className="block text-2xl font-bold mt-6">Программы повышения квалификации и профессиональной подготовки.</span>
                    <span className="block text-2xl font-bold">Получи востребованую специальность</span>
                    <div>
                        <ol className="flex list-disc mt-12 text-xl">
                            <li className="ml-4">Обучение только для граждан РФ</li>
                            <li className="ml-12">Обучение до 4 месяцев</li>
                            <li className="ml-12">Помощь в старте карьеры</li>
                        </ol>
                    </div>
                    <a href="#how_to" className="px-8 py-2 bg-gray-300 text-xl text-black font-bold mt-24 block w-min">ЗАПИСАТЬСЯ</a>
                </div>
            </div>
        </section>
    )
}