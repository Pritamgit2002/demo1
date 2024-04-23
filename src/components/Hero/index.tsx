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
  const [rotation, setRotation] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 10);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);
  return (
    <div className=" flex items-center justify-evenly  w-full h-screen relative bg-black ">
      <div className="w-full h-72 flex flex-col gap-y-2 top-0 items-center justify-end select-none absolute z-10   ">
        <span className=" text-5xl sm:text-6xl lg:text-[118px] italic text-white font-serif text-center ">
          Unloacking Your Potential
        </span>
        <span className=" flex-wrap text-base sm:text-xl lg:text-2xl text-[#ABEE5F] text-center ">
          Sophy Crown - Life Coach & Performance Consultant
        </span>
      </div>
      <div className=" flex  items-end justify-center sm:justify-around  w-full h-screen bg-black/90   ">
        <div className="-translate-y-56 sm:translate-y-0 translate-x-28 sm:translate-x-0  z-20 ">
          <Section delay={0.8}>
            <motion.span className="rounded-full bg-white text-center flex items-center justify-center text-6xl xl:text-8xl font-semibold -rotate-12 cursor-pointer z-10 leading-relaxed delay-300  ">
              <LiaDharmachakraSolid />
            </motion.span>
          </Section>
        </div>

        <div className=" flex items-center justify-center ">
          <div className=" flex justify-center items-center translate-x-10 sm:translate-x-0   ">
            <Section delay={0.5}>
              <span
                className={` w-60 xl:w-[470px] h-60 xl:h-[470px] p-20 sm:p-14 xl:p-20 rounded-full bg-[#ABEE5F]  text-center flex sm:flex-wrap items-center justify-center text-xl sm:text-3xl xl:text-7xl -rotate-12 cursor-pointer  hover:scale-110 hover:-translate-y-6 transition-all duration-500 z-10 leading-relaxed font-serif `}
              >
                Happiness & Fulfillment
              </span>
            </Section>
          </div>
          <div className=" flex -translate-y-40 sm:translate-y-0 translate-x-8 sm:translate-x-0  ">
            <Section delay={0.6}>
              <span
                className={` w-max xl:w-72 h-24 xl:h-40 p-5 xl:p-10 rounded-full bg-white border-dashed border-y-2 border-black text-center hidden lg:flex  items-center justify-center text-xl sm:text-3xl  hover:-rotate-12 hover:scale-110 hover:-translate-y-6 cursor-pointer transition-all duration-300 z-20 font-serif  `}
              >
                Team
                <div className=" text-xl space-x-4 ">
                  <FaHeart />
                </div>
                effectiveness
              </span>
            </Section>
            <Section delay={0.7}>
              <span
                className={` p-6   rounded-full bg-[#ABEE5F] flex  items-center justify-center -rotate-6 cursor-pointer hover:scale-110 hover:-translate-y-6 transition-all duration-500 z-10  delay-500 border-4 border-dashed border-black `}
              >
                <Image
                  src="/girl.webp"
                  alt="done"
                  width={1200}
                  height={1200}
                  className=" w-20 sm:w-28 xl:w-40 h-20 sm:h-28 xl:h-40 object-cover rounded-full "
                />
              </span>
            </Section>
          </div>
        </div>
        <div className=" -translate-x-28 sm:translate-x-0 ">
          <Section delay={0.2}>
            <span
              className={` h-36 sm:h-44 xl:w-48 w-36 sm:w-44 xl:h-48 font-serif rounded-full bg-white text-center flex flex-col  items-center justify-center text-lg sm:text-xl  -rotate-6 cursor-pointer hover:scale-110 hover:-translate-y-6 transition-all duration-500 z-10 delay-300 `}
            >
              <div className=" text-2xl sm:text-4xl ">
                <GiBurningBook />
              </div>
              Personal Growth & Development
            </span>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
