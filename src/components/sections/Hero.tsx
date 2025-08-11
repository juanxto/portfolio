"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Foto com forma geométrica */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6] to-blue-600 rounded-3xl rotate-6">
            <Image
            src="/foto-perfil.png" // foto sem fundo
            alt="Foto de perfil"
            fill
            className="object-cover rounded-4xl"
            priority
          />
          </div>
          
        </motion.div>

        {/* Texto de apresentação */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center md:text-left space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Olá, eu sou <span className="text-[#3B82F6]">Juan Pablo</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            Desenvolvedor Full-Stack apaixonado por criar experiências digitais bonitas e funcionais.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-400 hover:border-[#3B82F6] rounded-lg font-semibold transition"
            >
              Entrar em Contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
