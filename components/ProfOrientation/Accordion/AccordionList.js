import AccordionItem from "./AccordionItem";

export default function AccordionList({ list }) {

    return (
        <> {
            list.map((job) => <AccordionItem key={job} job={job} />)
        }</>

    )
}