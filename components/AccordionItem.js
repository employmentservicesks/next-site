import { useState } from "react";
import { jobs } from "../helpers/jobs";

function AccordionItem({ region }) {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div className="w-full duration-500 pb-4 text-black dark:text-white">
      <div
        className="text-2xl flex justify-between cursor-pointer select-none border border-black dark:border-white py-4 px-8"
        onClick={() => setShowAccordion(!showAccordion)}
      >
        <span>{region} район</span>
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
        {jobs[region].map((job, index) => (
          <div key={index} className="flex items-center">
            <img
              alt={job}
              className="h-4 mr-2"
              src={"/assets/images/marker.gif"}
            />
            <span>{job}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionItem;
