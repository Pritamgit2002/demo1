"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Card } from "./card.animation";
import { cards } from "./card.content";
const Testimonial = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 3], ["1%", "-250%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh]  bg-neutral-100  ">
      <div className="sticky top-0 flex h-screen items-end  overflow-hidden -mb-40  ">
        <motion.div style={{ x }} className="  flex items-end gap-6 sm:gap-8  ">
          {cards.map((card, index) => {
            const initialRotation = index % 2 === 0 ? -6 : 6;
            const rotate = useTransform(
              scrollYProgress,
              [0, 3],
              [initialRotation, index % 2 === 0 ? 0 : 0]
            );
            return (
              <motion.div style={{ rotate }} key={card.id}>
                <Card card={card} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
