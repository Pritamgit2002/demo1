import Hero from "@/components/Hero";
import Testimonial from "@/components/testimonial";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="  ">
      <Hero />
      <Testimonial />
    </div>
  );
};

export default page;
