export default function ReasonItem({ imgSrc, header, text }) {

    return (
        <div className="p-8 rounded-xl bg-gray-300 md:max-w-xs h-42 items-center relative">
            <img width={50} className="absolute -top-6 left-8" src={imgSrc} />
            <span className="block mt-2 font-bold">{header}</span>
            <span className="mt-2 block">{text}</span>
        </div>
    )
}