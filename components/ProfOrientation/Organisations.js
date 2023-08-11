export default function Organisations() {


    return (
        <section className="w-full mb-24">
            <span className="font-bold text-3xl mb-8 block">Проект реализуется при поддержке</span>
            <div className="w-full md:flex flex-wrap gap-12 mx-auto justify-center">
                <div className="flex p-8 rounded-xl bg-gray-300  sm:max-w-xl h-max items-center">
                    <img width={80} src='assets/images/prof/3423q.svg' />
                    <span className="ml-4 font-bold">Министерства труда и социальной защиты Российской Федерации</span>
                </div>
                <div className="flex mt-4 md:mt-0  p-8 rounded-xl bg-gray-300  sm:max-w-xl h-max items-center">
                    <img width={80} src='assets/images/prof/q2.svg' />
                    <span className="ml-4 font-bold">Министерства труда и социальной защиты Российской Федерации</span>
                </div>
                <div className="flex mt-4 md:mt-0 p-8 rounded-xl bg-gray-300 sm:max-w-xl h-max items-center">
                    <img width={80} src='assets/images/prof/222.svg' />
                    <span className="ml-4 font-bold">Министерства труда и социальной защиты Российской Федерации</span>
                </div>
            </div>
        </section>
    )
}