import { memo } from "react";

const TitlePageSecondary = memo(function TitlePageSecondary({ text }) {
  return (
    <span className=" block font-bold text-4xl my-12 text-justify">{text}</span>
  );
});

export default TitlePageSecondary;
