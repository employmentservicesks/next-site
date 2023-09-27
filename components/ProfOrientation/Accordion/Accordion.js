import { useEffect, useState } from "react";
import { jobs } from "../../../helpers/jobs";
import { otherJobs } from "../../../helpers/otherJobs";
import AccordionList from "./AccordionList";

const setList = (collection, region) => {
  const items = collection[region].map((item) => item.trim());
  const setItems = Array.from(new Set(items));
  return setItems;
}

function Accordion({ region, collection }) {
  const [showAccordion, setShowAccordion] = useState(false);
  const [whiteList, setWhiteList] = useState([]);

  useEffect(() => {
    let list = undefined
    if (collection) {
      list = setList(jobs, region)
    } else {
      list = setList(otherJobs, region)
    }
    setWhiteList(list)
  }, [region]);

  return (
    <div className="w-full duration-500 pb-4 text-black dark:text-white">
      <div
        // className="text-2xl flex justify-between cursor-pointer select-none border border-black dark:border-white py-4 px-8 items-center"
        className="text-2xl flex justify-between cursor-pointer select-none bg-gray-50 dark:bg-indigo-300 rounded-md py-4 px-8 items-center"
        onClick={() => setShowAccordion(!showAccordion)}
      >
        <div><span className="dark:text-blue-800">{region}</span>{collection && <span className="dark:text-blue-800"> район</span>}</div>
        {showAccordion ? (
          <span className="material-symbols-outlined text-2xl">
            expand_less
          </span>
        ) : (
          <span className="material-symbols-outlined text-2xl">
            expand_more
          </span>
        )}
      </div>

      <div
        style={{
          opacity: showAccordion ? 1 : 0,
          maxHeight: showAccordion ? "1000px" : 0,
        }}
        className="mt-8 pl-2 sm:pl-8 duration-500 overflow-auto"
      >
        <AccordionList list={whiteList} />

      </div>
    </div>
  );
}

export default Accordion;
