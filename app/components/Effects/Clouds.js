"use client";

import { motion } from "framer-motion";

export default function Clouds() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">

      {[...Array(5)].map((_, i) => (

        <motion.div
          key={i}
          className="absolute h-24 w-56 rounded-full bg-white/30 blur-2xl"
          initial={{
            x: -300,
            y: i * 120 + 40,
          }}
          animate={{
            x: window.innerWidth + 300,
          }}
          transition={{
            duration: 35 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      ))}

    </div>
  );
}