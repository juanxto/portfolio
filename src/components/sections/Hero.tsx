"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center"
      >
        Olá, eu sou o{" "}
        <span className="text-[#3B82F6]">Juan</span> 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-lg text-[#94A3B8] text-center max-w-xl"
      >
        Desenvolvedor Full Stack criando experiências digitais modernas e impactantes.
      </motion.p>
    </section>
  );
}