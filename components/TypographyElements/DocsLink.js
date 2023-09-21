export default function DocsLink({ text, link }) {


    return (
        <a className="w-full py-2 px-4 lg:max-w-sm bg-blue-300 rounded-lg font-bold uppercase" download={''} href={link}>{text}</a>
    )
}