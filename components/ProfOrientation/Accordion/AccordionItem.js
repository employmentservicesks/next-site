export default function AccordionItem({ job }) {

    return (
        <div className="flex items-center">
            <img
                alt={job}
                className="h-4 mr-2"
                src={"/assets/images/marker.gif"}
            />
            <span>{job}</span>
        </div>
    )
}