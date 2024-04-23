import Testimonial from "@/components/testimonial";
import React from "react";
import Character from "@/components/character/Character";
import Hero from "@/components/Hero";
import Staggering from "@/components/stagger";
type Props = {};

const page = (props: Props) => {
  const paragraph =
    "We are a hand picked team of industry-experts with 7 unique super powers high voltage emoji to get the jaw-dropping results you deserve.  ";
  const paragraph2 = "Because nothing great is done alone.";
  return (
    <div className=" bg-black ">
      <Hero />
      {/* <div className=" pt-28 ">
        <Character paragraph={paragraph} />
        <Character paragraph={paragraph2} />
      </div> */}
      {/* <Staggering /> */}
      <Testimonial />
    </div>
  );
};

export default page;
