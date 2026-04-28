"use client";

import dynamic from "next/dynamic";

const ReactCompareSliderComponent = dynamic(
  () =>
    import("react-compare-slider").then((mod) => {
      const { ReactCompareSlider, ReactCompareSliderImage } = mod;

      return function DynamicCompareSlider({ item, position }) {
        return (
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage src={item.before} alt={item.name} />
            }
            itemTwo={
              <ReactCompareSliderImage src={item.after} alt={item.name} />
            }
            style={{ height: "100%", width: "100%" }}
          />
        );
      };
    }),
  { ssr: false },
);

export default function CompareSlider({ item }) {
  return (
    <div className=" h-130 w-full mx-auto group flex flex-col items-center">
      {/* Container */}
      <div className=" w-full sm:w-92.5 h-full rounded-4xl overflow-hidden z-10 shadow-sm object-cover">
        <ReactCompareSliderComponent item={item} />
      </div>
    </div>
  );
}
