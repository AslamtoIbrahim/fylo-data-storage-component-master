import React from "react";
import Slider from "./Slider";

const Storage = () => {
  const stockage = 815;
  const space = 1000;
  return (
    <div
      className="bg-neutral-darkBlue w-[90%] p-sm md:p-md rounded-xl
    text-neutral-paleBlue font-raleway flex flex-col gap-4 
    relative"
    >
      <section>
        <p className="text-[0.70rem] md:text-lg text-center md:text-start">
          You’ve used <span className="font-bold">{`${stockage} GB`}</span> of
          your storage
        </p>
      </section>
      <section>
        <Slider space={space} value={stockage} />
      </section>
      <section className="flex justify-between text-sm md:text-lg font-semibold mb-4 lg:mb-8">
        <p>0 GB</p>
        <p>1000 GB</p>
      </section>
      <section
        className="bg-neutral-100 w-fit rounded-lg p-4 
        absolute -bottom-8 left-1/2 -translate-x-1/2 
        lg:-top-8 lg:-right-8 lg:left-auto lg:bottom-auto"
      >
        <p className="text-neutral-grayishBlue uppercase font-semibold md:text-lg">
          <span className="text-neutral-veryDarkBlue text-2xl md:text-5xl align-middle px-1">
            {space - stockage}
          </span>
          GB Left
        </p>
        <div className="hidden  lg:block absolute right-0 -bottom-6
         border-l-8 border-r-[1.25rem] border-b-[1.875rem] border-transparent border-r-neutral-100 "></div>
      </section>
    </div>
  );
};

export default Storage;
