"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const articles = [
  { id: 1, title: "Great times", excerpt: "Await you" },
  { id: 2, title: "Great times", excerpt: "Await you" },
  { id: 3, title: "Great times", excerpt: "Await you" },
  { id: 4, title: "Great times", excerpt: "Await you" },
  { id: 5, title: "Great times", excerpt: "Await you" },
  { id: 6, title: "Great times", excerpt: "Await you" },
];

export default function Staggering() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full min-h-screen bg-pink-400 flex flex-col items-center justify-center gap-y-8">
      {articles.map((article, i) => {
        const opacity = useTransform(
          scrollYProgress,
          [
            (i - 1) / articles.length,
            i / articles.length,
            (i + 1) / articles.length,
          ],
          [0, 1, 1]
        );
        const translateY = useTransform(
          scrollYProgress,
          [
            (i - 1) / articles.length,
            i / articles.length,
            (i + 1) / articles.length,
          ],
          [50, 0, 0]
        );

        return (
          <motion.div
            key={article.id}
            className="m-4 bg-lime-400 rounded-3xl p-4 h-20 w-60"
            style={{ opacity, translateY }}
            transition={{ duration: 0.3 }}
          >
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
