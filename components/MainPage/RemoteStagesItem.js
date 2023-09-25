export default function RemoteStagesItem({ imgSrc, text }) {

    return (
        <div className="flex flex-col items-center w-full md:w-1/2 xl:w-1/4 p-4 text-center">
            <img
                alt=""
                width={"100%"}
                src={imgSrc}
                className="mb-4"
            />
            <span className="text-lg">{text}</span>
        </div>
    )
}