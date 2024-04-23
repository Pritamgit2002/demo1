"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
//dropping animation
const ballVariants = {
  hidden: {
    y: "-110vh",
    opacity: 0,
  },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay,
      type: "spring",
      stiffness: 110,
      damping: 15,
    },
  }),
};

export function Section({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="w-max h-[110vh]   flex items-end justify-center"
    >
      <motion.div
        variants={ballVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={delay}
        className="w-full flex justify-around"
      >
        {children}
      </motion.div>
    </section>
  );
}

// automatic rotating

// const spinAnimation = {
//   spin: {
//     rotate: 360,
//     transformOrigin: "50% 50%",
//     transition: {
//       repeat: Infinity,
//       ease: "linear",
//       duration: 10, // Adjust this value to control the initial spin speed
//     },
//   },
//   spinHover: {
//     rotate: 360,
//     transformOrigin: "50% 50%",
//     transition: {
//       repeat: Infinity,
//       ease: "linear",
//       duration: 5, // Adjust this value to control the spin speed on hover
//     },
//   },
// };

// export const SpinningComponent = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   return (
//     <motion.div
//       variants={spinAnimation}
//       animate="spin"
//       whileHover="spinHover"
//       style={{ display: "inline-block" }}
//     >
//       {children}
//     </motion.div>
//   );
// };
