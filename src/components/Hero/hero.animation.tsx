"use client";
import { useRef } from "react";
import "./hero.style.css";
import { motion, useInView } from "framer-motion";
export function Section({ children }: { children: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className=" w-max h-screen flex items-end justify-center  "
    >
      <span
        style={{
          transform: isInView ? "none" : "translateY(-100vh)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
        }}
        className=" w-full flex justify-around "
      >
        {children}
      </span>
    </section>
  );
}
