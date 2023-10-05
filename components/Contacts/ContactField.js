export default function ContactField({ linkLabel, linkHref, text, icon }) {

    return (
        <div className="w-full">
            <span className="block text-xl mb-4 text-bold">
                {text}
            </span>
            <div>
                <a
                    className="block text-lg mb-8 text-bold flex items-center"
                    href={linkHref}
                >
                    <span className="material-symbols-outlined mr-4">{icon}</span>
                    <span className="underline underline-offset-4">
                        {linkLabel}
                    </span>
                </a>
            </div>
        </div>
    )
}