'"use client";';

import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="max-w-360 w-full md:w-218.5 desktop:w-full pt-40 pb-20 grid grid-cols-1 desktop:grid-cols-2 gap-30 items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-4xl mx-auto pr-20 ">
        {/* Container: */}
        <div className="relative z-10 w-full h-full aspect-[1.35] flex items-center justify-center">
          {/* Top left decor: */}
          <div className="absolute -top-[12%] -left-[10%] w-[95%] h-[15%] bg-[#F7F7F7] rounded-t-2xl md:rounded-t-[20px] z-0"></div>

          {/* Right decor: */}
          <div className="absolute top-[15%] -right-[8%] w-[10%] h-[65%] bg-[#F7F7F7] rounded-r-2xl md:rounded-r-[20px] z-0"></div>

          {/* Shadow: */}
          <div className="absolute -bottom-[4%] left-1/2 -translate-x-1/2 w-[90%] h-[12%] bg-linear-to-br from-[#3b280f] to-[#f8941b] blur-xl md:blur-xl rounded-full z-[-1] opacity-50"></div>

          {/* Image Wrapper: */}
          <div className="relative w-full h-full z-10 rounded-r-2xl md:rounded-r-3xl ">
            <Image
              src="/image/experiences.jpg"
              alt="Experiences"
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Next.js Image optimization for responsive images
            />
          </div>
        </div>
      </div>

      <div className="px-5 md:px-none flex flex-col gap-5  text-right desktop:text-left items-end desktop:items-start">
        <p className="text-[1.25rem] text-[#E58411] tracking-widest">
          EXPERIENCE
        </p>

        <p className="text-4xl font-bold  max-w-104">
          We Provide You The <br /> Best Experience
        </p>

        <p className="max-w-139 text-[1.14rem]">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <div className="flex flex-row justify-start items-center gap-3.5 cursor-pointer">
          <p className="text-amber-600">More Info</p>
          <MoveRight
            className="text-amber-600 max-w-12"
            strokeWidth={0.5}
            size={42}
          />
        </div>
      </div>
    </section>
  );
}
