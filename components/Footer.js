import React, { memo } from "react";

const Footer = memo(function Footer() {
  const date = new Date();
  return (
    <div className="w-full bg-gray-300 text-center align-middle py-4">
      Служба занятости Херсонской области - {date.getFullYear()}
    </div>
  );
});

export default Footer;
