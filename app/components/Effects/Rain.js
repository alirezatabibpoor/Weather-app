"use client";

import { motion } from "framer-motion";

export default function Rain() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(150)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-5 bg-sky-200 rounded-full opacity-70"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
          }}
          animate={{
            y: window.innerHeight + 50,
          }}
          transition={{
            duration: Math.random() * 0.8 + 0.5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}