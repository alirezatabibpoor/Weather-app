"use client";

import { motion } from "framer-motion";

export default function Sun() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      }}
      className="fixed right-20 top-16 h-32 w-32 rounded-full bg-yellow-300 shadow-[0_0_120px_40px_rgba(255,255,0,.6)]"
    />
  );
}