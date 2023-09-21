export default function StatisticsItem({ text }) {

    return (
        <div className="flex p-8 rounded-xl bg-gray-300 max-w-xl mt-8 lg:max-w-md  xl:mt-0 xl:max-w-sm h-max relative">
            <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 absolute -top-4 -left-4 flex items-center justify-center font-bold">1</div>
            <span className="block">{text}</span>
        </div>
    )
}