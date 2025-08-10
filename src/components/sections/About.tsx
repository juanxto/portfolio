"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-16 bg-[#1E293B]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/fotoformatura.jpeg" 
            alt="Foto de Juan Pablo"
            width={600}
            height={350}
            className="rounded-lg shadow-lg border border-[#334155] object-cover"
          />
        </motion.div>

        {/* Coluna do Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#3B82F6]">
            Sobre mim
          </h2>
          
          <div className="space-y-4 text-[#F8FAFC] leading-relaxed">
            <p>
              Sou o <span className="font-semibold text-[#3B82F6]">Juan Pablo</span>, tenho 19 anos e sou um profissional em formação na área de tecnologia. 
              Atualmente, curso <span className="font-medium">Análise e Desenvolvimento de Sistemas na FIAP</span> com bolsa do ProUni, e tenho formação técnica 
              em Desenvolvimento de Sistemas pela <span className="font-medium">Etec de Taboão da Serra</span>.
            </p>

            <p>
              Apaixonado por <span className="font-medium">desenvolvimento full stack</span>, já participei de projetos como o 
              <span className="italic"> GreenPrint</span>, uma calculadora de pegada de carbono, e o <span className="italic">Marmota-Mobilidade</span>, 
              uma aplicação web para gestão de falhas em mobilidade urbana — ambos desenvolvidos com 
              <span className="font-medium"> Next.js, TypeScript, TailwindCSS</span> e <span className="font-medium">React</span>.
            </p>

            <p>
              Atualmente trabalho com atendimento ao cliente, o que me ajudou a desenvolver habilidades como 
              <span className="font-medium"> comunicação</span>, <span className="font-medium">trabalho em equipe</span> e 
              <span className="font-medium"> empatia</span>. Estou sempre em busca de aprender mais e crescer como desenvolvedor, 
              buscando oportunidades para aplicar meus conhecimentos e criar soluções tecnológicas de impacto positivo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
