"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import styles from "./style.module.scss";

export default function Discover() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });
  const paragraph =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

  const words = paragraph.split(" ");
  return (
    <p ref={container} className={styles.paragraph}>
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
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: any;
  progress: any;
  range: any;
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={styles.word}>
      {children.split("").map(({ char, i }: { char: any; i: any }) => {
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

const Char = ({
  children,
  progress,
  range,
}: {
  children: any;
  progress: any;
  range: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};