"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Testimonial = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 3], ["1%", "-280%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="  flex gap-14 ">
          {cards.map((card, index) => {
            const initialRotation = index % 2 === 0 ? 5 : -5;
            const rotate = useTransform(
              scrollYProgress,
              [0, 3],
              [initialRotation, index % 2 === 0 ? 40 : -40]
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
const Card = ({ card }: { card: any }) => {
  return (
    <div
      key={card.id}
      className={`group relative h-max w-[350px] overflow-hidden rounded-3xl py-10 px-5 leading-loose shadow-md shadow-gray-400 flex flex-col gap-y-5 ${
        card.id % 2 === 0
          ? "bg-black text-[#abee5f]"
          : "bg-[#abee5f] text-black"
      }`}
    >
      <p className=" text-xl sm:text-2xl  leading-relaxed ">{card.comment}</p>
      <div className=" w-full flex items-center justify-start gap-x-4  ">
        <Image
          src={card.image}
          alt="image"
          width={1200}
          height={1200}
          className=" w-16 h-16 rounded-full object-cover  "
        />
        <span className=" text-3xl font-semibold ">{card.name}</span>
      </div>
      <span className="text-lg font-semibold ">- {card.role}</span>
    </div>
  );
};

export default Testimonial;

const cards = [
  {
    comment:
      "Tears well up in her eyes as he thanks Sophy, You helped me silence the inner critic and find my artistic voice.",
    name: "John",
    image: "/boy.webp",
    id: 1,
    role: "CEO",
  },
  {
    comment:
      "Sophy helped me cultivate self-compassion and develop skills. I'm now confidently participates in networking.",
    name: "Sophie",
    image: "/girl.webp",
    id: 2,
    role: "Mom",
  },
  {
    comment:
      "Tears well up in her eyes as he thanks Sophy, You helped me silence the inner critic and find my artistic voice.",
    name: "John",
    image: "/boy.webp",
    id: 3,
    role: "Artist",
  },
  {
    comment:
      "Sophy helped me cultivate self-compassion and develop skills. I'm now confidently participates in networking.",
    image: "/girl.webp",
    name: "Sophie",
    id: 4,
    role: "Manager",
  },
  {
    comment:
      "Tears well up in her eyes as he thanks Sophy, You helped me silence the inner critic and find my artistic voice.",
    name: "John",
    image: "/boy.webp",
    id: 5,
    role: "Manager",
  },
  {
    comment:
      "Sophy helped me cultivate self-compassion and develop skills. I'm now confidently participates in networking.",
    image: "/girl.webp",
    name: "Sophie",
    id: 6,
    role: "Manager",
  },
];
