"use client";
// import { useRef } from "react";
// import "./hero.style.css";
// import { motion, useInView } from "framer-motion";
// export function Section({ children }: { children: any }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section
//       ref={ref}
//       className=" w-max h-screen flex items-end justify-center  "
//     >
//       <span
//         style={{
//           transform: isInView ? "none" : "translateY(-100vh)",
//           opacity: isInView ? 1 : 0,
//           transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
//         }}
//         className=" w-full flex justify-around "
//       >
//         {children}
//       </span>
//     </section>
//   );
// }
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
//dropping animation
const ballVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay,
      type: "spring",
      stiffness: 100,
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
    <section ref={ref} className="w-max h-screen flex items-end justify-center">
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
