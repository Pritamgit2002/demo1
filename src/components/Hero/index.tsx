"use client";
import "./hero.style.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { GiBurningBook } from "react-icons/gi";
import { LiaDharmachakraSolid } from "react-icons/lia";
import Image from "next/image";
import { Section } from "./hero.animation";

const Hero = () => {
  return (
    <div className=" flex items-center justify-center  w-full h-screen xl:h-[118vh] relative bg-[#1B1C1E] ">
      <div className="w-full h-80 flex flex-col gap-y-2 top-0 items-center justify-end select-none absolute z-10   ">
        <span className=" text-5xl sm:text-6xl hidden lg:flex lg:text-[100px] italic text-white font-serif text-center  items-start gap-x-2 ">
          Unloacking Your Potential
          <span className="  ">
            <Image
              src="/green.svg"
              alt="logo"
              width={1200}
              height={1200}
              className=" h-8 sm:h-10 w-8 sm:w-10 object-contain "
            />
          </span>
        </span>
        <span className=" text-5xl sm:text-6xl flex flex-col lg:hidden lg:text-[100px] italic text-white font-serif text-center  items-center gap-x-2 ">
          Unloacking Your
          <span className=" flex items-start ">
            <span>Potential</span>
            <Image
              src="/green.svg"
              alt="logo"
              width={1200}
              height={1200}
              className=" h-7 sm:h-10 w-7 sm:w-10 object-contain "
            />
          </span>
        </span>
        <span className=" flex-wrap text-base sm:text-xl lg:text-2xl text-[#ABEE5F] text-center ">
          Sophy Crown - Life Coach & Performance Consultant
        </span>
      </div>
      <div className=" flex  items-end justify-center  w-full h-screen xl:h-[118vh] ">
        <div className="-translate-y-60 lg:translate-y-0 translate-x-36 sm:translate-x-7 lg:translate-x-0 z-20   hover:scale-105 hover:-translate-y-7 transition-all duration-300  ">
          <Section delay={0.8}>
            <Image
              src="/chakra.svg"
              alt="done"
              width={1200}
              height={1200}
              className="w-20 sm:w-32 xl:w-24 h-20 sm:h-32 xl:h-24 object-cover rounded-full"
            />
          </Section>
        </div>

        <div className=" flex items-center justify-center lg:gap-x-40 xl:gap-x-40">
          <div className=" flex justify-center items-center translate-x-10 sm:translate-x-0  relative ">
            <Section delay={0.5}>
              <span
                className={`
    w-60 sm:w-96 xl:w-[530px] h-60 sm:h-96 xl:h-[530px] pt-10 sm:pt-16 rounded-full bg-[#ABEE5F] text-[#1B1C1E] text-center flex sm:flex-wrap items-center justify-center text-4xl sm:text-6xl xl:text-[82px] -rotate-12 cursor-pointer hover:scale-110 hover:-translate-y-6 transition-all duration-500 z-10 sm:!leading-[60px] xl:!leading-[85px] font-serif select-none font-stretch
  `}
                // style={{ lineHeight: "115px" }}
              >
                Happiness <br /> & Fulfillment
              </span>
            </Section>
            <Section delay={0.6}>
              <span
                className={` w-max xl:w-80 h-24 xl:h-32 p-5 xl:p-10 rounded-full bg-white border-dashed  text-[#1B1C1E] text-center hidden lg:flex  items-center justify-center gap-1 text-xl sm:text-3xl  hover:-rotate-12 hover:scale-110 hover:-translate-y-6 cursor-pointer transition-all duration-300 z-30 font-serif italic absolute bottom-0 `}
              >
                <span>Team</span>
                <div className=" text-xl space-x-4 ">
                  <FaHeart />
                </div>
                <span>effectiveness</span>
              </span>
            </Section>
          </div>
          <div className=" flex -translate-y-36 lg:translate-y-0 translate-x-3 sm:translate-x-0 hover:-translate-y-7  hover:scale-105 transition-all duration-300 cursor-pointer ">
            <Section delay={0.7}>
              <div className="relative">
                <Image
                  src="/bg.svg"
                  alt="done"
                  width={1200}
                  height={1200}
                  className="w-40 sm:w-60 xl:w-72 h-40 sm:h-60 xl:h-72 object-cover rounded-full"
                />
                <Image
                  src="/girl.webp"
                  alt="done"
                  width={1200}
                  height={1200}
                  className="w-28 sm:w-40 xl:w-52 h-28 sm:h-40 xl:h-52 object-cover rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </Section>
          </div>
        </div>
        <div className=" -translate-x-36 sm:-translate-x-20 lg:translate-x-0 ">
          <Section delay={0.2}>
            <span
              className={` h-40 sm:h-48 w-40 sm:w-48 p-2 font-serif rounded-full bg-white text-center flex flex-col  items-center justify-center text-lg sm:text-lg cursor-pointer hover:scale-110 hover:-translate-y-6 transition-all duration-500 z-10 delay-300 text-[#1B1C1E] italic `}
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
