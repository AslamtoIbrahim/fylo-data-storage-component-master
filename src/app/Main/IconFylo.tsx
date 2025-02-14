import React from "react";
import Image from "next/image";

type props = {
    icon: string;
}

const IconFylo = ({icon} : props) => {
  return (
    <div className="bg-neutral-veryDarkBlue flex items-center justify-center
     w-fit p-3 md:p-4 rounded-xl">
      <Image className="w-4 sm:w-6 md:w-8" src={icon} alt="icon" />
    </div>
  );
};

export default IconFylo;
