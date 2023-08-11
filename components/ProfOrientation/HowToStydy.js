export default function HowToStudy() {

    return (
        <section className="w-full mb-24">
            <div id="how_to" className="w-full md:flex">
                <div className="w-full md:w-1/2 pr-8">
                    <span className="block text-xl mb-4"><b>Как правильно зарегистрироваться и подать заявку</b> для участия, а также  какие категории граждан могут принимать участие в программе - смотрите в видео.</span>
                    <span className="block text-xl mb-4">Дополнительную информацию об образовательных программах вы можете получить в управлениях Службы занятости Херсонской области или по телефону: +7 990 060 67 73</span>
                </div>
                <div className="w-full md:w-1/2">
                    <video
                        className="w-full drop-shadow-2xl"
                        src="/assets/videos/how_to_study.mp4"
                        controls
                        width={"100%"}
                    />
                </div>
            </div>
        </section>
    )
}