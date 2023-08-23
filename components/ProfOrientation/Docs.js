import TitlePageSecondary from '../TypographyElements/TitlePageSecondary'

export default function Docs() {

    return (
        <section>
            <TitlePageSecondary text='Полезные документы' />
            <div className="flex flex-wrap gap-4 justify-center">
                <a className="w-full py-2 px-4 lg:max-w-sm bg-blue-300" download={''} href="/docs/prof/federal.docx">Херсонский технический университет</a>
                <a className="w-full py-2 px-4 lg:max-w-sm bg-blue-300" download={''} href="/docs/prof/candidates.docx">Российской академией народного хозяйства и государственной службы при Президенте Российской Федерации</a>
                <a className="w-full py-2 px-4 lg:max-w-sm bg-blue-300" download={''} href="/docs/prof/federal.docx">Перечень профессилнальных программ №1</a>
                <a className="w-full py-2 px-4 lg:max-w-sm bg-blue-300" download={''} href="/docs/prof/federal.docx">Перечень профессилнальных программ №2</a>
                <a className="w-full py-2 px-4 lg:max-w-sm bg-blue-300" download={''} href="/docs/prof/federal.docx">Перечень профессилнальных программ №3</a>
            </div>
        </section>
    )
}