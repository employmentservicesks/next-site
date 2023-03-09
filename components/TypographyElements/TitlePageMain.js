import { memo } from "react";

const TitlePageMain = memo(function TitlePageMain({ text }) {
  return (
    <span className="text-2xl md:text-6xl font-bold my-12 block uppercase">
      {text}
    </span>
  );
});

export default TitlePageMain;
