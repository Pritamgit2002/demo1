import Discover from "@/components/discover";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import React from "react";
import Character from "@/components/Character";
type Props = {};

const page = (props: Props) => {
  const paragraph =
    "We are a hand picked team of industry-experts with 7 unique super powers high voltage emoji to get the jaw-dropping results you deserve.  ";
  const paragraph2 = "Because nothing great is done alone.";
  return (
    <div className=" bg-black ">
      {/* <div className=" h-screen w-full "></div> */}
      <Hero />
      <div className=" pt-28 ">
        <Character paragraph={paragraph} />
        <Character paragraph={paragraph2} />
      </div>
      <Testimonial />
    </div>
  );
};

export default page;
