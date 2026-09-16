"use client";

import { motion } from "framer-motion";

export function SplitText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-block mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ opacity: 1, y: 0 }} // Start visible to avoid hydration disappearance
            animate={{ opacity: 1, y: 0 }}
            // We can add a simple fade from variant if needed, but for repair, 
            // the safest approach is standard block rendering without risking invisibility.
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
