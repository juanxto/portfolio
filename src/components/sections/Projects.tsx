"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", desc: "Feito com Next.js e Tailwind" },
  { title: "API REST de Produtos", desc: "Node.js e MongoDB" },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 py-16 bg-[#0F172A]">
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-[#3B82F6]"
      >
        Projetos
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-[#1E293B] p-6 rounded-lg border border-[#334155] shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-[#94A3B8]">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
