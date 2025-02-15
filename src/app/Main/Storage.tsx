import React from "react";
import Slider from "./Slider";

const Storage = () => {
  const stockage = 815;
  const space = 1000;
  return (
    <div
      className="bg-neutral-darkBlue w-[min(100%-3rem,60rem)] p-sm md:p-md rounded-xl
    text-neutral-paleBlue font-raleway flex flex-col gap-4 
    relative"
    >
      <section>
        <p className="text-[0.70rem] md:text-base text-center">
          You’ve used <span className="font-bold">{`${stockage} GB`}</span> of your storage
        </p>
      </section>
      <section>
        <Slider space={space} value={stockage} />
      </section>
      <section className="flex justify-between text-sm md:text-base font-semibold mb-4">
        <p>0 GB</p>
        <p>1000 GB</p>
      </section>
      <section
        className="bg-neutral-100 w-fit rounded-lg p-4 
      absolute -bottom-8 left-1/2 -translate-x-1/2"
      >
        <p className="text-neutral-grayishBlue uppercase font-semibold">
          <span className="text-neutral-veryDarkBlue text-2xl md:text-4xl align-middle">
            {space - stockage}
          </span>{" "}
          GB Left
        </p>
      </section>
    </div>
  );
};

export default Storage;
