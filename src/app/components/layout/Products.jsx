"use client";

import Slider from "../shared/Slider";
import { works } from "@/lib/constants";
import CompareSlider from "../shared/CompareSlider";

export default function Products() {
  return (
    <section
      id="products"
      className="max-w-360 w-full py-5 flex flex-col items-center justify-center overflow-hidden"
    >
      <p className="text-3xl sm:text-4xl font-bold text-center">
        Impressive Results
      </p>

      <div className="max-w-90 sm:max-w-149 md:max-w-218.5 desktop:max-w-360 flex flex-col items-center">
        <Slider slides={works} CardComponent={CompareSlider} />
      </div>
    </section>
  );
}
