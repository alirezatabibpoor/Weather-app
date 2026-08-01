"use client";

import { motion } from "framer-motion";

export default function Snow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-white"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
          }}
          animate={{
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}