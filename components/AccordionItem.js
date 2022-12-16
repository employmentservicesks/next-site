import { useState } from "react";
import { jobs } from "../helpers/jobs";

function AccordionItem({ region }) {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div className="my-12 w-full">
      <div
        className="text-2xl w-1/3 flex justify-between cursor-pointer select-none"
        onClick={() => setShowAccordion(!showAccordion)}
      >
        <span>{region} район</span>
        <img
          src={
            showAccordion
              ? "/assets/images/arrowUp.gif"
              : "/assets/images/arrowDown.gif"
          }
          className="h-8"
        />
      </div>
      {showAccordion && (
        <div className="mt-8 pl-8">
          {jobs[region].map((job, index) => (
            <div key={index} className="flex items-center">
              <img className="h-4 mr-2" src={"/assets/images/marker.gif"} />
              <span>{job}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
