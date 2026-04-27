"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const ReactCompareSliderComponent = dynamic(
  () =>
    import("react-compare-slider").then((mod) => {
      const { ReactCompareSlider, ReactCompareSliderImage } = mod;

      return function DynamicCompareSlider({ item, position }) {
        console.log(position);
        return (
          // <div className=" w-full sm:w-92.5 h-full rounded-4xl overflow-hidden z-10 shadow-sm object-cover">
          <ReactCompareSlider
            position={position}
            itemOne={
              <ReactCompareSliderImage src={item.before} alt={item.name} />
            }
            itemTwo={
              <ReactCompareSliderImage src={item.after} alt={item.name} />
            }
            style={{ height: "100%", width: "100%" }}
          />
          // </div>
        );
      };
    }),
  { ssr: false },
);

export default function CompareSlider({ item }) {
  const [position, setPosition] = useState(50);

  return (
    <div
      className=" h-130 w-full mx-auto group flex flex-col items-center"
      onMouseLeave={() => {
        console.log("Mouse out");
        setPosition(50);
      }}
    >
      {/* Container */}
      <div className=" w-full sm:w-92.5 h-full rounded-4xl overflow-hidden z-10 shadow-sm object-cover">
        <ReactCompareSliderComponent item={item} position={position} />
      </div>
    </div>
  );
}
