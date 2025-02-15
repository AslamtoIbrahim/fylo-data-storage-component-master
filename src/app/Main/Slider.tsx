"use client";
import React, { useEffect, useState } from "react";

type prop = {
  value: number;
  space: number;
};

const Slider = ({ value = 0, space = 100 }: prop) => {
  const [active, setactive] = useState(false);
  let range = 1;
  if (space > value) {
    range = (value * 100) / space;
  }
  useEffect(() => {
    setTimeout(() => {
      setactive(true);
    }, 1000);
  }, [active]);

  return (
    <div className="bg-neutral-veryDarkBlue p-1 rounded-full cursor-pointer">
      <div
        className={`w-3 h-full bg-slid rounded-full flex items-center justify-end p-[0.1rem]
       transition-all duration-1000 ease-out`}
        style={{
          width: active ? `${range}%` : "",
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Slider;
