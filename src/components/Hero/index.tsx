"use client";
import "./hero.style.css";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { Section } from "./hero.animation";
import localFont from "next/font/local";
const heading = localFont({
  src: "../../../public/fonts/InstrumentSerif-Italic.ttf",
});
const subHeading = localFont({
  src: "../../../public/fonts/InstrumentSans-VariableFont_wdth,wght.ttf",
});
const Hero = () => {
  return (
    <div className=" flex items-center justify-center   w-full h-auto relative bg-[#1B1C1E] ">
      <div className="w-full h-[250px] lg:h-[360px] xl:h-[465px] 2xl:h-[480px] flex flex-col gap-y-5 lg:gap-y-7 xl:gap-y-10 top-0 items-center justify-end select-none absolute z-10 ">
        <span
          className=" text-5xl sm:text-6xl hidden lg:flex lg:text-[120px] italic text-white   text-center  items-start gap-x-4 "
          style={heading.style}
        >
          {/* lg:text-red-400 xl:text-gray-400 2xl:text-blue-400 */}
          Unlocking Your Potential
          <span>
            <Image
              src="/green.svg"
              alt="logo"
              width={1200}
              height={1200}
              className=" h-8 sm:h-10 w-8 sm:w-10 object-contain "
            />
          </span>
        </span>
        <span
          className=" text-5xl sm:text-6xl flex flex-col lg:hidden lg:text-[100px] italic text-white font-instrument-serif text-center  items-center gap-x-2 font-instrument-serif "
          style={heading.style}
        >
          Unlocking Your
          <span className=" flex items-start gap-x-1 ">
            <span style={heading.style}>Potential</span>
            <Image
              src="/green.svg"
              alt="logo"
              width={1200}
              height={1200}
              className=" h-7 sm:h-10 w-7 sm:w-10 object-contain "
            />
          </span>
        </span>
        <span
          className=" flex-wrap text-base sm:text-xl lg:text-2xl text-[#ABEE5F] text-center w-72 lg:w-auto "
          style={subHeading.style}
        >
          Sophy Crown - Life Coach & Performance Consultant
        </span>
      </div>

      {/* Animated components are called */}
      <div className=" flex  items-end justify-center 2xl:justify-evenly w-full h-auto ">
        <div className="-translate-y-60 lg:translate-y-0 translate-x-36 sm:translate-x-7 lg:translate-x-4 z-20 xl:hover:-translate-y-5  hover:scale-105  transition-all duration-300  ">
          <Section delay={0.8}>
            <Image
              src="/chakra.svg"
              alt="done"
              width={1200}
              height={1200}
              className="w-20 sm:w-32 xl:w-24 h-20 sm:h-32 xl:h-24 object-cover rounded-full cursor-pointer "
            />
          </Section>
        </div>

        <div className=" flex items-center justify-center lg:gap-x-40 xl:gap-x-40">
          <div className=" flex justify-center items-center translate-x-10 sm:translate-x-0  relative ">
            <Section delay={0.5}>
              <span
                className={` w-60 sm:w-72 lg:w-[450px] xl:w-[500px] 2xl:w-[520px] h-60 sm:h-72 lg:h-[450px] xl:h-[500px] 2xl:h-[520px] sm:pt-12 lg:pt-0 rounded-full bg-[#ABEE5F] text-[#1B1C1E] text-center flex sm:flex-wrap items-center justify-center text-5xl sm:text-[55px] lg:text-[74px] xl:text-[95px] 2xl:text-[105px] xl:font-medium cursor-pointer hover:scale-105  hover:-translate-y-6 transition-all duration-500 z-10 !leading- [60px] lg:!leading-[80px] xl:!leading-[120px] font-instrument-serif select-none xl:!translate-x-12 2xl:!-translate-x-28 !-rotate-12 `}
                style={{
                  transition: "transform 0.5s ease", // Add transition for smooth animation
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform =
                    "rotate(-30deg) scale(1.14)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "rotate(-30deg)";
                }}
              >
                Happiness <br /> & Fulfillment
              </span>
            </Section>
            <Section delay={0.6}>
              <span
                className={` w-max xl:w-80 h-24 xl:h-36 p-5 xl:p-10 rounded-full bg-[#F2F2F2] border-dashed  text-[#1B1C1E] text-center hidden lg:flex  items-center justify-center gap-1 text-xl sm:text-[32px]  hover:-rotate-12 hover:scale-110 hover:-translate-y-6 cursor-pointer transition-all duration-300 z-30 font-instrument-serif italic absolute bottom-0 `}
              >
                <span>Team</span>
                <div className=" text-xl space-x-4 ">
                  <FaHeart />
                </div>
                <span>effectiveness</span>
              </span>
            </Section>
          </div>
          <div className=" flex -translate-y-40 lg:translate-y-0 translate-x-3 sm:translate-x-0 hover:-translate-y-7  hover:scale-105 transition-all duration-300 cursor-pointer z-30 ">
            <Section delay={0.7}>
              <div className="relative">
                <Image
                  src="/bg.svg"
                  alt="done"
                  width={1200}
                  height={1200}
                  className="w-40 sm:w-52 xl:w-80 2xl:w-72 h-40 sm:h-52 xl:h-80 2xl:h-72 object-cover rounded-full"
                />
                <Image
                  src="/girl.webp"
                  alt="done"
                  width={1200}
                  height={1200}
                  className="w-28 sm:w-36 xl:w-52 h-28 sm:h-36 xl:h-52 object-cover rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </Section>
          </div>
        </div>
        <div className=" -translate-x-36 sm:-translate-x-20 lg:-translate-x-4 ">
          <Section delay={0.2}>
            <span
              className={` h-40 w-40 p-4 font-instrument-serif rounded-full bg-[#F2F2F2] text-center flex flex-col  items-center justify-center text-lg sm:text-xl cursor-pointer xl:hover:scale-110 hover:xl:-translate-y-2 transition-all duration-500 delay-300 text-[#1B1C1E] italic `}
            >
              <Image
                src="/black book.svg"
                alt="done"
                width={1200}
                height={1200}
                className="w-14 sm:w-20 h-14 sm:h-20 object-contain rounded-full "
              />
              Personal Growth & Development
            </span>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
