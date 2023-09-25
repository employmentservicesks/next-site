export default function OrganisationItem({ text }) {

    return (
        <div className="flex p-8 rounded-xl bg-gray-300  sm:max-w-xl h-max items-center">
            <img width={80} src='assets/images/prof/3423q.svg' />
            <span className="ml-4 font-bold">{text}</span>
        </div>
    )
}