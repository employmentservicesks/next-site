import TitlePageSecondary from '../TypographyElements/TitlePageSecondary'
import DocsLink from '../TypographyElements/DocsLink'

export default function Docs() {

    return (
        <section>
            <TitlePageSecondary text='Полезные документы' />
            <div className="flex flex-wrap gap-4 justify-center">
                <DocsLink link={"/docs/prof/federal.docx"} text={'Херсонский технический университет'} />
                <DocsLink link={"/docs/prof/candidates.docx"} text={'Российской академией народного хозяйства и государственной службы при Президенте Российской Федерации'} />
                <DocsLink link={"/docs/prof/addition1.docx"} text={'Перечень профессилнальных программ №1'} />
                <DocsLink link={"/docs/prof/addition2.docx"} text={'Перечень профессилнальных программ №2'} />
                <DocsLink link={"/docs/prof/addition3.docx"} text={'Перечень профессилнальных программ №3'} />
            </div>
        </section>
    )
}