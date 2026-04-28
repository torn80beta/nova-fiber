"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Materials() {
  return (
    <section
      id="materials"
      className="max-w-360 w-full md:w-218.5 desktop:w-full  py-10 grid grid-cols-1 desktop:grid-cols-2 gap-10 items-center justify-center overflow-hidden"
    >
      {/* Description */}
      <div className="px-5 flex flex-col gap-5  ">
        <p className="text-[1.25rem] text-[#E58411] tracking-widest">
          MATERIALS
        </p>

        <div className="text-4xl font-bold  max-w-104">
          <p>Very serious</p>
          <p>materials for making</p>
          <p>furniture</p>
        </div>

        <p className="max-w-139 text-[1.14rem]">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
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

      {/* Collage */}
      <div className="relative w-full h-full pl-5 aspect-[1.0] grid grid-cols-3 gap-5 lg:gap-10.5 items-center">
        <div className="col-span-1 flex flex-col gap-11.5 pb-16 items-center justify-center">
          {/* Top left image */}
          <div className="w-full">
            <div className="relative z-10 w-full  aspect-[1.0]  rounded-3xl">
              {/* Shadow: */}
              <div className="absolute -bottom-[4%] left-1/2 -translate-x-1/2 w-[85%] h-[15%] bg-linear-to-b from-[#1e4042] to-[#edfdff] blur-xl md:blur-xl rounded-full z-[-1] opacity-50"></div>
              <Image
                src="/image/materials_3.jpg"
                alt="Chairs"
                fill={true}
                className="object-cover rounded-2xl md:rounded-3xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Next.js Image optimization for responsive images
              />
            </div>
          </div>

          {/* Bottom left image */}
          <div className="w-full">
            <div className="relative z-10 w-full h-auto aspect-[0.71]  rounded-3xl">
              {/* Shadow: */}
              <div className="absolute -bottom-[4%] left-1/2 -translate-x-1/2 w-[85%] h-[15%] bg-linear-to-br from-[#c98a3e] to-[#000000] blur-xl md:blur-xl rounded-full z-[-1] opacity-50"></div>
              <Image
                src="/image/materials_2.jpg"
                alt="Sofa"
                fill={true}
                className="object-cover rounded-2xl md:rounded-3xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Next.js Image optimization for responsive images
              />
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full h-[64.67%] col-span-2 relative">
          {/* Top left decor: */}
          <div className="absolute -top-[12%] left-[39%] w-[95%] h-[15%] bg-[#F7F7F7] rounded-t-2xl md:rounded-t-[20px] z-0"></div>

          {/* Shadow: */}
          <div className="absolute -bottom-[4%] left-1/2 -translate-x-1/2 w-[90%] h-[12%] bg-linear-to-b from-[#3b280f] to-[#c98a3e] blur-xl md:blur-xl rounded-full z-[-1] opacity-50"></div>

          {/* Image */}
          <div className="relative w-full h-full z-10">
            <Image
              src="/image/materials_1.jpg"
              alt="Table"
              fill={true}
              className="object-cover rounded-l-2xl md:rounded-l-3xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Next.js Image optimization for responsive images
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
