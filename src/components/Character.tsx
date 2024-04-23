"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import styles from "./style.module.scss";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <div className=" h-max py-20 bg-black text-4xl sm:text-5xl xl:text-7xl flex items-start justify-center ">
      <p
        ref={container}
        className={` w-9/12 leading-[110px]  ${styles.paragraph}`}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

interface WordProps {
  children: string;
  progress: number | any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className={` text-2xl sm:text-5xl xl:text-7xl ${styles.word}`}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

interface CharProps {
  children: string;
  progress: number | any;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className={`text-2xl sm:text-5xl xl:text-7xl ${styles.shadow}`}>
        {children}
      </span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
